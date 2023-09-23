import React from 'react'
import { Layout } from 'antd'
import { Content, Footer } from 'antd/es/layout/layout'
import BottomMenu from '@/components/BottomMenu'
import { Outlet } from 'react-router-dom'

const IndexLayout: React.FC = () => (
  <Layout className="h-full">
    <Content>
      <Outlet/>
    </Content>
    <Footer className="fixed left-0 bottom-0 right-0 p-0">
      <BottomMenu/>
    </Footer>
  </Layout>
)

export default IndexLayout
