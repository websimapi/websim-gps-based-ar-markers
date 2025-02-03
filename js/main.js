document.addEventListener('DOMContentLoaded', () => {
  // Log a message to confirm that the AR scene is loaded.
  console.log('GPS based AR markers loaded.');
  
  // You can add additional JavaScript here for interactivity,
  // such as reacting when a marker is in view or tracking geolocation updates.
  
  // Example: Listen for the gps-camera-update event fired by the gps-new-camera component.
  const sceneEl = document.querySelector('a-scene');
  sceneEl.addEventListener('gps-camera-update-position', (e) => {
    console.log('Camera position updated:', e.detail);
  });
});