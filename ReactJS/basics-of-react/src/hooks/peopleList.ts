import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid'

/* 
Descrição:
-uma lista de todos nomes para exibir.
adicionar um novo nome e quando adicionar precisa ter um id único para cada nome. Ação de adicionar
-cada nome quando for exibido, precisa ter um botão de remover o nome. Ação de remover.
-ação de reodernar os nomes em ordem alfabética
*/

type Person = {
  id: string;
  name: string;
}

type ActionType = {
  type: string;
  payload?: {
    name?: string;
    id?: string;
  }
}


const initialState: Person[] = []

const reducer = (state: Person[], action: ActionType) => {
  switch(action.type) {
    case 'ADD': // necessário gerar um id único para pessoa
      // verificar se foi passado o nome
      if(action.payload?.name) {
        // cria uma cópia do array, adiciona os dados e a retorna. Esse Processo é necessário pois quando fazemos o push no estado, devido ao principio de imutabilidade, ele não atualiza automaticamente os valores. Assim renderizará a lista dnv.

        // A ideia é que não se deve mutar o estado (modificar a variável), por isso é necessário fazer uma cópia do array (ou objeto) antes de atribuir a uma variável, assim você pode mexer na cópia a vontade que não vai afetar o original. É necessário fazer isso em arrays e objetos, pois esses ao contrário de strings, numbers e etc, são passados por referência, logo só atribuir para uma nova variável não cria uma cópia desse array, mas sim passa o endereço na memória para a nova variável, o que resulta em modificações em uma variável afetarem a outra.
        
        // Ai uma sintaxe rápida para copiar um array, é utilizar o spread operator (...) em um array vazio, e é por isso que ele usa [...state].
        
        const newState = [...state]
        newState.push({
          id: uuidv4(),
          name: action.payload?.name
        })
        return newState
      }
    break;
    case 'DEL':
      if(action.payload?.id) {
        let newState = [...state]
        newState = newState.filter(item => item.id !== action.payload?.id)
        return newState
      }
    break; 
    case 'ORDER':
      /** verifica qual ortografia é maior 
       * Se funcaoDeComparacao(a, b) é maior que 0, ordena b para um índice anterior que a.
      */
      let newState = [...state]
      newState = newState.sort((a, b) => (a.name > b.name) ? 1 : -1)
      return newState 
    break;
  }
  return state
}

export const usePeopleList = () => {
  return useReducer(reducer, initialState)
}