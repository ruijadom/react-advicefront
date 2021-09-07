import React from 'react'

const PostsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid w-full grid-cols-1 pt-af-32 pb-af-20 gap-af-36 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  )
}

export default PostsContainer
