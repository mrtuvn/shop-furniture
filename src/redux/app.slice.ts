import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "@/types/user";

export interface AppState {
  isLoading: boolean;
  user: IUser | null;
}

const initialState: AppState = {
  isLoading: false,
  user: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setLoading } = appSlice.actions;

export default appSlice.reducer;
