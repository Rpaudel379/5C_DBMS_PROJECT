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
  // get specific profile image for dashboard

  if (req.method == "GET") {
    const token = JSON.parse(req.cookies.token);

    const profileImg = await prisma.profileImg.findUnique({
      where: {
        userid: token,
      },
    });

    res.status(200).json(profileImg);
  }

  // update profile image of specific user
  if (req.method == "POST") {
    const { userid, image } = req.body;

    try {
      await prisma.profileImg.updateMany({
        where: {
          userid,
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
