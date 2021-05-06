import 'regenerator-runtime/runtime';
import '../css/style.css';
import search from '../img/search.png';
import gps from '../img/gps.png';

const myToken = process.env.MY_TOKEN;


// ______Structure
document.body.setAttribute('class', 'flex-column');

// ---------- INPUT PART ----------
let inputs = document.createElement('div');
document.body.appendChild(inputs);

// 1) h1 - input title
let inputTitle = document.createElement('h1');
inputTitle.setAttribute('class', 'green-font large-cursive-font');
inputTitle.innerHTML = 'Do you want to know the level of air pollution in your city?';
inputs.appendChild(inputTitle);

// 2) p
let inputPara = document.createElement('p');
inputPara.innerHTML = 'Insert the name of your city';
inputs.appendChild(inputPara);

// ----- Search with text input
// 3) div - search input
let searchInput = document.createElement('div');
searchInput.setAttribute('id', 'search-input');
searchInput.setAttribute('class', 'flex-row');
inputs.appendChild(searchInput);

// 3.1) input - search bar (+ event)
let searchBar = document.createElement('input');
searchBar.setAttribute('placeholder', 'City');
searchBar.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {searchButton.click();}
});
searchInput.appendChild(searchBar);

// 3.2) button - search (+ event)
let searchButton = document.createElement('button');
searchButton.setAttribute('id', 'search-button');
searchButton.setAttribute('class', 'white-font');
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (searchBar.value) {
      let cityName = searchBar.value.toLowerCase();
      searchBar.value = '';
  
      link(`https://api.waqi.info/feed/${cityName}/?token=${myToken}`);
    }
});
searchInput.appendChild(searchButton);

// 3.2.1) img - search img (img fot search button)
let searchImg = new Image();
searchImg.setAttribute('id', 'search-img');
searchImg.src = search;
searchButton.appendChild(searchImg);


// ----- Search with GPS input
// 4) p
let gpsPara = document.createElement('p');
gpsPara.innerHTML = 'or click the bottom to active the GPS reseach';
inputs.appendChild(gpsPara);

// 5) button - gps (+ event)
let gpsButton = document.createElement('button');
gpsButton.setAttribute('id', 'gps-button');
gpsButton.addEventListener('click', () => {
    const successCallback = async function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        link(`https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${myToken}`)
    };
    const errorCallback = function (error) {
        alert(error.message);
    }
    const options = {enableHighAccuracy: true, timeout: 5000};
      
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)
});
inputs.appendChild(gpsButton);

// 5.1) img - gps (img for gps button)
let gpsImg = new Image();
gpsImg.setAttribute('id', 'gps-img');
gpsImg.src = gps;
gpsButton.appendChild(gpsImg);


// ---------- OUTPUT PART ----------
let outputs = document.createElement('div');
outputs.setAttribute('id', 'outputs');
document.body.appendChild(outputs);

// 1) p - output title
let outputTitle = document.createElement('p');
outputTitle.setAttribute('class', 'small-font light-blue-font left-font');
outputs.appendChild(outputTitle);

// ----- Pollution level visualisation
// 2) div - output view
let outputView = document.createElement('div');
outputView.setAttribute('id', 'output-view');
outputView.setAttribute('class', 'flex-row');
outputs.appendChild(outputView);

// 2.1) div - output value
let outputValue = document.createElement('div');
outputValue.setAttribute('id', 'output-value');
outputValue.setAttribute('class', 'white-font large-cursive-font flex-row');
outputView.appendChild(outputValue);


// 2.2) div - output level
let outputLevel = document.createElement('div');
outputLevel.setAttribute('id', 'output-level');
outputLevel.setAttribute('class', 'flex-column');
outputView.appendChild(outputLevel);

// 2.2.1) p - apl title
let aplTitle = document.createElement('p');
aplTitle.setAttribute('class', 'small-font');
aplTitle.innerHTML = 'Air Pollution Level';
outputLevel.appendChild(aplTitle);

// 2.2.2= p - apl level
let aplLevel = document.createElement('p');
aplLevel.setAttribute('class', 'medium-font');
outputLevel.appendChild(aplLevel);


// ----- Details visualisation
// 3) details - more details
let detailsMore = document.createElement('details');
outputs.appendChild(detailsMore);

// 3.1) summary - details button
let detailsButton = document.createElement('summary');
detailsButton.setAttribute('class', 'small-font left-font open-button');
detailsButton.innerHTML = 'More details';
detailsMore.appendChild(detailsButton);

// 3.2) div - details list
let detailsList = document.createElement('ul');
detailsList.setAttribute('id', 'details-list');
detailsList.setAttribute('class', 'xsmall-font');
detailsMore.appendChild(detailsList);


// ----- Stations visualisation
// 4) details - nearby station
let detailsStations = document.createElement('details');
outputs.appendChild(detailsStations);

// 4.1) summary - station button
let stationsButton = document.createElement('summary');
stationsButton.setAttribute('class', 'small-font left-font open-button');
stationsButton.innerHTML = 'More stations';
detailsStations.appendChild(stationsButton);

// 4.2.1) p - station description
let stationsDescription = document.createElement('p');
stationsDescription.setAttribute('class', 'small-font');
detailsStations.appendChild(stationsDescription);

// 4.2.2) div - station list
let stationsList = document.createElement('ul');
stationsList.setAttribute('id', 'stations-list');
stationsList.setAttribute('class', 'xsmall-font');
detailsStations.appendChild(stationsList);

