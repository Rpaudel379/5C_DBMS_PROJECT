import cookie from "cookie";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "DELETE") {
    const token = req.cookies.token;

    try {
      const user = await prisma.user.delete({
        where: {
          id: JSON.parse(token),
        },
      });

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", null, {
          maxAge: 0,
          httpOnly: true,
          secure: true,
          path: "/",
        })
      );

      res.status(200).json({ message: "ok" });
    } catch (error) {
      res.status(400).json({ message: "invalid user" });
    }
  }
};
