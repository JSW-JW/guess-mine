import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));

app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);
app.get("/3d", (req, res) => {
  res.render("3d");
});

const handleListening = () =>
  console.log(`✅Server Running: http://localhost:${PORT}`);
const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

io.on("connection", (socket) => socketController(socket, io));
