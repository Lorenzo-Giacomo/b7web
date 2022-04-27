import express, { Request, Response} from 'express'
import path from 'path'
import mustache from 'mustache-express'


import mainRoutes from './routes/index'
import painelRoutes from './routes/painel'


const server = express()

//configurando mustache:
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

// server.use( '/static', express.static('public'))
server.use(express.static(path.join(__dirname, '../public')))

server.use( '/', mainRoutes) // seleciona as rotas do index a partir do prefixo /

/*
Pegar os produtos do banco de dados
organizar as informações desses produtos
envia para o template engine
junta as duas informações e transforma em informação visual.
*/

server.use( '/painel', painelRoutes) // seleciona as rotas do painel a partir do prefixo /painel. Será renderizada a rota / no arquivo painel.ts
server.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrada')
})


server.listen(80)