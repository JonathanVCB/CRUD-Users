import {
  createContactController,
  updateContactController,
} from "./../controllers/contactController";
import { userSerializer } from "./../serializers/userSerializers";
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
  dataIsValidMiddleware(userSerializer),
  authMiddleware,
  updateContactController
);

contactRoutes.delete(
  "/:id",
  authMiddleware,
  updateContactController
);

export default contactRoutes;
