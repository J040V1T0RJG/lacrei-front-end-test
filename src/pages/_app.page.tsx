import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

const nunito = Nunito({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      className={nunito.className}
    >
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </main>
  )
}
