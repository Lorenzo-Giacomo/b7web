import {Posts} from '../types/Posts'

type PostItemProps = {
  data: Posts
}

export const PostItem = ({data}: PostItemProps) => {
  return (
    <div>
      <h4>{data.title}</h4>
      <small>#{data.id} - Usuário: {data.userId}</small>
      <p>{data.body}</p>
    </div>
  )
}