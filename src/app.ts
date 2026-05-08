import express, { NextFunction, Request, Response } from "express"
import {taskRoutes} from "./routes/task.routes.js"
import { AppError } from "./error/appError.js"
import { userRoutes } from "./routes/user.routes.js"
import { metricsRouter } from "./routes/metrics.routes.js"
import { httpRequestDurantionMicroseconds } from "./lib/metrics.js"

export const app = express()

app.use(express.json())
app.use(userRoutes)
app.use(taskRoutes)
app.use(metricsRouter)

app.use((req: Request, res: Response, next: NextFunction) => {
    const end = httpRequestDurantionMicroseconds.startTimer()
    res.on('finish', () => {
        end({
            method: req.method,
            route: req.route?.path || req.url,
            status_code: res.statusCode
        })
    })
    next()
})

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.code === 'P2002' || err.name === 'PrismaClientValidationError') {
    return res.status(400).json({
      status: 'error',
      message: 'Dados inválidos ou relacionamento faltando.'
    });
  }

    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        })
    }

    console.error(err)

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})