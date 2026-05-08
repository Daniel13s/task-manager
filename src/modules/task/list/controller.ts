import { Request, Response } from "express";
import { AppError } from "../../../error/appError.js";
import { querySchema, userSchema } from "./schema.js";
import { ZodError } from "zod";

export class ListTaskController {
  constructor(public service: any) {}
  async execute(req: Request, res: Response) {
    try {
      const { id } = userSchema.parse(req.user);
      const { limit, page, isCompleted, title } = querySchema.parse(req.query);

      const tasks = await this.service.execute(
        id,
        limit,
        page,
        isCompleted,
        title,
      );

      res.status(200).json({
        message: "All tasks",
        tasks,
      });
    } catch (err) {
      if (err instanceof ZodError) {
        throw new AppError("Campos invalidos", 400);
      }

      throw err;
    }
  }
}
