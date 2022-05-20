/*export const pageview = (url) =>{
    window.gtag('config', process.env.GOOGLE_ANALYTICS_ID, {
        path_url:url,
    })
}*/
export const GA_TRACKING_ID = 'G-B4LSMB3HNB'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID,{ 'anonymize_ip': true, 'client_storage': 'none' }, {page_path: url,})
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}