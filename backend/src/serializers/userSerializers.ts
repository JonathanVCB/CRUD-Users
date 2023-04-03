import {
  IUserLogin,
  IUserRequest,
  IUserUpdate,
} from "./../interfaces/users/index";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser } from "./../interfaces/users/index";

export const userSerializer: SchemaOf<IUserRequest> = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  telephone: yup.string().required()
});

export const userResponseSerializer: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  telephone:yup.string().notRequired(),
  createdAt: yup.date().notRequired(),
});

export const userResponseSerializerArray: SchemaOf<IUser[]> = yup.array(
  userResponseSerializer
);

export const userLoginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup.string().email().required(),
});

export const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  telephone: yup.string().notRequired(),
});
