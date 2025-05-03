import prisma from "../utils/PrismaController.js"

export const addProducts = async (req, res) => {
  try {
    const { name, img, foods } = req.body
    
    const category = await prisma.category.create({
      data: {
        name,
        img,
        foods
      }
    })
    
    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Failed to create category",
      error: error.message
    })
  }
}

export const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.catergory.findMany({})

    res.status(201).json({
      success: true,
      message: "Products fetched",
      data: products
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Failed to get all products"
    })
  }
}