import { configureStore } from "@reduxjs/toolkit";
import carrinhoReducer from "./carrinho";
import favoritosReducer from "./favoritos"

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer,
  }
})

export type RootReducer = ReturnType<typeof store.getState>
