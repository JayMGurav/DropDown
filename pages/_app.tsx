import type { AppProps, NextWebVitalsMetric } from 'next/app'

import GloBalStyles from '@/styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GloBalStyles />
      <Component {...pageProps} />
    </>
  )
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric)
// }

export default MyApp;
