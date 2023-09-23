import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@/styles/tailwind.less'
import router from '@/routers/index'

const root = document.getElementById('root')
if (root != null) {
  createRoot(root).render(
    <React.StrictMode>
      <App router={router}/>
    </React.StrictMode>
  )
}
