-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "bio" TEXT
);
INSERT INTO "new_Bio" ("bio", "id", "userid") SELECT "bio", "id", "userid" FROM "Bio";
DROP TABLE "Bio";
ALTER TABLE "new_Bio" RENAME TO "Bio";
CREATE UNIQUE INDEX "Bio_userid_key" ON "Bio"("userid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
