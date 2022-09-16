import { createSlice } from "@reduxjs/toolkit";

const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

enum localStorageTypes {
  WATER = "water",
  FAVORITES = "favorites",
}

export const waterSlice = createSlice({
  name: localStorageTypes.WATER,
  initialState: getLocalStorage(localStorageTypes.WATER)
    ? JSON.parse(getLocalStorage(localStorageTypes.WATER) as string)
    : [],
  reducers: {
    addWater: (state, action) => {
      setLocalStorage(localStorageTypes.WATER, state);
      return action.payload;
    },
  },
});

export const { addWater } = waterSlice.actions;
