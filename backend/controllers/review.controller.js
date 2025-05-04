import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const addReview = async (req, res) => {
  const restaurantId = parseInt(req.params.id)
  const { rating, comment } = req.body

  try {
    const review = await prisma.review.create({
      data: {
        rating,
        comment,
        restaurantId,
      },
    })

    // Recalculate average rating and count
    const reviews = await prisma.review.findMany({ where: { restaurantId } })
    const reviewCount = reviews.length
    const averageRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount

    await prisma.restaurant.update({
      where: { id: restaurantId },
      data: {
        rating: parseFloat(averageRating.toFixed(1)),
        reviewCount,
      },
    })

    res.status(201).json({ message: 'Review added', review })
  } catch (err) {
    res.status(500).json({ error: 'Failed to add review' })
  }
}