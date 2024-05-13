import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './styles.css'
// import {Kol} from "./Greeting.jsx"
// import { Appi } from './Greeting.jsx'
import { All } from './components.jsx'
function Lol(){
  return <h1>hello world</h1>
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <All />
  </React.StrictMode>,
)
