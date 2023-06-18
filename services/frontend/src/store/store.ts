import { configureStore } from "@reduxjs/toolkit";
import flashy from './authSlice';

export const store = configureStore({
  reducer: {
    flashy,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch