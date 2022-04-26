import { createSlice } from "@reduxjs/toolkit";

// criando reducer com redux:
const slice = createSlice({
  name: 'user', // quase não é usado
  initialState: { // valores iniciais do estado. Geralmente se põe as
    name: "Lorenzo",
    age: 20
  },
  reducers: { // especifica as ações
    // state recebe o estado inicial, as informações atuais
    setName: (state, action) => {
      state.name = action.payload
    },
    setAge: (state, action) => {
      state.age = action.payload
    }
  }
})
// exportar o grupo de actions que foram criadas.
export const { setName, setAge} = slice.actions
export default slice.reducer