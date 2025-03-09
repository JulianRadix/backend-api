import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => res.end({title: 'GET all subscriptions'}));

subscriptionRouter.get("/:id", (req, res) => res.end({title: 'GET subscription details'}));

subscriptionRouter.post("/", (req, res) => res.end({title: 'CREATE subscription'}));

subscriptionRouter.put("/:id", (req, res) => res.end({title: 'UPDATE subscription'}));

subscriptionRouter.delete("/:id", (req, res) => res.end({title: 'DELETE subscription'}));

subscriptionRouter.get("/user/:id", (req, res) => res.end({title: 'GET all user subscriptions'}));

subscriptionRouter.put("/:id/cancel", (req, res) => res.end({title: 'CANCEL subscription'}));

subscriptionRouter.get("/upcoming-renewals", (req, res) => res.end({title: 'GET upcoming renewals'}));

export default subscriptionRouter;