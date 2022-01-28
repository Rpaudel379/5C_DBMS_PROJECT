-- CreateTable
CREATE TABLE "Bio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "bio" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Bio_userid_key" ON "Bio"("userid");
