import React from 'react'
import ReactDOM from 'react-dom/client'
// import appIcon from '@/resources/build/icon.png'
import { WindowContextProvider, menuItems } from '@/app/components/window'
import { ErrorBoundary } from './components/ErrorBoundary'
import App from './app'
import { store } from './Store/UserSlice'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <WindowContextProvider titlebar={{ title: 'ZSS Accounting for workwear', menuItems }}>
         <Provider store={store}>
            <App />
         </Provider>
      </WindowContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
