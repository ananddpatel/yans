import cors from 'cors';
import express, { Request, Response } from 'express';

export const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  res.json({ health: 'ok' });
});
