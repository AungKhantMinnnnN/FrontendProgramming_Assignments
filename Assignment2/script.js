function setCookie(name, value, days){
    let cookieExpire = "";
    if (days){
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        cookieExpire = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + "; path=/" + cookieExpire; 
}

function deleteCookie(name){
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function getCookie(name){
    let cookieName = name + "=";
    let cookieAtt = document.cookie.split(';');
    for (let i = 0; i < cookieAtt.length; i++) {
      let c = cookieAtt[i].trim();
      if (c.indexOf(cookieName) === 0)
        return c.substring(cookieName.length, c.length);
    }
}

function checkLogin(){
    let username = getCookie("admin");
    if(username){
        console.log("cookie found.");
        console.log(username);
        return true;
    }else{
        console.log("Cookie not found.");
        return false;
    }
}

function logOut(){
    deleteCookie("admin");
    window.location.href = "index.html";
}

function checkLogInStatus(){
    let isUserLogin = checkLogin();
    if (isUserLogin) {
        document.getElementById("login-icon").style.display = "none";
        document.getElementById("logout-icon").style.display = "";
    } else {
        document.getElementById("login-icon").style.display = "";
        document.getElementById("logout-icon").style.display = "none";
    }
}

function redirectToBooking(carId){
    window.location.href = "./booking.html?carId=" + carId;
}

function populateCarData(carId){

    fetch("cars_data.json")
        .then(response => response.json())
        .then(data =>{
            const car = data.find(item => item.id == carId);
            if(car){
                const carName = document.getElementById("carName");
                carName.textContent = car.name;
                const carImage = document.getElementById("carImage");
                carImage.src = car.image;
                const carPrice = document.getElementById("carPrice");
                carPrice.textContent = "Price : " + car.price;
                const carSeats = document.getElementById("carSeats");
                carSeats.textContent = "Number of seats : " + car.seats;
            }
        });
}