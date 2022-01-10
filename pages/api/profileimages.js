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
    const profileImg = await prisma.profileImg.findMany();

    res.status(200).json(profileImg);
  }
};
