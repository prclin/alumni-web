import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/tailwind.less'
import router from '@/routers/index'
import { RouterProvider } from 'react-router-dom'

const root = document.getElementById('root')
if (root != null) {
  createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  )
}
