import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../store/reducer'
import { Provider } from 'react-redux'

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
