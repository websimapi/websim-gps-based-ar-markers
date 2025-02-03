document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded.');

  const sceneEl = document.querySelector('a-scene');

  sceneEl.addEventListener('loaded', () => {
    console.log('A-Frame scene loaded');

    const camera = document.querySelector('[gps-new-camera]');

    camera.addEventListener('componentinitialized', (evt) => {
      if (evt.detail.name === 'gps-new-camera') {
        console.log('gps-new-camera component initialized');

        let markersAdded = false;

        camera.addEventListener('gps-camera-update-position', (e) => {
          console.log('Camera position updated:', e.detail.position);

          if (
            !markersAdded &&
            e.detail.position.latitude !== undefined &&
            e.detail.position.longitude !== undefined
          ) {
            const userLat = e.detail.position.latitude;
            const userLon = e.detail.position.longitude;
            console.log('User position: ', userLat, userLon);

            const scene = document.querySelector('a-scene');

            // Small offsets to place markers nearby (roughly 2 meters offset)
            const offset = 0.00002;

            // Marker 1: Red box
            const marker1 = document.createElement('a-entity');
            marker1.setAttribute('geometry', 'primitive: box');
            marker1.setAttribute('material', 'color: red');
            marker1.setAttribute('scale', '10 10 10');
            marker1.setAttribute(
              'gps-new-entity-place',
              `latitude: ${userLat + offset}; longitude: ${userLon + offset}`
            );
            marker1.setAttribute(
              'animation',
              'property: scale; dir: alternate; dur: 1000; loop: true; to: 12 12 12'
            );

            // Marker 2: Blue sphere
            const marker2 = document.createElement('a-entity');
            marker2.setAttribute('geometry', 'primitive: sphere');
            marker2.setAttribute('material', 'color: blue');
            marker2.setAttribute('scale', '5 5 5');
            marker2.setAttribute(
              'gps-new-entity-place',
              `latitude: ${userLat - offset}; longitude: ${userLon - offset}`
            );
            marker2.setAttribute(
              'animation',
              'property: scale; dir: alternate; dur: 1200; loop: true; to: 6 6 6'
            );

            scene.appendChild(marker1);
            scene.appendChild(marker2);

            markersAdded = true;
          }
        });
      }
    });
  });
});