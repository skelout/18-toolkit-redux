import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./apis";
import { counterSlice } from "./slices/counter/";
import { pokemonSlice } from "./slices/pokemons";

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
