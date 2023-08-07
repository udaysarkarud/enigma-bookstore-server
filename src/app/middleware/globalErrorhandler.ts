import { ErrorRequestHandler } from "express";

const globalErrorhandler: ErrorRequestHandler = (error, req, res, next) => {
  error.status = error.status || 401;
  res.status(error.status).json({
    success: false,
    message: error,
  });
};

export default globalErrorhandler;
