import cookie from "cookie";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function signin(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Signin api route" });
    return;
  }

  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email.trim().length || !password.trim().length) {
      res.status(500).json({ message: "invalid email or password" });
      return;
    }

    try {
      //todo use database

      const findUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (findUser) {
        const checkPassword = await bcrypt.compare(password, findUser.password);
        if (checkPassword) {
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", JSON.stringify(findUser.email), {
              httpOnly: true,
              maxAge: 86400,
              secure: true,
              path: "/",
            })
          );
          res.status(200).json({ message: "ok", token: findUser.email });
        } else {
          res.status(401).json({ message: "incorrect password" });
        }
      } else {
        res.status(401).json({ message: "incorrect email" });
      }

      // todo use database
      /* */
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "please check your email and password" });
    }
  }
}
