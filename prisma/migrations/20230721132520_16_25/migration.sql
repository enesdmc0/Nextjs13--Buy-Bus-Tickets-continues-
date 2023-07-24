/*
  Warnings:

  - Added the required column `travelStartTime` to the `Bus` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bus" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "departureCity" TEXT NOT NULL,
    "arrivalCity" TEXT NOT NULL,
    "travelHistory" TEXT NOT NULL,
    "travelTime" TEXT NOT NULL,
    "travelStartTime" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "emptySeat" INTEGER NOT NULL
);
INSERT INTO "new_Bus" ("arrivalCity", "capacity", "companyName", "createdAt", "departureCity", "emptySeat", "id", "price", "travelHistory", "travelTime", "updatedAt") SELECT "arrivalCity", "capacity", "companyName", "createdAt", "departureCity", "emptySeat", "id", "price", "travelHistory", "travelTime", "updatedAt" FROM "Bus";
DROP TABLE "Bus";
ALTER TABLE "new_Bus" RENAME TO "Bus";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
