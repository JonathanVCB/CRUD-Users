import { IUserLogin } from "../interfaces/users";
import Jwt from "jsonwebtoken";
import AppDataSource from "../data-source";
import { User } from "../entities/userEntitie";
import "dotenv/config";
import { Apperror } from "../errors/appError";

const createSessionService = async ({ email }: IUserLogin): Promise<any> => {
  const userRepository = AppDataSource.getTreeRepository(User);
  const user = await userRepository.findOne({
    where: {
      email: email,
    },
    relations: {
      contacts: true,
    },
  });

  if (!user) {
    throw new Apperror("email is invalid", 403);
  }

  const token = Jwt.sign(
    {
      name: user.name,
    },
    process.env.SECRET_KEY,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return { user, token };
};

export default createSessionService;
