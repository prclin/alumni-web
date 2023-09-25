import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import BottomMenu from '@/components/BottomMenu'
import { Outlet } from 'react-router-dom'

const IndexLayout: React.FC = () => (
  <Layout className="h-full">
    <Content className="pb-20">
      <Outlet/>
    </Content>
    <BottomMenu/>
  </Layout>
)

export default IndexLayout
