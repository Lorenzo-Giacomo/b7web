import { useState } from "react"

const inlineStyle = () => {
  // const [clicked, setClicked] = useState(false)
  const [color, setColor] = useState('#0000ff')

  // função para detectar se tiver clicado trocar a cor de fundo. Não somente pode alterar uma cor, mas fazer diversas coisas, mudarpadding, display etc.
  const handleClick = () => {
    setColor('#00ff00')
  }

  return (
    <div>
      <button
        onClick={handleClick}
        // fazer a verificação inline. Se for verdadeiro é uma cor, se não é outra
        // style={{ backgroundColor: clicked ? '#0000ff' : 'green', color: '#FFF'}}
        style={{backgroundColor:color, color: '#FFF'}}
      >
      Clique aqui  
      </button>
    </div>
  )
}

export default inlineStyle
