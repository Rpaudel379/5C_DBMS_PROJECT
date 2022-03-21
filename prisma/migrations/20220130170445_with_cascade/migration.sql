-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Info" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    CONSTRAINT "Info_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Info" ("firstname", "id", "lastname", "userid") SELECT "firstname", "id", "lastname", "userid" FROM "Info";
DROP TABLE "Info";
ALTER TABLE "new_Info" RENAME TO "Info";
CREATE UNIQUE INDEX "Info_userid_key" ON "Info"("userid");
CREATE TABLE "new_ProfileImg" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "image" TEXT,
    CONSTRAINT "ProfileImg_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProfileImg" ("id", "image", "userid") SELECT "id", "image", "userid" FROM "ProfileImg";
DROP TABLE "ProfileImg";
ALTER TABLE "new_ProfileImg" RENAME TO "ProfileImg";
CREATE UNIQUE INDEX "ProfileImg_userid_key" ON "ProfileImg"("userid");
CREATE TABLE "new_Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    CONSTRAINT "Address_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Address" ("city", "country", "id", "state", "userid") SELECT "city", "country", "id", "state", "userid" FROM "Address";
DROP TABLE "Address";
ALTER TABLE "new_Address" RENAME TO "Address";
CREATE UNIQUE INDEX "Address_userid_key" ON "Address"("userid");
CREATE TABLE "new_Bio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "bio" TEXT,
    CONSTRAINT "Bio_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Bio" ("bio", "id", "userid") SELECT "bio", "id", "userid" FROM "Bio";
DROP TABLE "Bio";
ALTER TABLE "new_Bio" RENAME TO "Bio";
CREATE UNIQUE INDEX "Bio_userid_key" ON "Bio"("userid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
