import { Router } from "express";
import client from "prom-client"

export const metricsRouter = Router()

const register = new client.Registry()
client.collectDefaultMetrics({register})

metricsRouter.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType)
    const metrics = await client.register.metrics()
    res.send(metrics)
})