import { useParams, useNavigate } from "react-router-dom"

export const AboutItem = () => 
{
  const params = useParams()
  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate(-1)
  }

  const handleHomeButton = () => {
    navigate('/') 
    // é possível colocar nomes dinâmicos
    // let name: string = "ciclano"
    // navigate(`/sobre/${name}`)
  }

  return (
    <div>
      <div>Página sobre {params.slug?.toLocaleUpperCase()} ({params.slug?.length} letras)</div>
      <hr />
      <button onClick={handleBackButton}>Voltar</button>
      <button onClick={handleHomeButton}>Home</button>
    </div>
  )
}