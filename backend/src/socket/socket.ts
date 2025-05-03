import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

// Create the HTTP server that will be used by both Express and Socket.io
const server = http.createServer(app);

// Initialize socket.io with the CORS configuration
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"],
    },
});

// Map to store userId -> socketId
const userSocketMap: { [key: string]: string } = {}; 

// Event listener for new socket connections
io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId as string;

    if (userId) {
        userSocketMap[userId] = socket.id; // Save the socket ID for the user
    }

    // Emit the list of online users to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // Handle socket disconnections
    socket.on("disconnect", () => {
        delete userSocketMap[userId]; // Remove the socket ID when the user disconnects
        io.emit("getOnlineUsers", Object.keys(userSocketMap)); // Update the list of online users
    });
});

// Use express for API routes (You can add your API routes here)

// Catch-all for any non-WebSocket routes to avoid interference with socket.io
app.all("*", (req, res) => {
    res.status(404).send("Not Found");
});

export const getReceiverSocketId = (receiverId: string) => {
    return userSocketMap[receiverId];
};

export { app, io, server };
