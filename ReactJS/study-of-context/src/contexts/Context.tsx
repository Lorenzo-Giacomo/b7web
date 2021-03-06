import { createContext, useReducer } from "react";

import { UserType, userInitialState, userReducer } from "../hooks/userReducer";
import { ThemeType, themeInitialState, themeReducer } from "../hooks/themeReducer";

import { reducerActionType } from "../types/reducerActionType"

type initialStateType = {
  user: UserType,
  theme: ThemeType
}

type ContextType = {
  state: initialStateType,
  dispatch: React.Dispatch<any>
}

type Props = {
  children: React.ReactNode
}

const initialState = {
  // pode utilizar mais de um reducer
  user: userInitialState,
  theme: themeInitialState
}

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () =>  null
})

const mainReducer = (state: initialStateType, action: reducerActionType ) => ({
  user: userReducer(state.user, action),
  theme: themeReducer(state.theme, action)
})

export const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}


