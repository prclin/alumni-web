import React from 'react'
import IndexLayout from '@/layouts/IndexLayout'
import { type Router as RemixRouter } from '@remix-run/router/dist/router'
import { ConfigProvider } from 'antd'

interface props {
  router: RemixRouter
}

const App: React.FC<props> = (props) => (
  <ConfigProvider theme={{}}>
    <IndexLayout router={props.router}/>
  </ConfigProvider>
)

export default App
