import React from 'react'
import { Menu } from 'antd'
import { type ItemType } from 'antd/es/menu/hooks/useItems'
import BreakCard from '@/components/BreakCard'

const items: ItemType[] = [
  {
    key: 1,
    label: '关注'
  },
  {
    key: 2,
    label: '推荐'
  }
]

class SquareView extends React.Component<any, {
  liked: boolean
}> {
  constructor (props) {
    super(props)
    this.state = {
      liked: true
    }
  }

  render (): React.ReactNode {
    return (
      <div className="h-full flex flex-col">
        {/* menu */}
        <Menu className="justify-center" mode="horizontal" items={items}/>
        {/* content */}
        <div className="py-3 px-6 flex-1 overflow-y-auto">
          <BreakCard onLikeChange={() => {
            this.setState({ liked: !this.state.liked })
          }} liked={this.state.liked}/>
        </div>
      </div>
    )
  }
}

export default SquareView
