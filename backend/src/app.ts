import express from 'express';
import cors from 'cors';

import { json } from "express";
import dotenv from "dotenv";

import userRouter from './routes/user';
import buildingRouter from './routes/buildings';
import taskRouter from './routes/tasks';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use('/api/users', userRouter);
app.use('/api/buildings',buildingRouter)
app.use('/api/tasks', taskRouter);

app.get("/health", (_req, res) => {
  res.json({ status: "okey" });
});

export default app;
