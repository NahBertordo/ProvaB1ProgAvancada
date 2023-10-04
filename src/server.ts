import express from "express";

import * as dotenv from "dotenv";
import PostRouter from "./routes/PacienteRoutes";

dotenv.config({ path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env" });

const app = express();

app.use("/api", PostRouter);

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} else {
  console.log("Fail to load environment");
}