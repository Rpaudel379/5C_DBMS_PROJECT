/*
  Warnings:

  - You are about to drop the column `email` on the `ProfileImg` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Info` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idd` on the `User` table. All the data in the column will be lost.
  - Added the required column `userid` to the `ProfileImg` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userid` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userid` to the `Info` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProfileImg" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "image" TEXT
);
INSERT INTO "new_ProfileImg" ("id", "image") SELECT "id", "image" FROM "ProfileImg";
DROP TABLE "ProfileImg";
ALTER TABLE "new_ProfileImg" RENAME TO "ProfileImg";
CREATE UNIQUE INDEX "ProfileImg_userid_key" ON "ProfileImg"("userid");
CREATE TABLE "new_Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL
);
INSERT INTO "new_Address" ("city", "country", "id", "state") SELECT "city", "country", "id", "state" FROM "Address";
DROP TABLE "Address";
ALTER TABLE "new_Address" RENAME TO "Address";
CREATE UNIQUE INDEX "Address_userid_key" ON "Address"("userid");
CREATE TABLE "new_Info" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL
);
INSERT INTO "new_Info" ("firstname", "id", "lastname") SELECT "firstname", "id", "lastname" FROM "Info";
DROP TABLE "Info";
ALTER TABLE "new_Info" RENAME TO "Info";
CREATE UNIQUE INDEX "Info_userid_key" ON "Info"("userid");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id", "password") SELECT "email", "id", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
