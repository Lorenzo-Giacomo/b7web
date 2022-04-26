// import { useSelector } from "react-redux";
// import { RootState } from "./redux/store";
// usar os dois juntos para conseguir pegar as informaçõpes do store
// ao invés dos dois, podemos usar o hook
import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { setThemeStatus } from "./redux/reducers/themeReducer";
import { setName, setAge } from "./redux/reducers/userReducer";
// duas actions criadas no reducer

function App() {
  // const user = useSelector((state: RootState)=> state.user)
  // se tiver vários reducers, usar um useSelector para cada grupo de informações

  // pega o hook que foi criado e usa o reducer que quer
  // em uma linha pega as informações do redux da store e usa
  const user = useAppSelector(state => state.user)
  const theme = useAppSelector(state=> state.theme)
  const dispatch = useDispatch()

  // separar em funções para realizar as trocas
  const changeName = (newName: string) => dispatch(setName(newName))
  const changeAge = (newAge: number) => dispatch(setAge(newAge))
  const switchTheme = (newTheme: string) => dispatch(setThemeStatus(newTheme))

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch( setName(e.target.value))
    changeName(e.target.value)
  }
  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch( setAge(parseInt(e.target.value)))
    changeAge(parseInt(e.target.value))
  }

  const handleSwitchTheme = () => {
    switchTheme(theme.status === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos. <br />
      Tema: {theme.status}
      <hr />
      <input type="text" value={user.name} onChange={handleNameInput}/>
      <input type="text" value={user.age} onChange={handleAgeInput}/>

      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>

    </div>    
  );
}

export default App;
