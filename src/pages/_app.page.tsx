import { GlobalStyle } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

const nunito = Nunito({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}
