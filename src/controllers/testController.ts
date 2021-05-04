import { BASE_DIRECTORY } from "../app";
import type { Request, Response } from "express";

export class TestController {

  index(_req: Request, res: Response) {
    return res.status(200).json({
      responseMsg: "all ok",
      data: {
        path: BASE_DIRECTORY
      }
    });
  }
};
