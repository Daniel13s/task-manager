import express, { NextFunction, Request, Response } from "express"
import {taskRoutes} from "./routes/task.routes.js"
import { AppError } from "./error/appError.js"
import { userRoutes } from "./routes/user.routes.js"

export const app = express()

app.use(express.json())
app.use(userRoutes)
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