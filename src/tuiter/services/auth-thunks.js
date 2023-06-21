import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const loginThunk = createAsyncThunk(
 "user/login", async (credentials) => {
   const user = await authService.login(credentials);
   return user;
 }
);

export const registerThunk = createAsyncThunk(
  "user/registerUser",
  async ({ firstName, lastName, username, password, image }) => {
      const userData = {
          firstName,
          lastName,
          username,
          password,
          image,
      };
      console.log(firstName);
      await authService.register(userData);
      return userData;
  }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
    return await authService.profile();
   });


export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
    return await authService.logout();
   });


export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
      await authService.updateUser(user);
      return user;
   });
   