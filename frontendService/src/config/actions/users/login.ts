import { createAction } from "@reduxjs/toolkit";

interface LoginPayload {
  username: string;
}


export const loginAction = createAction<LoginPayload>("user/login");
