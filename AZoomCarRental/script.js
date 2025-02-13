const cars = [
    { id: "1", name: "Tesla Model S", range: 350, price: 120, seats: 5, image: "./public/teslaS.jpg"},
    { id: "2", name: "Ford Mustang GT", range: 350, price: 150, seats: 5, image: "./public/ford.jpg" },
    { id: "3", name: "Toyota Supra", range: 350, price: 100, seats: 5, image: "./public/toyotaSupra.jpg" },
    { id: "4", name: "Porsche 911 Turbo S", range: 350, price: 100, seats: 5, image: "./public/porshe911.jpg" },
    { id: "5", name: "Lamborghini Aventador", range: 350, price: 100, seats: 5, image: "./public/lamboAventador.jpg" },
    { id: "6", name: "BMW M4 Competition", range: 350, price: 100, seats: 5, image: "./public/bmw.jpg" },
];

function populateHomeFleet(){
    const cargrid = document.getElementById("homeFleetContainer");
    cargrid.innerHTML = "";

    const limitedCars = cars.slice(0, 3);
    limitedCars.forEach(car => {
        const carInfo = `
            <div class="relative group bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="${car.image}" alt="${car.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h4 class="text-xl font-bold">${car.name}</h4>
                </div>
                <div
                    class="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6">
                    <p class="text-lg">Price: $${car.price}/day</p>
                    <p class="text-lg">Range: ${car.range} miles</p>
                    <p class="text-lg">Seats: ${car.seats}</p>
                </div>
            </div>
        `;
        cargrid.innerHTML += carInfo;
    })
}


function displayCars(filteredCars){
    const cargrid = document.getElementById("carGrid");
    cargrid.innerHTML = "";

    filteredCars.forEach(car => {
        const carinfo = `
            <div class="relative group bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="${car.image}" alt="${car.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h4 class="text-xl font-bold">${car.name}</h4>
                </div>
                <div class="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-6">
                    <p class="text-lg">Price: $${car.price}/day</p>
                    <p class="text-lg">Range: ${car.range} miles</p>
                    <p class="text-lg">Seats: ${car.seats}</p>
                    <a href="#" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onclick="showCarDetails('${car.id}')">Book Now</a>
                </div>
            </div>`;
        cargrid.innerHTML += carinfo;
    });
}

function showCarDetails(carId) {
    const car = cars.find(c => c.id === carId);
    if (car) {
        document.getElementById("carImage").src = car.image;
        document.getElementById("carName").innerText = car.name;
        document.getElementById("carPrice").innerText = "Price: " + car.price + "/day";
        document.getElementById("carSeats").innerText = "Seats: " + car.seats;

        document.getElementById("carDialog").classList.remove("hidden");
    }
}

function filterCars(){
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const priceFilter = document.getElementById("priceFilter").value;
    const seatsFilter = document.getElementById("seatsFilter").value;

    let filteredCars = cars.filter(car => car.name.toLowerCase().includes(searchQuery));

    if(seatsFilter) {
        filteredCars = filteredCars.filter(car => car.seats == seatsFilter);
    }

    if (priceFilter === "low") {
        filteredCars.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "high") {
        filteredCars.sort((a, b) => b.price - a.price);
    }

    displayCars(filteredCars);
}

function openLoginDialog(event) {
    event.preventDefault();
    document.getElementById('modalBackdrop').classList.remove('hidden');
    document.getElementById('loginModal').classList.remove('hidden');
}

function closeLoginDialog(event) {
    event.preventDefault();
    document.getElementById('modalBackdrop').classList.add('hidden');
    document.getElementById('loginModal').classList.add('hidden');
}

function changeNav(){
    let isLoggedIn = getCookie("admin");
    if(isLoggedIn){
        document.getElementById("navLogin").classList.add("hidden");
        document.getElementById("navLogout").classList.remove("hidden");
    }
}

function login(event){
    event.preventDefault();
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    if(username === "admin" && password === "password")
        setCookie(username, password, 7);
    closeLoginDialog(event);
    changeNav();
}

function setCookie(name, value, days){
    let cookieExpire = "";
    if (days){
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        cookieExpire = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + "; path=/" + cookieExpire; 
}

function getCookie(name){
    let cookieName = name + "=";
    let cookieAtt = document.cookie.split('; ');
    for (let i = 0; i < cookieAtt.length; i++) {
        let [key, value] = cookieAtt[i].split("=");
        if (key === name) return true;
    }
    return false;
}

function deleteCookie(name){
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

function logOut(event){
    deleteCookie("admin");
    location.reload();
}