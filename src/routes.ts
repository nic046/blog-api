import { Router } from "express";
import { PostRoutes } from "./presentation/post/router";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/post", PostRoutes.routes)

    return router;
  }
}
