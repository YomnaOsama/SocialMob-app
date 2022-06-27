export type Post = {
  body: string
  id: number
  title: string
  user_id: number
}

export type User = {
  email: string
  gender: string
  id: number
  name: string
  status: string
}

export type Comment = {
  id: number
  post_id: number
  name: string
  email: string
  body: string
}
