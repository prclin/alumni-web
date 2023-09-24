import React from 'react'
import { ConfigProvider } from 'antd'
import IndexLayout from '@/layouts/IndexLayout'
import { StyleProvider } from '@ant-design/cssinjs'

const App: React.FC = () => (
  <StyleProvider hashPriority="high">

    <ConfigProvider theme={{
      token: {
        colorPrimary: '#ffd400'
      }
    }}>
      <IndexLayout/>
    </ConfigProvider>
  </StyleProvider>

)

export default App
