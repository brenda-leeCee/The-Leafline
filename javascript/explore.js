// MAP SETUP
const map = L.map('map').setView([17.1899, -88.4976], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add markers
L.marker([16.7378, -88.6605]).addTo(map).bindPopup('Cockscomb Basin');
L.marker([16.9848, -88.9360]).addTo(map).bindPopup('Mountain Pine Ridge');
L.marker([16.5821, -88.7981]).addTo(map).bindPopup('Victoria Peak');
