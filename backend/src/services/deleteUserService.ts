import { User } from "./../entities/userEntitie";
import AppDataSource from "../data-source";
import { Apperror } from "../errors/appError";

const deleteUserService = async (userIdParams: string, user: any) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userIdParams,
  });

  if (!findUser) {
    throw new Apperror("user not exist", 404);
  }

  await userRepository.delete({id: userIdParams})



  return {};
};

export default deleteUserService;
