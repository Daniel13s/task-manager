import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // Configuração do cenário
  stages: [
    { duration: '1m', target: 300 },
    { duration: '2m', target: 600 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const url = 'http://127.0.0.1:3000/task?page=1&limit=10';
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIyNDJjYTA5LWQ4ZDgtNGFkOS1iYTI3LTQwODE4ZmJkMGIzZiIsImlhdCI6MTc3ODE5ODA5MywiZXhwIjoxNzc4MTk4OTkzfQ.p7qhFiV60ItgCqr1fyo9CpFxleYL_Fc7yNr_g8-d4gg', 
    },
  };

  const res = http.get(url, params);

  // Verifica se o status é 200 e se o tempo de resposta é menor que 200ms
  check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo de resposta < 200ms': (r) => r.timings.duration < 200,
  });

  sleep(1); 
}