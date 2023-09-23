import React from 'react'
import { HomeOutlined, MessageOutlined, UserOutlined, WifiOutlined } from '@ant-design/icons'
import type { EventFunction } from '@/types/common'
import { useLocation, useNavigate } from 'react-router-dom'

interface IconProps {
  children: React.ReactNode
  onClick?: typeof EventFunction
  text?: string
  checked?: boolean
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  return (
    <div onClick={props.onClick}
         className={((props.checked === true) ? 'text-amber-700' : '') + ' ' + 'w-fit flex flex-col justify-center items-center hover:text-amber-900 cursor-pointer'}>
    <span className="text-xl">
      {props.children}
    </span>
      <span className="leading-none text-sm">{props.text}</span>
    </div>
  )
}
const BottomMenu: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const paths = location.pathname.split('/')
  const tab = paths[1] === '' ? 'home' : paths[1]
  const menuItems = [
    {
      text: '主页',
      icon: <HomeOutlined/>,
      path: '/home'
    },
    {
      text: '广场',
      icon: <WifiOutlined/>,
      path: '/square'
    },
    {
      text: '消息',
      icon: <MessageOutlined/>,
      path: '/message'
    },
    {
      text: '个人',
      icon: <UserOutlined/>,
      path: '/account'
    }
  ]
  return (
    <div className="bg-white h-20 fixed left-0 bottom-0 right-0 flex justify-evenly">
      {menuItems.map(item => (
        <Icon key={item.path} checked={item.path.substring(1) === tab} text={item.text} onClick={() => {
          navigate(item.path)
        }}>
          {item.icon}
        </Icon>
      ))}
    </div>
  )
}

export default BottomMenu
