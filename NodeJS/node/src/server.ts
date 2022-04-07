import express, { Request, Response} from 'express'
// criamos servidor

const server = express()

// definimos o tipo do req e res.
// Rota estatica:
server.get('/', (req: Request, res: Response) => {
  // mandamos uma função, que recebe por padrão o req e o res. Quando acessamos um site, diversas informações vão juntos. Res é responsavel pela resposta do processo de requisição, seja imagem, mensagem, etc.

  res.send("Olá mundo")
  // todo acesso a uma página vem junto com um método. Post envia um corpo, quando se quiser mandar dados internamente. As mesmas rotas podem ter métodos diferentes.
})

// Rota dinâmica: Rota que pode receber conteúdos diferentes. Mas com a vase
server.get('/noticia/:slug', (req: Request, res: Response) => {
  let slug: string = req.params.slug;
  res.send(`Notícia: ${slug}`)
})

// ex de duas informações dinâmicas: site de acompanhamento de voos:
// site.com/voo/gru-src
server.get('/voo/:origem-:destino', (req: Request, res: Response) => {
  let {origem, destino} = req.params

})

server.listen(80)