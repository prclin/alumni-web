import React, { Component } from 'react'
import { Avatar, Space } from 'antd'
import TextIcon from '@/components/TextIcon'
import { ClockCircleOutlined, HomeFilled, SwapRightOutlined } from '@ant-design/icons'
import { type EventFunction } from '@/types/common'
import { globalToken } from '@/pages/index/App'

interface NavProps {
  className?: string
  onClick?: typeof EventFunction
  children?: React.ReactNode
  text?: React.ReactNode
  textClass?: string
}

const NavItem: React.FC<NavProps> = (props: NavProps) => {
  return (
    <div className={props.className + ' ' + 'flex justify-between items-center cursor-pointer'} onClick={props.onClick}>
      <TextIcon textClass={props.textClass} text={props.text}>{props.children}</TextIcon>
      <SwapRightOutlined className="text-gray-300"/>
    </div>
  )
}

class AccountView extends Component {
  render (): React.ReactNode {
    return (
      <div className="h-full flex flex-col bg-[#ffd400]">
        {/*  头部信息 */}
        <Space direction="vertical" size="large" className="px-6 py-2 text-white">
          {/* 基本信息 */}
          <div className="flex justify-between">
            <div className="flex items-center">
              <Avatar shape="square" size={60} src="/avatar.svg"/>
              <span className="ml-2 text-base">昵称</span>
            </div>
            <TextIcon text="个人主页">
              <HomeFilled/>
            </TextIcon>
          </div>
          {/*  互动信息 */}
          <div className="flex justify-between">
            <TextIcon text="关注" direction="vertical">25</TextIcon>
            <TextIcon text="粉丝" direction="vertical">25</TextIcon>
            <TextIcon text="访客" direction="vertical">25</TextIcon>
          </div>
        </Space>
        {/*  导航列表 */}
        <Space direction="vertical" size="large" className="mt-5 px-6 py-2 bg-white flex-1">
          <NavItem text={<span className="font-bold">设置</span>}>
            <ClockCircleOutlined style={{ color: globalToken.colorPrimary }}/>
          </NavItem>
        </Space>
      </div>
    )
  }
}

export default AccountView
