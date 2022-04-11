import React, { ChangeEvent, useEffect, useState } from 'react';
import { PostItem } from './components/PostItem';
import { PostForm } from './components/PostForm';
import './App.css';
import { Posts } from './types/Posts'

function App() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [loading, setLoading] = useState(false)


  useEffect(()=>{
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {

      setLoading(true)
      let response = await fetch('https://jsonplaceholder.typicode.com/posts')
      let json = await response.json()
      setPosts(json)
      setLoading(false)
    } catch(e) {
      setLoading(false)
      setPosts([])
      console.error(e)
    } 
  }

  // SEPARAMOS ENTRE COMPONENTES

  // const handleAddClick = async () => {
  //   if (addTitleText && addBodyText) {
  //     let response = fetch('https://jsonplaceholder.typicode.com/posts', {
  //       method: 'POST',
  //       // converte o json pra um formato de string
  //       body: JSON.stringify({
  //         title: addTitleText,
  //         body: addBodyText,
  //         userId: 1
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     let json = await (await response).json()
  //     console.log(json)

  //     if (json.id) {
  //       alert('Post adicionado com sucesso')
  //     } else {
  //       alert('Ocorreu algum erro')
  //     }

  //   } else {
  //     alert('Preencha os dados!')
  //   }
  // }

  // parametros q irá receber de dentro do componente
  const handleAddPost = async (title: string, body: string) => {
    let response = fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        // converte o json pra um formato de string
        body: JSON.stringify({ title, body, userId: 1 }),
        headers: { 'Content-Type': 'application/json' }
      })
      let json = await (await response).json()
      console.log(json)

      if (json.id) {
        alert('Post adicionado com sucesso')
      } else {
        alert('Ocorreu algum erro')
      }
  }

  return (
    <div>
      {loading &&
        <div>Carregando...</div>
      }

      <PostForm onAdd={handleAddPost}/>

      { !loading && posts.length > 0 &&
        <>
        Total de Posts: {posts.length}
      
        <div className="grid grid-cols-6 gap-3">
          {posts.map((item, index) => (
            <PostItem data={item}/>
          ))}
        </div>
        </>
      }
      {!loading && posts.length === 0 &&
        <div>Não há posts para exibir</div>
      }
      
    </div>
  );
}

export default App;
