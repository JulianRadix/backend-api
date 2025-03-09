import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.end({title: 'GET all users'}));

userRouter.get("/:id", (req, res) => res.end({title: 'GET user details'}));

userRouter.post("/", (req, res) => res.end({title: 'CREATE new user'}));

userRouter.put("/:id", (req, res) => res.end({title: 'UPDATE user'}));

userRouter.delete("/:id", (req, res) => res.end({title: 'DELETE user'}));

export default userRouter;