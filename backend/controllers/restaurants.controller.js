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
  const { sort, search } = req.query

  let orderBy = { createdAt: 'desc' }

  if (sort === 'highest-rated') orderBy = { rating: 'desc' }
  if (sort === 'most-rated') orderBy = { reviewCount: 'desc' }
  if (sort === 'newest') orderBy = { createdAt: 'desc' }
  if (sort === 'oldest') orderBy = { createdAt: 'asc' }
  try {
    const restaurants = await prisma.restaurant.findMany({
      where: search
        ? {
            name: {
              contains: String(search),
              mode: 'insensitive',
            },
          }
        : undefined,
      orderBy,
      include: {
        reviews: true,
      },
      })
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