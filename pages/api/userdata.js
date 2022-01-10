import cookie from "cookie";
import { PrismaClient } from "@prisma/client";

/* const data = {
  username: "anishdai",
  email: "rpaudel379@gmail.com",
  country: "Nepal",
}; */

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "GET") {
    const allUsers = await prisma.user.findMany();

    res.status(200).json({ message: "user info api route", allUsers });
    return;
  }

  if (req.method === "DELETE") {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", null, {
        maxAge: 0,
        httpOnly: true,
        secure: true,
        path: "/",
      })
    );

    res.status(200).json("ok");
    return;
  }

  if (req.method === "POST") {
    const token = req.cookies.token;
    if (token) {
      try {
        const data = await prisma.user.findUnique({
          where: { email: JSON.parse(token) },
        });

        res.status(200).json(data);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error while getting data" });
      }

      return;
    }

    res.status(500).json({ error: "token not found" });
  }
};
