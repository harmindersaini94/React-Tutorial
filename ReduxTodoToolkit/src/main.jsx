import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import {store} from './AppStore/Store.js'
import TodoAddForm from './Components/TodoAddForm.jsx'
import TodoDetailForm from './Components/TodoDetailForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <App /> */}
    <TodoAddForm />
    <TodoDetailForm />
  </Provider>
)
