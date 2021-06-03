import React from 'react'   
import ReactDOM from 'react-dom'  //引入虚拟DOM
import './index.css'
import App from './App'
import Dashboard from './pages/dashboard'
import 'antd/dist/antd.css';
// 主jsx文件
ReactDOM.render(
  //严格模式检查仅在开发模式下运行；它们不会影响生产构建。
  //引入的jsx组件可以在jsx中直接以标签形式使用
  // <React.StrictMode>

    <Dashboard />,
  //</React.StrictMode>,
  document.getElementById('root')
)
