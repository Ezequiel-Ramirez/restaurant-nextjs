import Layaut from '../components/Layaut'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layaut>
      <Component {...pageProps} />
    </Layaut>
  )

}

export default MyApp
