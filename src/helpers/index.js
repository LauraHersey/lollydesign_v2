// Common Helpers

// Take out and move to use as required
export default eventTrack(eventCategory, eventAction, eventLabel) {
  if (typeof window !== `undefined` && window.gtag) {
    const trackingEventOptions = {
      event_category: eventCategory,
      event_label: eventLabel
    }
    window.gtag('event', eventAction, trackingEventOptions)
  }
}

export default testTrack() {
  console.log('TEST')
}