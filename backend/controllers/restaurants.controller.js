import prisma from "../utils/PrismaController.js"

export const addRestaurant = async (req, res) => {
  try {
    const { name, img, shop, openHour, discount, partyJellof, freeDrink, closeHour } = req.body
    
    const restaurant = await prisma.restaurant.create({
      data: {
        shop,
        img,
        name,
        discount,
        freeDrink,
        partyJellof,
        openHour,
        closeHour
      }
    })
    
    res.status(201).json({
      success: true,
      message: "Restaurant created successfully",
      data: restaurant
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Failed to create restaurant",
      error: error.message
    })
  }
}

export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await prisma.restaurant.findMany({})

    res.status(201).json({
      success: true,
      message: "Restaurants fetched",
      data: restaurants
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Failed to get all restauraants"
    })
  }
}