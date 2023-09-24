import React from 'react'
import { Avatar, Card, Divider } from 'antd'
import {
  ClockCircleOutlined,
  CommentOutlined,
  EllipsisOutlined,
  HeartOutlined,
  ShareAltOutlined
} from '@ant-design/icons'
import TextIcon from '@/components/TextIcon'
import { type EventFunction } from '@/types/common'

const CardTitle: React.FC = () => (
  <div className="flex items-center">
    <Avatar src="/avatar.svg" size={40}/>
    <div className="ml-2 flex flex-col">
      <span className="text-base">昵称</span>
      <span className="text-xs font-normal">
        <ClockCircleOutlined className="text-[#c6d987] mr-1"/>
        发布时间
      </span>
    </div>
  </div>
)

interface BreakProps {
  liked?: boolean
  onLikeChange?: typeof EventFunction
}

const BreakCard: React.FC<BreakProps> = (props: BreakProps) => {
  return (
    <Card
      className="border-solid border-l-[20px] border-[#ffb560]" bordered={false}
      title={<CardTitle/>} extra={<EllipsisOutlined/>}
    >
      <p className="text-sm font-bold">
        今天的夕阳很美？很久没有这么放松啦.小程序启动页是小程序在微信内一定程度上展现品
        牌特征的页面之一。本页面将突出展示小程序品牌特征和加载状态。启动页除品牌标（Logo）展示外，
        页面上的其他所有元素如加载进度指示，均由微信统一提供且不能更改，无需开发者开发。</p>
      <Divider className="!my-4"/>
      <div className="flex justify-between items-center text-xl">
        <TextIcon text="21">
          <ShareAltOutlined/>
        </TextIcon>
        <TextIcon text="22">
          <CommentOutlined/>
        </TextIcon>
        <TextIcon text="22" onClick={props.onLikeChange} className={props.liked === true ? 'text-red-500' : ''}>
          <HeartOutlined/>
        </TextIcon>
      </div>
    </Card>
  )
}

export default BreakCard
