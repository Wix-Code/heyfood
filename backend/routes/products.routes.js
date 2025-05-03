import express from "express"
import { addProducts, getAllProducts } from "../controllers/products.category.js";

const router = express.Router();

router.post("/", addProducts)
router.get("/", getAllProducts)

export default router