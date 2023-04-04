import {
  createContactController,
  updateContactController,
  deleteContactController,
} from "./../controllers/contactController";
import {
  userSerializer,
  userUpdateSerializer,
} from "./../serializers/userSerializers";
import { Router } from "express";
import dataIsValidMiddleware from "../middlewares/dataIsValidMiddleware";
import authMiddleware from "../middlewares/AuthMiddleware";

const contactRoutes = Router();

contactRoutes.post(
  "",
  dataIsValidMiddleware(userSerializer),
  authMiddleware,
  createContactController
);

contactRoutes.patch(
  "/:id",
  dataIsValidMiddleware(userUpdateSerializer),
  authMiddleware,
  updateContactController
);

contactRoutes.delete("/:id", authMiddleware, deleteContactController);

export default contactRoutes;
