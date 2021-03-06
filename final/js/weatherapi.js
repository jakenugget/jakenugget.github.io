const lat = 40.16;
const lon = -110.40;
const appId = '7f500379c65a4583d47537b7d1a732eb';

const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=40.16&lon=-110.46&appid=7f500379c65a4583d47537b7d1a732eb&units=imperial`;

fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    document.getElementById('weather').innerHTML=jsObject.current.weather.description.toUpperCase();
    document.getElementById('temperature').innerHTML=jsObject.current.temp.toFixed(0);
    document.getElementById('humidity').innerHTML=jsObject.current.humidity;
    document.getElementById('windspeed').innerHTML=jsObject.current.wind_speed.toFixed(0);
  });


const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=40.16&lon=110.40&exclude=current,minutely,hourly&appid=4c6ee178fbcaa341e556052daf49c4ef&units=imperial`;

const todayDate = new Date();

const todayNumber = todayDate.getDay();

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//console.log(weekday[3]);

fetch(forecastURL)
  .then(response => response.json())
  .then(weatherinfo => {
    //console.log(weatherinfo);

    let myList = weatherinfo.list;

    let forecastToday = todayNumber;

    for (let i = 0; i < myList.length; i++) {
      let time = myList[i].dt_txt;

      if (time.includes("12:00:00")) {
        
        forecastToday += 1;

        if (forecastToday === 7) {forecastToday = 0;}

        let dayName = document.createElement('h3');
        dayName.setAttribute('class', 'forecastheader');
        dayName.textContent = weekday[forecastToday];

        let temp = document.createElement('span');
        temp.setAttribute('class', 'temperature');
        temp.textContent = `${weatherinfo.list[i].main.temp.toFixed(0)}\xB0F`;

        let iconCode = weatherinfo.list[i].weather[0].icon;
        let iconPath = `//openweathermap.org/img/wn/${iconCode}@2x.png`;
        let icon = document.createElement('img');
        icon.setAttribute('class', 'weathericon');
        icon.setAttribute('alt', 'Weather Icon');
        icon.src = iconPath;

        let dayCard = document.createElement('div');
        dayCard.setAttribute('class', 'weathercard');
        dayCard.appendChild(dayName);
        dayCard.appendChild(icon);
        dayCard.appendChild(temp);

        document.querySelector('.forecast').appendChild(dayCard);
      }
    }
  });
