import express from 'express';
import cors from 'cors';

import { json } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.get("/health", (_req, res) => {
  res.json({ status: "okey" });
});

export default app;
