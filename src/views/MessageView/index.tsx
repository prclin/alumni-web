import React from 'react'
import { Avatar, Space } from 'antd'

const MessageCard: React.FC = () => {
  return (
    <Space className="cursor-pointer">
      <Avatar size={40} src="/avatar.svg"/>
      <div className="flex flex-col justify-evenly">
        <span className="font-bold">nickname</span>
        <span className="text-xs">last message</span>
      </div>
    </Space>
  )
}

const MessageView: React.FC = () => (
  <Space size="large" className="px-2 py-1" direction="vertical">
    <MessageCard/>
    <MessageCard/>
    <MessageCard/>
    <MessageCard/>
    <MessageCard/>
  </Space>
)

export default MessageView