// ----- Initial output display
outputs.style.display = 'none';


// ______Request
// ---------- API fetch ----------
function link(url) {
    fetch(url)
    .then(response => response.json())
    .then(function(json) {
        if (json.status === 'error') {
            alert(`Town not found. Please insert the name of another city.`);
        } else {

            //  ----- Variables from JSON
            let aqi;
            if ('aqi' in json.data) {aqi = json.data.aqi;}
              else {aqi = '-';};
            let cityAqi;
            if ('name' in json.data.city) {cityAqi = json.data.city.name;}
              else {cityAqi = '-';};

            let pm25;
            if ('pm25' in json.data.iaqi) {pm25 = json.data.iaqi.pm25.v;}
              else {pm25 = '-';};
            let pm10;
            if ('pm10' in json.data.iaqi) {pm10 = json.data.iaqi.pm10.v;}
              else {pm10 = '-';};
            let o3;
            if ('o3' in json.data.iaqi) {o3 = json.data.iaqi.o3.v;}
              else {o3 = '-';};
            let no2;
            if ('no2' in json.data.iaqi) {no2 = json.data.iaqi.no2.v;}
              else {no2 = '-';};
            let so2;
            if ('so2' in json.data.iaqi) {so2 = json.data.iaqi.so2.v;}
              else {so2 = '-';};
            let co;
            if ('co' in json.data.iaqi) {co = json.data.iaqi.co.v;}
              else {co = '-';};

            let temp;
            if ('t' in json.data.iaqi) {temp = json.data.iaqi.t.v;}
              else {temp = '-';};
            let pressure;
            if ('p' in json.data.iaqi) {pressure = json.data.iaqi.p.v;}
              else {pressure = '-';};
            let humidity;
            if ('h' in json.data.iaqi) {humidity = json.data.iaqi.h.v;}
              else {humidity = '-';};
            let wind;
            if ('w' in json.data.iaqi) {wind = json.data.iaqi.w.v;}
              else {wind = '-';};

            // ----- Output section
            outputValue.innerHTML = `${aqi}`;
            outputTitle.innerHTML = `${cityAqi}`;

            // Color and text changes based on the value of aqi
            if (aqi >= 0 && aqi <= 50) {
              outputValue.style.backgroundColor = '#038C5A';
              aplLevel.innerHTML = 'Good';
              aplLevel.style.color = '#038C5A';
            } else if (aqi >= 51 && aqi <= 100) {
              outputValue.style.backgroundColor = '#F2C230';
              aplLevel.innerHTML = 'Moderate';
              aplLevel.style.color = '#F2C230';
            } else if (aqi >= 101 && aqi <= 150) {
              outputValue.style.backgroundColor = '#F28B30';
              aplLevel.innerHTML = 'Unhealthy for sensitive groups';
              aplLevel.style.color = '#F28B30';
            } else if (aqi >= 151 && aqi <= 200) {
              outputValue.style.backgroundColor = '#CC0033';
              aplLevel.innerHTML = 'Unhealthy';
              aplLevel.style.color = '#CC0033';
            } else if (aqi >= 201 && aqi <= 300) {
              outputValue.style.backgroundColor = '#55038C';
              aplLevel.innerHTML = 'Very unhealthy';
              aplLevel.style.color = '#55038C';
            } else if (aqi >= 300) {
              outputValue.style.backgroundColor = '#73022C';
              aplLevel.innerHTML = 'Hazardous';
              aplLevel.style.color = '#73022C';
            } else {
              outputValue.style.backgroundColor = '#A6A6A6';
              aplLevel.innerHTML = '-';
              aplLevel.style.color = '#A6A6A6';
            };

            // ------ Details section
            detailsList.innerHTML = `
              <li><b>PM2.5</b> ${pm25} μg/m³</li>
              <li><b>PM10</b> ${pm10} μg/m³</li>
              <li><b>O3</b> ${o3} μg/m³</li>
              <li><b>NO2</b> ${no2} μg/m³</li>
              <li><b>SO2</b> ${so2} μg/m³</li>
              <li><b>CO</b> ${co} μg/m³</li>
              <br/>
              <li><b>Temperture</b> ${temp}°C</li>
              <li><b>Pressure</b> ${pressure} g/cm²</li>
              <li><b>Humidity</b> ${humidity} %</li>
              <li><b>Wind</b> ${wind} m/s</li>
            `;

            // ----- Stations section
            let latJson = parseFloat(json.data.city.geo[0]);
            let lngJson = parseFloat(json.data.city.geo[1]);
            let latBL = latJson - 0.2;
            let lngBL = lngJson - 0.2;
            let latTR = latJson + 0.2;
            let lngTR = lngJson + 0.2;

            fetch(`https://api.waqi.info/map/bounds/?latlng=${latBL},${lngBL},${latTR},${lngTR}&token=${myToken}`)
              .then(function (response) {
                if (response.ok) {
                  return response.json();
                }
              }).then(function(json) {
                  stationsDescription.innerHTML = `${json.data.length} stations in this area`;
                  stationsList.innerHTML = '';
                  for (let i = 0; i < json.data.length; i++) {
                      stationsList.innerHTML += `
                          <li>${json.data[i].station.name}
                          <br/>
                          <b>aqi: ${json.data[i].aqi}</b></li>
                      `;
                  };
              });

            // ----- Output box visualisation
            outputs.style.display = 'block';
            
        };  // closing else
    });  // closing json
};  // closing link