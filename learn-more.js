const placeNameElement = document.getElementById('place-name');
const famousFoodsList = document.getElementById('famous-foods-list');
const nearbyHotelsList = document.getElementById('nearby-hotels-list');
const thingsToDoList = document.getElementById('things-to-do-list');
const urlParams = new URLSearchParams(window.location.search);
const placeName = urlParams.get('place');
placeNameElement.textContent = placeName;

famousFoodsList.innerHTML = `
  <li>Breads: Croissant, Baguette, Pain Au Chocolat</li>
  <li>Escargots (Snails)</li>
  <li>Crêpes</li>
  `;

nearbyHotelsList.innerHTML = `
  <li>Best Eiffel Tower Views: Hôtel Le Walt (9.0)</li>
  <li>Luxury stay: Pullman Paris Tour Eiffel (8.2)</li>
  <li>Mid-range stay: Hôtel Eiffel (8.7)</li>
  <li>Budget Stay: People – Paris Bercy (8.9)</li>
  `;

thingsToDoList.innerHTML = `
<li>Eiffel Tower Access to the Second Floor and the Summit by Elevator</li>
<li>Versailles Palace and Gardens Skip-the-Line Tour from Paris</li>
<li>Louvre Museum Masterpieces Guided Tour with Reserved Access</li>
  `;
