import Navbar from '@/components/Navbar'
import '@/styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
      <ThemeProvider defaultTheme="light" attribute="class" enableSystem={false}>

      <Component {...pageProps} />
      </ThemeProvider>
  ) 
      
}
