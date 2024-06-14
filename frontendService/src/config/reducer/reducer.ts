import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginAction } from "../actions/users/login";

const initialState: UserState = {
  isLoggedIn: false,
  username: null,
};

interface UserState {
  isLoggedIn: boolean;
  username: string | null;
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAction, (state, action: PayloadAction<{ username: string }>) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
    });
  },
});

export default userSlice.reducer;