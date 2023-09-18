const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form=document.querySelector("form");
const serach=document.querySelector("#search")
const weather=document.querySelector("#weather");

const getWeather=async(city)=>{
    weather.innerHTML=`<h2>Loading... </h2>`;
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response= await fetch(url);
    const data=await response.json()
   return showWeather(data);

}
const showWeather=(data)=>{
    console.log(data)
    if(data.cod==404){
        weather.innerHTML=`<h2>City not found </h2>`;
        return;
    }
   weather.innerHTML=` <div class="place"   style ="text-align: center;">
   <h1>${data.name},${data.sys.country}</h1>
</div>
<div class="img">
   <img src="weather-icon-png-11067.png">
</div>
<div class="row1">
<div class="report">
   <img src="icons8-temperature-30.png" alt="" srcset="">
   <h4>Temperature</h2>
   <h2>${data.main.temp}℃</h2>

</div>    
<div class="report"> 
   <img src="icons8-clouds-50.png" alt="" srcset="">
   <h4>Weather</h3>
   <h2>${data.weather[0].main}</h4>
</div>
<div class="report">
   <img src="icons8-humidity-50.png" alt="" srcset="">
   <h4>Humidity</h3>
   <h2>${data.main.humidity} % </h3>
</div>
<div class="report">
   <img src="icons8-wind-50.png" alt="" srcset="">
   <h4>Pressure</h4>
   <h2>${data.main.pressure} hpa</h4>
<div>
</div>
</div>
</div>
</div>`
}



form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }
)
