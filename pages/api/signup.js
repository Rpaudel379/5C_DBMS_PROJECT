import cookie from "cookie";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function signup(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "This is api route" });
    return;
  }

  /* forms */

  if (req.method === "POST") {
    const { firstname, lastname, email, country, city, state, password } =
      req.body.credentials;

    if (
      !firstname.trim().length ||
      !lastname.trim().length ||
      !email.trim().length ||
      !country.trim().length ||
      !city.trim().length ||
      !state.trim().length ||
      !password.trim().length
    ) {
      res.status(500).json({ message: "Please check all your inputs" });
      return;
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      //todo use database
      const createdUser = await prisma.user.create({
        data: {
          firstname,
          lastname,
          email,
          country,
          city,
          state,
          password: hashedPassword,
        },
      });

      await prisma.profileImg.create({
        data: {
          email,
          image:
            "https://www.aquaknect.com.au/wp-content/uploads/2014/03/blank-person-300x300.jpg",
        },
      });
      console.log(createdUser);
      //todo use database
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", JSON.stringify(createdUser.email), {
          httpOnly: true,
          maxAge: 86400,
          secure: true,
          path: "/",
        })
      );

      res.status(200).json({ message: "ok", token: createdUser.email });
    } catch (error) {
      res.status(500).json({ message: "email exists already" });
      console.log(error, "error");
    }
  }
}
