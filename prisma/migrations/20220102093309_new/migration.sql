/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `ProfileImg` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ProfileImg_email_key" ON "ProfileImg"("email");
