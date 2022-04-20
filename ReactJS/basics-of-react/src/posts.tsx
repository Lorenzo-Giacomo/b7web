import React, { useEffect, useState } from 'react';
import { PostItem } from './components/PostItem';
import { PostForm } from './components/PostForm';
import './App.css';
import { Posts } from './types/Posts'
import { api } from './api';

function App() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [loading, setLoading] = useState(false)


  useEffect(()=>{
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {

      setLoading(true)
      // PASSOU PARA A API
      // let response = await fetch('https://jsonplaceholder.typicode.com/posts')
      // let json = await response.json()
      let json = await api.getAllPosts()
      setPosts(json)
      setLoading(false)
    } catch(e) {
      setLoading(false)
      setPosts([])
      console.error(e)
    } 
  }

  // SEPARAMOS ENTRE COMPONENTES

  // parametros q irá receber de dentro do componente
  // função que de fato fará a requisição
  const handleAddPost = async (title: string, body: string) => {
  let json = await api.addNewPost(title, body, 1)
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
