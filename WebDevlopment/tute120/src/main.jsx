import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

render(
    <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('app'))
