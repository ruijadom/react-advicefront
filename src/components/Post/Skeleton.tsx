import React, { useMemo } from 'react'

const SkeletonPostItem = ({ index }: any) => (
  <div className="w-full " key={index}>
    <div className="bg-gray-50 animate-pulse h-af-246" />
  </div>
)

const SkeletonPost = ({ numberItems = 12 }: { numberItems?: number }): any => {
  const renderSkeletons = useMemo(() => {
    const skeletonArray = []

    for (let s = 0; s < numberItems; s++) {
      skeletonArray.push(<SkeletonPostItem key={s} />)
    }

    return skeletonArray
  }, [numberItems])

  return renderSkeletons as any
}

export default SkeletonPost
