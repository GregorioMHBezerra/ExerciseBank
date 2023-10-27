import express, { Express, Request, Response, NextFunction } from "express";
import router, * as routers from './routes';
import BaseHTTPError from "./errors/httpError";

const app: Express = express();

//middlewares
app.use(express.json());

//routes    
app.get("/health", (_req: Request, res: Response) => {
    res.status(200).send("OK");
});

app.use(router);

app.use((err: BaseHTTPError, _: Request, res: Response, __: NextFunction) => {
    if (err.statusCode) {
      return res.status(err.statusCode).json({ message: err.message });
    }
    // eslint-disable-next-line no-console
    console.error(err.message);
    return res.status(500).json({ message: 'Erro interno' });
  });

export default app;