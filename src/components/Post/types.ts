export interface IPost {
  id: number
  authorId?: number
  author: IAuthor
  title: string
  image?: string
  likeCount?: number
  categories?: string[]
  highlighted?: boolean
  suggested?: boolean
}

export interface IAuthor {
  id: number
  firstName: string
  lastName: string
  avatar: string
}
