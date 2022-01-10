-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProfileImg" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "image" TEXT DEFAULT 'https://www.aquaknect.com.au/wp-content/uploads/2014/03/blank-person-300x300.jpg'
);
INSERT INTO "new_ProfileImg" ("email", "id", "image") SELECT "email", "id", "image" FROM "ProfileImg";
DROP TABLE "ProfileImg";
ALTER TABLE "new_ProfileImg" RENAME TO "ProfileImg";
CREATE UNIQUE INDEX "ProfileImg_email_key" ON "ProfileImg"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
