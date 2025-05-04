import express from "express"
import { addRestaurant, getAllRestaurants } from "../controllers/restaurants.controller.js";

const router = express.Router();

router.post("/", addRestaurant)
router.get("/", getAllRestaurants)

export default router