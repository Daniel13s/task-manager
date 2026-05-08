import { NextFunction, Request, Response } from "express";
import { AppError } from "./error/appError.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export function middleware(req: Request, res: Response, next: NextFunction) {
  try {
    const authorization = req.headers.authorization;
    const token = authorization?.split(" ")[1];

    if (!token) throw new AppError("Token is invalid", 401);

    const user = jwt.verify(token, process.env.SECRET_KEY!);

    req.user = user as { id: string }

    return next();
  } catch (err) {
    return new AppError("Internal Server Error", 500)
  }
}
