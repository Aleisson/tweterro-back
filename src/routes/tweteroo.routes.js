import { Router } from "express";
import * as controller from "../controllers/tweteroo.controller.js"
const router = Router();

router.post('/sign-up', controller.singUp);

router.post('/tweets', controller.createTwitter);

router.get('/tweets/:username', controller.getTwitterByName);

router.get('/tweets', controller.listTwitter);

export default router;