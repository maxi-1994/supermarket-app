import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { SupermarketListApp } from './SupermarketListApp';

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SupermarketListApp />
    </BrowserRouter>
  </React.StrictMode>,
)
