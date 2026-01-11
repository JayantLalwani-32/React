import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherUser = "Lalwani"
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: 'blank' },
  'click me to visit google',
  anotherUser
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
)
