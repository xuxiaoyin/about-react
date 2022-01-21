import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import 'antd-mobile/es/global'
import './index.css'
import App from './App'

import './utils/rem'

ReactDom.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('root'))
