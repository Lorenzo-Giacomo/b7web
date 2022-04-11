import React, { ChangeEvent, useState } from "react"

type PostFormProps = {
  onAdd: (title: string, body: string) => void
}

export function PostForm({ onAdd }: PostFormProps) {
  const [addTitleText, setAddTitleText] = useState('')
  const [addBodyText, setAddBodyText] = useState('')

  const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value)
  }
  const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddBodyText(e.target.value)
  }

  const handleAddClick = () => {
    // passamos as informações dos inputs e fazemos o post a partir delas no componente pai.
    if (addTitleText && addBodyText){
      onAdd(addTitleText, addBodyText)
    } else {
      alert('Preencha os campos')
    }
  }

  return (
    <fieldset>
        <legend>Adicionar novo post</legend>
        <input 
          value={addTitleText}
          style={{display: 'block'}}
          type="text" placeholder='Digite um título'
          onChange={handleAddTitleChange}
        />
        <textarea 
          value={addBodyText}
          style={{display: 'block'}}
          onChange={handleAddBodyChange}

        >
        </textarea>
        <button onClick={handleAddClick} style={{display: 'block'}}>Adicionar</button>
      </fieldset>
  )
}