import { createBrowserRouter, Link, type RouteObject } from 'react-router-dom'
import App from '@/pages/index/App'
import React from 'react'
import HomeView from '@/views/HomeView'
import SquareView from '@/views/SquareView'
import MessageView from '@/views/MessageView'
import { Button, Result } from 'antd'
import AccountView from '@/views/AccountView'

const routes: RouteObject[] = [
  {
    path: '*',
    element: <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" className="bg-none"><Link to="/">Back Home</Link></Button>}
    />
  },
  {
    index: true,
    element: <HomeView/>
  },
  {
    path: 'home',
    element: <HomeView/>
  },
  {
    path: 'square',
    element: <SquareView/>
  },
  {
    path: 'message',
    element: <MessageView/>
  },
  {
    path: 'account',
    element: <AccountView/>
  }
]
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: routes
  }

])

export default router
