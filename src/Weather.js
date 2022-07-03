import { useEffect, useState } from "react";
import "./App.css";
function Weather(){
let [City , setCity] = useState("America");
let [Weather , setWeather] = useState("Weather");
let [Humidity , setHumidity] = useState("Humidity");
let [windSpeed , setWindSpeed] = useState("WindSpeed");
useEffect(() => {
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + City + "&appid=5e229201d08f0d3371f84d98bcd5d81d")
    .then((data) => data.json()).then((data) => {
    let lon = data[0].lon;
    let lat = data[0].lat;
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat +"&lon=" + lon + "&units=metric&appid=5e229201d08f0d3371f84d98bcd5d81d")
    .then((data) => data.json()).then((data => {
        setWeather("Temp " + data.main.temp + " °C")
        setHumidity("Humidity " + data.main.humidity)
        setWindSpeed("Wind Speed " + data.wind.speed + " km/h")
    }))
    })
            }, [City])
return (
<div className="bg">
<div className="Container">
<div className="WeatherTeller">
<input className="Search" placeholder="Town" onBlur={() => { document.querySelector(".Search").value !== "" ? setCity((document.querySelector(".Search").value)) : console.log("")}}></input>
<h1 className="City"> Weather For {City} </h1>
<p className="Weather">{Weather}</p>
<p className="Humidity">{Humidity}</p>
<p className="WindSpeed">{windSpeed}</p>
</div>
</div>
</div>
)
}

export default Weather