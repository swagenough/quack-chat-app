import express from 'express';
import cookieParser from 'cookie-parser';
import path from "path";
import morgan from 'morgan';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import dotenv from 'dotenv';
import { app, server } from './socket/socket.js';
dotenv.config();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();
const format = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
app.use(morgan(format));
app.use(cookieParser());
app.use(express.json()); // for parsing application/json
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
if (process.env.NODE_ENV !== "development") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    });
}
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
