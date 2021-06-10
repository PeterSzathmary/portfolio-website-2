import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import routes from "./routes/routes.js";
import mongoose from "mongoose";

//console.log(routes);

mongoose.connect("mongodb://127.0.0.1:27017/acme", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
const server = http.createServer(app);
export const io = new Server(server);
const port = 3000;
const hostname = "localhost";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.set("view engine", "ejs");
app.set("views", "./public/views");

server.listen(port, () => {
    console.log(`Express app is listening at http://${hostname}:${port}`);
});
