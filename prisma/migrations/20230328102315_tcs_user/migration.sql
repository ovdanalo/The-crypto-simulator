-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "cryptoSell" JSONB NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "totalEur" TEXT NOT NULL,
    "percentuageEur" TEXT NOT NULL,
    "cryptoData" JSONB NOT NULL,
    "totalUsd" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
