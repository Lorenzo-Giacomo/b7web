import { createContext, useReducer } from "react";

import { UserType, userInitialState, userReducer } from "../hooks/userReducer";

import { reducerActionType } from "../types/reducerActionType"

type initialStateType = {
  user: UserType
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
  user: userInitialState
}

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () =>  null
})

const mainReducer = (state: initialStateType, action: reducerActionType ) => ({
  user: userReducer(state.user, action)
})

export const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  )
}


