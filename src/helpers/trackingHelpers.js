// Common Helpers

// Take out and move to use as required
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
      // window.gtag('event', eventAction, trackingEventOptions)
    }
  },
  testTrack: function () {
    console.log('TEST')
  }
}

export default trackingHelpers