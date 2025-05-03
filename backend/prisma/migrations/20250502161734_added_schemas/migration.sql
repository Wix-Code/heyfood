-- CreateTable
CREATE TABLE "Catergory" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Catergory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "food" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
