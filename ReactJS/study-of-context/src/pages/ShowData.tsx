import { Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../contexts/Context"

export const ShowData = () => {
  const {state, dispatch} = useContext(Context)
  return (
    <div>
      Tela ShowData de {state.user.name}
      <br />
      <Link to="/">Voltar para SignUp</Link>
    </div>
  )
}