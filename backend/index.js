import express from "express"
import categoryRoute from "./routes/category.routes.js"
import restaurantRoute from "./routes/restaurants.routes.js"

const app = express()
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running")
})

app.use("/api/category", categoryRoute)
app.use("/api/restaurants", restaurantRoute)

app.listen(8800, () => {
  console.log("Database is available")
})