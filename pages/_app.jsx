import React from 'react'
import { ThemeProvider } from 'theme-ui'
import PropTypes from 'prop-types'
import theme from '../theme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
}
