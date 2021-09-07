import React from 'react'
import classnames from 'classnames'

import { IButton } from './types'

const Button = ({
  label,
  type = 'primary',
  onAction,
  disabled = false,
  className = '',
}: IButton) => {
  const buttonClass = classnames(
    {
      'bg-af-button-accent rounded-af-8 text-af-inverted leading-af-20 text-af-14 px-af-16 ':
        type === 'primary',
    },
    {
      'bg-af-filters text-af-base leading-af-24 text-af-16':
        type === 'secondary',
    },
    {
      'bg-transparent text-af-muted-dark leading-af-24 text-af-16':
        type === 'muted',
    },
    'py-af-10 '
  )
  return (
    <>
      <button
        type="button"
        className={`${buttonClass} ${className}`}
        onClick={(e) => onAction?.(e)}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  )
}

export default Button
