import React from 'react'
import IndexLayout from '@/layouts/IndexLayout'
import { ConfigProvider } from 'antd'

const App: React.FC = () => (
  <ConfigProvider theme={{}}>
    <IndexLayout/>
  </ConfigProvider>
)

export default App
