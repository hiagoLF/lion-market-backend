import "./config/dotenv";
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { createConnection } from "typeorm";
import { appRoutes } from "./routes";
import { errors as celebrateErrors } from "celebrate";
import bodyParser from "body-parser";
import { expressAsyncErrors } from "./errors/ExpressErrorMidleware";
import { pagination } from "typeorm-pagination";

createConnection();

const app = express();

app.use(bodyParser.json());
app.use(pagination)

app.use("/", appRoutes);

app.use(expressAsyncErrors);
app.use(celebrateErrors());

app.listen(8001, () => console.log("Server is Running..."));
