import { ANALYTICS_ID } from "./analytics"

export const pageview = (url) => {
  window.gtag('config', ANALYTICS_ID, {
    page_path: url,
  })
}
