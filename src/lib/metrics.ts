import client from "prom-client"

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({register: client.register})

export const httpRequestDurantionMicroseconds = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duração das requisições HTTP em segundos',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 10]
})