import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async (req, res) => {
  // change the values
  if (req.method == "POST") {
    const { type, changeValue, userid } = req.body;

    if (!changeValue.trim().length) {
      res.status(500).json({ message: "please check your input" });
      return;
    }

    try {
      if (type === "name") {
        const names = changeValue.split(" ");

        await prisma.info.updateMany({
          where: { userid },
          data: {
            firstname: names[0],
            lastname: names[1],
          },
        });
      } else if (type === "country") {
        await prisma.address.updateMany({
          where: {
            userid,
          },
          data: {
            country: changeValue,
          },
        });
      } else if (type === "state") {
        await prisma.address.updateMany({
          where: {
            userid,
          },
          data: {
            state: changeValue,
          },
        });
      } else if (type === "city") {
        await prisma.address.updateMany({
          where: {
            userid,
          },
          data: {
            city: changeValue,
          },
        });
      } else if (type === "email") {
        await prisma.user.updateMany({
          where: {
            id: userid,
          },
          data: {
            email: changeValue,
          },
        });
      } else if (type === "password") {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(changeValue, salt);

        await prisma.user.updateMany({
          where: {
            id: userid,
          },
          data: {
            password: hashedPassword,
          },
        });
      } else if (type === "bio") {
        const bio = await prisma.bio.upsert({
          where: {
            userid,
          },
          update: {
            bio: changeValue,
          },
          create: {
            userid,
            bio: changeValue,
          },
        });

      }

      res.status(200).json({ message: "ok" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  }
};
