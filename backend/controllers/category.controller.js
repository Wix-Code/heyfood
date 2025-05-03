import prisma from "../utils/PrismaController.js"

export const addCategory = async (req, res) => {
  try {
    const { name, img } = req.body
    
    const category = await prisma.catergory.create({
      data: {
        name,
        img
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

export const getAllCategories = async (req, res) => {
  try {
    const category = await prisma.catergory.findMany({})

    res.status(201).json({
      success: true,
      message: "Categories fetched",
      data: category
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Failed to get all categories"
    })
  }
}