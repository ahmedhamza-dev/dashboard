import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "63701cc1f03239b7f700000e",
};

export const userSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
});

export default userSlice;