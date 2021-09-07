import React, { useState } from 'react'

import usePosts from '../../hooks/usePosts'

import EmptyState from '../../components/EmptyState'
import SkeletonPost from '../../components/Post/Skeleton'

import Hero from '../../components/Hero'
import Post from '../../components/Post'

import { IHome } from './types'
import { IPost } from '../../components/Post/types'
import PostsContainer from '../../components/PostsContainer'

import Filters from '../../components/Filters'
import Button from '../../components/Button'

const Home = ({ hero }: IHome) => {
  const [sort, setSort] = useState('')

  const {
    data: currentPosts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = usePosts({ sort })

  return (
    <>
      {hero && (
        <Hero
          title={hero?.title}
          description={hero?.description}
          action={hero?.action}
          image={hero?.image}
        />
      )}

      <div className="flex flex-col items-center mx-auto max-w-af-xl xl:px-0 md:px-af-72 px-af-20">
        <Filters
          items={['All', 'sit', 'ipsum', 'Lorem', 'amet', 'dolor']}
          value={0}
          onSelected={(filter) => setSort(filter)}
        />

        {isLoading ? (
          <PostsContainer>
            <SkeletonPost />
          </PostsContainer>
        ) : (
          <>
            {currentPosts ? (
              <>
                <PostsContainer>
                  {currentPosts.pages.map((group: any, i) => (
                    <React.Fragment key={i}>
                      {group.results.map((post: IPost, index: number) => (
                        <Post
                          key={index}
                          id={post?.id}
                          image={post?.image}
                          authorId={post?.authorId}
                          author={post?.author}
                          title={post?.title}
                          likeCount={post?.likeCount}
                          categories={post?.categories}
                          highlighted={post?.highlighted}
                          suggested={post?.suggested}
                        />
                      ))}
                    </React.Fragment>
                  ))}
                </PostsContainer>
                <div className="flex justify-center mb-af-33">
                  {hasNextPage && (
                    <Button
                      disabled={!hasNextPage || isFetchingNextPage}
                      label={isFetchingNextPage ? 'Loading ...' : 'Load more'}
                      type={'muted'}
                      onAction={() => fetchNextPage()}
                    />
                  )}
                </div>
              </>
            ) : (
              <EmptyState />
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Home
