import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  //useState:返回一个 state，以及更新 state 的函数。
  //在初始渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同。
  //setState 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列。
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>  count is: {count}</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}  style={{width: 100 + 'px'}}>
            {'+'}
          </button>
          <button onClick={() => setCount((count) => count - 1)} style={{width: 100 + 'px'}}>
            {'-'}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
