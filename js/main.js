document.addEventListener('DOMContentLoaded', () => {
  console.log('GPS based AR markers loaded.');

  // Log camera updates to help track marker positioning.
  const sceneEl = document.querySelector('a-scene');
  sceneEl.addEventListener('gps-camera-update-position', (e) => {
    console.log('Camera position updated:', e.detail);
  });

  // Optionally: You can add more interactivity, for example, highlighting a marker when it comes into view.
  // You can add additional JavaScript here for interactivity,
  // such as reacting when a marker is in view or tracking geolocation updates.
});