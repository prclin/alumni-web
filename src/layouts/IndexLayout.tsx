import { RouterProvider } from 'react-router-dom'
import React from 'react'
import { type Router as RemixRouter } from '@remix-run/router/dist/router'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

interface props {
  router: RemixRouter
}

const IndexLayout: React.FC<props> = (props) => (
  <Layout className="h-full">
    <Content>
      <RouterProvider router={props.router}/>
    </Content>
  </Layout>
)

export default IndexLayout
