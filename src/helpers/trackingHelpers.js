// Tracking Helpers

const trackingHelpers = {
  eventTrack: function (eventCategory, eventAction, eventLabel) {
    if (typeof window !== `undefined` && window.gtag) {
      console.log('EVENT', eventCategory)
      const trackingEventOptions = {
        event_action: eventAction,
        event_category: eventCategory,
        event_label: eventLabel
      }
      // COMMENTED OUT WHILE I WORK OUT WHY THIS IS FIRING FOR EVERY EVENT ON PAGE LOAD RATHER THAN JUST ON CLICK OF ELEMENT
      window.gtag('event', eventAction, trackingEventOptions)
      // NOT REQUIRED IF/WHEN WE GO GTM
      // IF/WHEN WE GO GTM NEED TO SET DATALAYER IN HTMLJS
      // <script>window.dataLayer = window.dataLayer || [];</script>
      // window.dataLayer.push(trackingEventOptions)
    }
  },
  testTrack: function () {
    console.log('TEST')
  }
}

export default trackingHelpers