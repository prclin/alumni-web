import React from 'react'
import { ConfigProvider, type ThemeConfig } from 'antd'
import IndexLayout from '@/layouts/IndexLayout'
import { StyleProvider } from '@ant-design/cssinjs'
import getDesignToken from 'antd/es/theme/getDesignToken'

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#ffd400'
  }
}

const globalToken = getDesignToken(themeConfig)

const App: React.FC = () => (
  <StyleProvider hashPriority="high">
    <ConfigProvider theme={themeConfig}>
      <IndexLayout/>
    </ConfigProvider>
  </StyleProvider>

)

export { globalToken }
export default App
