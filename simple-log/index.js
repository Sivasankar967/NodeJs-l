import express from "express";
import dotenv from "dotenv";
import connect from "./mongo/connect.js";
import userRoutes from './routes/user.router.js'

dotenv.config();
const app = express();
app.use(express.json())

app.use("/users", userRoutes)

app.listen(process.env.PORT, () => {
  connect();
  console.log("server is running");
});
