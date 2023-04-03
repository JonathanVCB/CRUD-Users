import {
  createUserController,
  deleteUserController,
  listUsersContactController,
  updatedUserController,
} from "./../controllers/usersControllers";
import { Router } from "express";
import dataIsValidMiddleware from "../middlewares/dataIsValidMiddleware";
import {
  userSerializer,
  userUpdateSerializer,
} from "../serializers/userSerializers";
import authMiddleware from "../middlewares/AuthMiddleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  dataIsValidMiddleware(userSerializer),
  createUserController
);

usersRoutes.get("", authMiddleware, listUsersContactController);

usersRoutes.patch(
  "/:id",
  dataIsValidMiddleware(userUpdateSerializer),
  authMiddleware,
  updatedUserController
);
usersRoutes.delete("/:id", authMiddleware, deleteUserController);

export default usersRoutes;
