/*
  Warnings:

  - You are about to drop the column `food` on the `Restaurant` table. All the data in the column will be lost.
  - Added the required column `shop` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "food",
ADD COLUMN     "shop" TEXT NOT NULL,
ALTER COLUMN "openHour" SET DATA TYPE TEXT,
ALTER COLUMN "closeHour" SET DATA TYPE TEXT;
