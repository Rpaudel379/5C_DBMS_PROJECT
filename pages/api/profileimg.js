import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // Set desired value here
    },
  },
};

export default async (req, res) => {
  if (req.method == "GET") {
    console.log(req.path);
    const token = JSON.parse(req.cookies.token);

    const profileImg = await prisma.profileImg.findUnique({
      where: {
        email: token,
      },
    });

    res.status(200).json(profileImg);
  }

  if (req.method == "POST") {
    const { email, image } = req.body;

    try {
      await prisma.profileImg.updateMany({
        where: {
          email: email,
        },
        data: {
          image,
        },
      });

      res.status(200).json({ message: "ok" });
    } catch (error) {
      console.log(error, "prisma error");
      res.status(500).json({ message: "error" });
    }
  }
};
