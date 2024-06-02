// Initialize an empty array to store destinations
const destinations = [];

function addDestination() {
    const name = document.getElementById("destination-name").value;
    const latitude = parseFloat(document.getElementById("latitude").value);
    const longitude = parseFloat(document.getElementById("longitude").value);

    if (name && !isNaN(latitude) && !isNaN(longitude)) {
        destinations.push({ name, latitude, longitude });
        displayDestinations();
    } else {
        alert("Please enter valid data for all fields.");
    }
}

function displayDestinations() {
    const destinationsList = document.getElementById("destinations-list");
    destinationsList.innerHTML = "";

    destinations.forEach(dest => {
        const listItem = document.createElement("div");
        listItem.classList.add("destination-item");
        listItem.innerHTML = `<strong>${dest.name}</strong> (${dest.latitude}, ${dest.longitude})`;
        destinationsList.appendChild(listItem);
    });
}
