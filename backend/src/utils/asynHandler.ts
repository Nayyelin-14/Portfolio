import { NextFunction, Request, Response } from "express";

const asyncHandler = (
  controllerFN: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>
) => {
  return (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(controllerFN(req, res, next)).catch(next);
};

export default asyncHandler;
