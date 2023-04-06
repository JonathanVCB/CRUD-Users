import express from "express";
import "reflect-metadata";
import "express-async-errors";
import usersRoutes from "./routes/usersRoutes";
import sessionRoutes from "./routes/sessionUserRoutes";
import contactRoutes from "./routes/contactRoutes";
import handleError from "./errors/handleError";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", usersRoutes);
app.use("/login", sessionRoutes);
app.use("/contact", contactRoutes);

app.use(handleError);

export default app;
