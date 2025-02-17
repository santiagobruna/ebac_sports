import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Produto } from "../../App";

type favoritosState = {
  itens: Produto[]
}

const initialState: favoritosState = {
  itens: []
}
const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload; // Extraímos o produto que foi passado como argumento para a ação.
      const produtoExiste = state.itens.find(p => p.id === produto.id);
      if(produtoExiste){
        state.itens = state.itens.filter(p => p.id !== produto.id);
      }else {
        state.itens.push(produto)
      }
    }
  }
})

export const {favoritar} = favoritosSlice.actions
export default favoritosSlice.reducer
