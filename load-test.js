import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 20 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<200'], // 95% das reqs devem ser < 200ms
    http_req_failed: ['rate<0.01'],   // Menos de 1% de erro
  },
};

const BASE_URL = 'http://127.0.0.1:3000';

export function setup() {
  const loginPayload = JSON.stringify({
    email: 'dansilvac254@gmail.com',
    password: 'eusoufodademais',
  });

  const loginRes = http.post(`${BASE_URL}/login`, loginPayload, {
    headers: { 'Content-Type': 'application/json' },
  });

  check(loginRes, {
    'login realizado com sucesso': (r) => r.status === 200
  })

  return { id: loginRes.json('id'), token: loginRes.json('token')}
}

export default function (data) {
  const authHeaders = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${data.token}`,
    },
  };

  const taskPayload = JSON.stringify({
    title: `Task Gerada pelo k6 - ${__VU}:${__ITER}`,
    description: 'Teste de carga',
  });

  const createTaskRes = http.post(`${BASE_URL}/task`, taskPayload, authHeaders);

  check(createTaskRes, {
    'tarefa criada': (r) => r.status === 201,
  });

  const listTasksRes = http.get(`${BASE_URL}/task?page=1&limit=10`, authHeaders);

  check(listTasksRes, {
    'lista obtida com sucesso': (r) => r.status === 200,
    'lista não está vazia': (r) => r.json().length > 0,
  });

  sleep(1);
}

export function teardown(data) {
  console.log('--- Iniciando Teardown: Limpando banco de dados ---');

  const response = http.del(`${BASE_URL}/user/${data.id}`, null, {
    headers: {Authorization: `Bearer ${data.token}`}
  })
  check(response, {
    'tasks deletadas com sucesso': (r) => r.status === 200
  })
}