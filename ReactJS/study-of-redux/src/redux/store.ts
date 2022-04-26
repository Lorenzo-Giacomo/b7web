import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import themeReducer from "./reducers/themeReducer";

export const store = configureStore({
  reducer:{
    user: userReducer,
    theme: themeReducer
  }
})
// depois que criar a store, precisa criar um type. É um type aglomerativo, junta todos os types de todos os reducers. Preciso dele quando for recuperar as informações.

export type RootState = ReturnType<typeof store.getState>
