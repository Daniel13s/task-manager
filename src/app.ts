import express, { NextFunction, Request, Response } from "express"
import {taskRoutes} from "./routes/task.routes"
import { AppError } from "./error/appError"

export const app = express()

app.use(express.json())
app.use(taskRoutes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
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