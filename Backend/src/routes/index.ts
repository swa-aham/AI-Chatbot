import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";

const appRouter = Router();

appRouter.use("/user", userRoutes);   // if endpoint == /domain/api/v1/user
appRouter.use("/chats", chatRoutes);   // if endpoint == /domain/api/v1/chats

export default appRouter;