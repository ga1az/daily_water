import { configureStore } from "@reduxjs/toolkit";
import { waterSlice } from "./water";

export default configureStore({
  reducer: {
    water: waterSlice.reducer,
  },
});
