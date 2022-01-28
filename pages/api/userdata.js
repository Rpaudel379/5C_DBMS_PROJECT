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
    const users = await prisma.user.findMany();

    const infos = await prisma.info.findMany();

    const adresses = await prisma.address.findMany();

    const bio = await prisma.bio.findMany();

    let allUsers = [];
    allUsers = users.map((user, i) => {
      return { ...user, ...infos[i], ...adresses[i], ...bio[i] };
    });

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

  // specific user info
  if (req.method === "POST") {
    const token = req.cookies.token;
    if (token) {
      try {
        // getting info from models (tables)

        const user = await prisma.user.findUnique({
          where: { id: JSON.parse(token) },
        });

        const { firstname, lastname } = await prisma.info.findUnique({
          where: { userid: JSON.parse(token) },
        });

        const { country, state, city } = await prisma.address.findUnique({
          where: { userid: JSON.parse(token) },
        });

        let bio = await prisma.bio.findUnique({
          where: { userid: JSON.parse(token) },
        });

        if (!bio) {
          bio = null;
        } else {
          bio = bio.bio;
        }

        const data = {
          ...user,
          firstname,
          lastname,
          country,
          state,
          city,
          bio,
        };

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
