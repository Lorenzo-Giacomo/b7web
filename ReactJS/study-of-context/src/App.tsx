import { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ShowData } from "./pages/ShowData"
import { SignUp } from "./pages/SignUp"

import { Context } from "./contexts/Context"


const App = () => {
  const {state, dispatch} = useContext(Context)

  const handleSwitchTheme = () => {
    if(state.theme.status === 'light') {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'dark'
        } 
      })
    } else {
      dispatch({
        type: 'CHANGE_STATUS',
        payload: {
          status: 'light'
        }
      })
    }
  }

  return (
    // tiramos o contextProvider daqui e o colocamos no index.
    <BrowserRouter>
      <div style={{
        // para fazer um dark theme com cores gerais, poderia passar dentro do provider uma constante para cores light e dark e as recuperar aqui no lugar das #
        backgroundColor: state.theme.status === 'light' ? '#FFF' : '#000',
        color: state.theme.status === 'light' ? '#000' : '#FFF',
      }}>   
      <h1>Título da página</h1>
      Tema: {state.theme.status}
      <button onClick={handleSwitchTheme}>Switch Theme</button>
      <hr />
        <Routes>
          <Route path="/" element={<SignUp />}/>
          <Route path="/exibir" element={<ShowData />}/>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App