// import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
// Navigate renderiza um componente

type Props = {
  children: JSX.Element
}
// children dentro do componente: O que retornarmos dentro dele irá ser renderizado
export const RequireAuth = ({ children }: Props) => {
  // const navigate = useNavigate() // funciona como um useEffect
  const isAuth = true

  if (!isAuth) {
    return <Navigate to="/login"/>  
  }
    return children
}