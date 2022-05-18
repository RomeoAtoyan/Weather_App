let temperature = document.getElementById("tempInC");
let humidity = document.getElementById("humidity");
let text = document.getElementById("currentText");
let feel = document.getElementById("feel");
let currLocation = document.getElementById("location");
let searchBtn = document.getElementById("searchBtn");

function getData(city) {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=94d116a42dce4c8cb7d181129221705&q=" +
      city
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      function displayData() {
        let temp_value = data.current.temp_c;
        let humidity_value = data.current.humidity;
        let feel_value = data.current.feelslike_c;
        let location_value = data.location.name;
        let text_value = data.current.condition.text;

        temperature.innerHTML = Math.round(temp_value) + "&deg";
        humidity.innerHTML = humidity_value + "%";
        feel.innerHTML = Math.round(feel_value) + "&deg";
        currLocation.innerHTML = location_value;
        text.innerHTML = text_value;
      }
      displayData();
    });
}
getData();

function searchCity() {
  searchBtn.onclick = () => {
    let cityInput = document.getElementById("cityInput").value;
    if (!cityInput) {
      alert("Search For A City");
    } else {
      getData(cityInput);
    }
  };
}
searchCity();
