import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { IFilters } from './types'

const Filters = ({
  items = [],
  value,
  onSelected,
  highlighted = false,
}: IFilters) => {
  const [selected, setSelected] = useState(value ? value : 0)

  const onChangeHandler = (index: number) => {
    setSelected(index)
  }

  useEffect(() => {
    if (value) {
      setSelected(value)
    }
  }, [value])

  return (
    <div className="flex flex-row items-center w-full max-auto max-w-af-xl pt-af-40">
      <div className="flex flex-row justify-start w-1/12 flex-start">
        {highlighted ? (
          <Button
            label={'Suggested'}
            type="muted"
            onAction={() => console.log('trigger suggested')}
          />
        ) : (
          <Button
            label={'Popular'}
            type="muted"
            onAction={() => console.log('trigger popular')}
          />
        )}
      </div>

      {!highlighted && (
        <>
          <div className="flex justify-center w-10/12 space-x-af-4 md:space-x-af-20">
            {items.map((item, index: number) => {
              return (
                <Button
                  key={index}
                  label={item}
                  type={selected === index ? 'secondary' : 'muted'}
                  onAction={(e: any) => {
                    onSelected?.(item)
                    onChangeHandler?.(index)
                    e.preventDefault()
                  }}
                  className="capitalize px-af-10 rounded-af-8"
                />
              )
            })}
          </div>
          <div className="flex justify-end w-1/12">
            <Button
              label={'Filters'}
              type="muted"
              onAction={() => console.log('trigger filters')}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default Filters
