import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import messageController from '../controllers/message.controller.js'

const router = express.Router();

router.get("/conversations", protectRoute.protectRoute, messageController.getUsersForSidebar);

router.get("/:id", protectRoute.protectRoute, messageController.getMessage);

router.post("/send/:id", protectRoute.protectRoute, messageController.sendMessage);

export default router;