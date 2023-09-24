import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import BottomMenu from '@/components/BottomMenu'
import { Outlet } from 'react-router-dom'

const IndexLayout: React.FC = () => (
  <Layout className="h-full mb-20 relative">
    <Content>
      <Outlet/>
    </Content>
    <BottomMenu/>
  </Layout>
)

export default IndexLayout
