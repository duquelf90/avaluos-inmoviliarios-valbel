export const pageview = (url) => {
  window.gtag('config', process.env.MEASUREMENT_ID, {
    page_path: url,
  })
}
