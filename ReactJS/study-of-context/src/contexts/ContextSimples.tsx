import { createContext } from "react";

type ContextType = {
  name: string;
  age: number
}
type Props = {
  children: React.ReactNode
}

const initialState = {
  name: 'Lorenzo',
  age: 20
}

export const Context = createContext<ContextType>(initialState)

export const ContextProvider = ({ children }: Props) => {
  return (
    // cria a "bolha" e toda aplicação dentro terá acesso ao contexto. O que estiver dentro do contexto é children.
    // além do contexto precisa enviar os dados que serão disponibilizados no contexto
    <Context.Provider value={initialState}>
      {children}
    </Context.Provider>
    // toda aplicação terá acesso aos valores de name e age quando envelopamos esse componente de contexto no App
  )
}
