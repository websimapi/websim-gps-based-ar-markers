document.addEventListener('DOMContentLoaded', () => {
  console.log('GPS based AR markers loaded.');

  let markersUpdated = false; // ensure we update markers only once

  // Log camera updates to help track marker positioning and update markers nearby the user.
  const sceneEl = document.querySelector('a-scene');
  sceneEl.addEventListener('gps-camera-update-position', (e) => {
    console.log('Camera position updated:', e.detail);

    // Place markers close to the user on the first update.
    if (!markersUpdated) {
      const userLat = e.detail.latitude;
      const userLon = e.detail.longitude;
      console.log('User position: ', userLat, userLon);

      // Small offsets to place markers nearby (roughly 2 meters offset, 1m ~ 0.000009° so ~0.00002 for demonstration)
      const offset = 0.00002;
      
      const marker1 = document.getElementById('marker1');
      const marker2 = document.getElementById('marker2');

      // Marker 1: placed slightly north-east of the user.
      marker1.setAttribute('gps-new-entity-place', `latitude: ${userLat + offset}; longitude: ${userLon + offset}`);
      
      // Marker 2: placed slightly south-west of the user.
      marker2.setAttribute('gps-new-entity-place', `latitude: ${userLat - offset}; longitude: ${userLon - offset}`);

      markersUpdated = true;
    }
  });

  // Optionally: You can add more interactivity, for example, highlighting a marker when it comes into view.
  // Additional JavaScript can be placed here for further enhancements.
});