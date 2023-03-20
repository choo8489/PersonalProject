import express from "express";
import http from "http";
import SocketIO from "socket.io"
import { setTimeout } from "timers/promises";

const app = express();

app.set("view engine", "pug")
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);
//app.listen(3000, handleListen);

const server = http.createServer(app);
const wsServer = SocketIO(server);

wsServer.on("connection", socket => {
    socket.on("enter_room", (roomName, done) => {
        socket.join(roomName);
        done();
    });
})

//const wss = new WebSocket.Server({server});
// const sockets = [];
// wss.on("connection", (socket) => { 
//     sockets.push(socket);
//     socket["nickname"] = "Anon";
//     socket.on("close", () => console.log("close")); 
//     socket.on("message", (msg) => {
//         const message = JSON.parse(msg);
//         switch(message.type) {
//             case "new_message":
//                 sockets.forEach((aSocket) => aSocket.send(`${socket.nickname}: ${message.payload}`));
//             case "nickname":
//                 socket["nickname"] = message.payload;
//         }        
//     });
// }); 

server.listen(3000, handleListen);

