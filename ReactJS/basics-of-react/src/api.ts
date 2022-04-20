import axios from "axios"

// separar url base e só especificar os endpoints com template literals
// const BASE = 'https://jsonplaceholder.typicode.com'
// podemos instanciar objetos para simplificar ainda mais:

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

// objeto com várias funções
export const api = {
  getAllPosts: async () => {
    // usando axios:
    let response = await http.get(`/posts`)
    return response.data // data vem a resposta e por padrão já converte em json

  // PROCESSO ANTIGO SEM O AXIOS:
  // let response = await fetch(`${BASE}/posts`)
  // let json = await response.json()
  // return json
  },
  addNewPost: async (title: string, body: string, userId: number) => {
    let response = await http.post(`/posts`, {
      title, body, userId
    })
    return response.data


    // let response = fetch(`${BASE}/posts`, {
    //     method: 'POST',
    //     // converte o json pra um formato de string
    //     body: JSON.stringify({ title, body, userId: 1 }),
    //     headers: { 'Content-Type': 'application/json' }
    //   })
    // let json = await (await response).json()
    // console.log(json)
    // return json
  }
}