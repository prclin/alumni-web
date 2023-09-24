import { type EventFunction } from '@/types/common'
import React from 'react'

interface TextIconProps {
  className?: string
  onClick?: typeof EventFunction
  children?: React.ReactNode
  text?: string
  direction?: 'vertical' | 'horizontal' | 'vertical-reverse' | 'horizontal-reverse'
}

const TextIcon: React.FC<TextIconProps> = (props: TextIconProps) => {
  const { className, onClick, children, text, direction } = props
  let orientation
  switch (direction) {
    case 'vertical':
      orientation = 'flex-col'
      break
    case 'horizontal':
      orientation = 'flex-row'
      break
    case 'vertical-reverse':
      orientation = 'flex-col-reverse'
      break
    case 'horizontal-reverse':
      orientation = 'flex-row-reverse'
      break
    default:
      orientation = 'flex-row'
  }
  return (
    <div onClick={onClick} className={className + ' ' + orientation + ' ' + 'flex items-center cursor-pointer'}>
      {props.children}
      <span className="text-sm m-1">{props.text}</span>
    </div>
  )
}

export default TextIcon
