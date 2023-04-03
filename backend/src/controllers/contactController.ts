import { IUserRequest } from "./../interfaces/users/index";
import { Request, Response } from "express";
import createContactService from "../services/createContactService";
import updatedContactService from "../services/updatedContactService";
import deleteContactService from "../services/deleteContactService";

export const createContactController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;

  const newContact = await createContactService(userData, req.user);

  return res.status(201).json(newContact);
};

export const updateContactController = async (req: Request, res: Response) => {
  const ContactData: IUserRequest = req.body;
  const contactIdParams: string = req.params.id;

  const updatedContact = await updatedContactService(
    ContactData,
    contactIdParams,
    req.user
  );

  return res.status(201).json(updatedContact);

};

export const deleteContactController = async (req: Request, res: Response) => {
  const contactIdParams: string = req.params.id;

  const userDelete = await deleteContactService(contactIdParams, req.user);

  return res.status(204).json(userDelete);
};

