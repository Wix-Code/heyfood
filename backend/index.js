import express from "express"
import categoryRoute from "./routes/category.routes.js"
import restaurantRoute from "./routes/restaurants.routes.js"
import reviewsRoute from "./routes/reviews.route.js"
import cors from "cors"

const app = express()
app.use(express.json());
app.use(cors({
  origin: ["https://heyfood-six.vercel.app","http://localhost:3000"],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.get("/", (req, res) => {
  res.send("Api is running")
})

app.use("/api/category", categoryRoute)
app.use("/api/restaurants", restaurantRoute)
app.use("/api/reviews", reviewsRoute)

app.listen(8800, () => {
  console.log("Database is available")
})