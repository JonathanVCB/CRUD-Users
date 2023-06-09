import { userResponseSerializer } from "./../serializers/userSerializers";
import AppDataSource from "../data-source";
import { User } from "../entities/userEntitie";
import { Apperror } from "../errors/appError";
import { IUser, IUserUpdate } from "./../interfaces/users/index";

const updatedUserService = async (
  userData: IUserUpdate,
  userIdParams: string,
  user: any
): Promise<object> => {
  if (userIdParams !== user.id ) {
    throw new Apperror("user is not authorized", 403);
  }

  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userIdParams,
  });

  if (!findUser) {
    throw new Apperror("user not exist", 404);
  }

  const updatedUser = userRepository.create({
    ...findUser,
    ...userData,
  });

  await userRepository.save(updatedUser);

  const updatedUserResponse = await userResponseSerializer.validate(
    updatedUser,
    {
      abortEarly: false,
      stripUnknown: true,
    }
  );
  return updatedUserResponse;
};

export default updatedUserService;
