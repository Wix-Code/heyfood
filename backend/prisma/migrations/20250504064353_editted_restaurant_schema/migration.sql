/*
  Warnings:

  - Added the required column `freeDrink` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partyJellof` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "discount" TEXT,
ADD COLUMN     "freeDrink" BOOLEAN NOT NULL,
ADD COLUMN     "partyJellof" BOOLEAN NOT NULL;
