// class Weather {
//     constructor(time, degrees, weatherType, location) {
//         this.time = time;
//         this.degrees = degrees;
//         this.weatherType = weatherType;
//         this.location = location;
//     };

//     getLocation() {
// navigator.geolocation.getCurrentPosition((position) => {
//     // console.log(position);
//     const place = position.coords
//     console.log(`https://www.google.com/maps/@latitude,longitude,zoomz3${place.latitude},${place.longitude}`);
//     return place
// });
// }
// };

// const sunday = new Weather("19:23", 24, "cloudy", "Cannes");
// sunday.getLocation()
// console.log(sunday);


const headind = document.querySelector(".body_title")
//or
const elements = {
    heading1: document.querySelector(".body_title")
};
console.log(elements.heading1);
console.log(headind);

elements.heading1.style.color = "red"

const div = document.querySelector(".body_div");
// console.log(div.classList.add("body_div1231"));
// console.log(div.classList.remove("body_div"));
// console.log(div);
div.style.backgroundColor = "beige";
div.style.width = "100px";
div.style.height = "100px"
div.style.color = "blue"
div.style.display = "flex"
div.style.justifyContent = "center"
div.style.alignItems = "center"
div.textContent = "Hello World"