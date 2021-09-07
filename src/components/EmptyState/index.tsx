import React from 'react'
import Empty from '../../assets/illustrations/empty.svg'

const EmptyState: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center object-cover py-af-100">
        <div className="w-af-300 space-y-af-20">
          <Empty />
          <h2 className="flex justify-center font-semibold text-af-20 text-af-base">
            No data
          </h2>
        </div>
      </div>
    </>
  )
}

export default EmptyState
