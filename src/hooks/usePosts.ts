import { useInfiniteQuery } from 'react-query'
import api from '../services/api'

import { IPost } from '../components/Post/types'

export type PostsResponse = {
  results: IPost[]
  categories?: string[]
  next: number | undefined
}

export interface IPostsQuery {
  pageParam?: number
  perPage?: number
  queryKey: any
}

const allSort = ['', 'All']

async function queryPosts({
  queryKey,
  pageParam = 1,
  perPage = 12,
}: IPostsQuery) {
  const tag = queryKey[0]
  const highlighted = queryKey[1]

  const usersRes = await api.get(`users`)
  const allUsers = usersRes.data.data

  const page = allSort.includes(tag) ? `?page=${pageParam}` : ''
  const sort = allSort.includes(tag) ? '' : `?category=${tag}`

  const res = highlighted
    ? await api.get(`posts${page}?highlighted=${highlighted}`)
    : await api.get(`posts${page}${sort}`)

  const currentPosts = Object.keys(res.data.data).map((key) => {
    return res.data.data[key]
  })

  const numberOfPages = currentPosts.length / perPage
  const pages = Math.ceil(numberOfPages)

  const postsWidthAuthor = currentPosts.map((post: IPost) => ({
    ...post,
    author: allUsers.find((user: any) => user.id === post.authorId),
  }))

  const data: PostsResponse = {
    results: postsWidthAuthor,
    next: pages <= pageParam ? undefined : pageParam + 1,
  }

  return data
}

export default function usePosts({
  sort,
  highlighted = false,
}: {
  sort?: any
  highlighted?: boolean
}) {
  return useInfiniteQuery<PostsResponse, Error>(
    [sort, highlighted],
    queryPosts,
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next
      },
    }
  )
}
