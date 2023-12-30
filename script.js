// api keys
const apiKey="7af5331f2d5f06a34fcb20d6f92962a0";
const apiUrl="http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".searches input");
const searchBtn= document.querySelector(".searches button");

const weatherIcon=document.querySelector(".weatherimg")


async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
        document.querySelector(".div2").style.display="none"
    }else{
        var data=await response.json();

    console.log(data);
    
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".condition").innerHTML = data.weather[0].main;
    document.querySelector(".humidity_value").innerHTML = data.main.humidity+"%";
    document.querySelector(".atmpressure_value").innerHTML = data.main.pressure+" hPa";
    document.querySelector(".windspeed_value").innerHTML = data.wind.speed+" Km/Hr";
    document.querySelector(".winddirection_value").innerHTML = data.wind.deg +"°";

    if (data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png"
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/sun.png"
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png"
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }else if (data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png"
    }
    document.querySelector(".error").style.display="none"
    
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

// fetchData(cityName);

// const cachedWeatherData = localStorage.getItem("defaultWeatherData");
// if (cachedWeatherData){
//     const weather =JSON.parse(cachedWeatherData);
//     populateWeatherData(weather);
// }

// const city = document.querySelector(".searchbar");
// function searchWeather(){
//     fetchData(city.value);
//     city.value="";
// }