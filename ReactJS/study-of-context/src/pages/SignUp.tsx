import { Link } from "react-router-dom"
import React, { useContext, useState } from "react"
import { Context } from "../contexts/Context"


export const SignUp = () => {
  const {state, dispatch} = useContext(Context)
  // não preciso mais de state dos inputs pois estou buscando direto dentro do contexto e provider
  // const [nameInput, setNameInput] = useState(state.user.name)
  // const [ageInput, setAgeInput] = useState(0)


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: {
        name: e.target.value
      }
    })
    // quando mudar o nome mudará só no input. Tiramos o setName pois já enviamos para o contexto as infos e a estamos resgatando no value.
    // setNameInput(e.target.value)
  }
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_AGE',
      payload: {
        age: parseInt(e.target.value)
      }
    })
  }
  // função que mudará as informações no contexto e provider. Não preciso mais pois estou enviando as informações nas funções do input
  // const handleSave = () => {
  //   dispatch({
  //     type: 'CHANGE_NAME',
  //     payload: {
  //       name: nameInput
  //     }
  //   })
  //   dispatch({
  //     type: 'CHANGE_AGE',
  //     payload: {
  //       age: ageInput
  //     }
  //   })
  // }

  return (
    <div>
      <h3>Tela SignUp (Tema: {state.theme.status})</h3> 
      <input type="text"
        placeholder="Digite um nome"
        // value={nameInput}
        value={state.user.name}
        onChange={handleNameChange}
      />
      <input type="text"
        placeholder="Digite uma idade"
        // value={ageInput}
        value={state.user.age}
        onChange={handleAgeChange}
      />
      {/* tirar o botão pois podemos enviar/salvar as infos na própria função de input. */}
      {/* <button onClick={handleSave}>Salvar</button> */}
      <br />
      <Link to="/exibir"> Ir para ShowData</Link>
    </div>
  )
}