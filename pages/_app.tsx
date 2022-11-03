import '../styles/globals.css'
import {AppProps} from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-theme="cupcake">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
