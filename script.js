let DocHour = document.getElementById("hour"),
    DocMinute = document.getElementById("minute"),
    DocSecund = document.getElementById("secund"),
    DocDay = document.getElementById("day"),
    DocMonth = document.getElementById("month"),
    DocYear = document.getElementById("year");

    let time = new Date()

function Update() {
    let time = new Date(),
    Hour = time.getHours(),
    Minut = time.getMinutes(),
    Secund = time.getSeconds(),
    day = time.getDay(),
    Month = time.getMonth(),
    Year = time.getFullYear();

    if(Hour >= 0 && Hour <= 9){
        DocHour.innerHTML = `0${Hour}`;
    }else{
        DocHour.innerHTML = Hour;
    }

    if(Minut >= 0 && Minut <= 9){
        DocMinute.innerHTML = `0${Minut}`;
    }else{
        DocMinute.innerHTML = Minut;
    }

    if(Secund >= 0 && Secund <= 9){
        DocSecund.innerHTML = `0${Secund}`;
    }else{
        DocSecund.innerHTML = Secund;
    }


    DocDay.innerHTML = `${day} day`;
    DocMonth.innerHTML = `${Month+1} month`;
    DocYear.innerHTML = `${Year} year`;
    
}
Update();
setInterval(Update, 1000);

// ===========================================================================
// ===========================================================================
/* ajax */
const ApiKey = "e3847e0549bd3151bbf2e9cf31b73f6e";
let WeatherSity = "Qaraghandy",
    WeatherCountry = "kz";

let WeatherXhr = `http://api.openweathermap.org/data/2.5/weather?q=${WeatherSity},${WeatherCountry}&appid=${ApiKey}`;

let sity, weather_C;
let dataElement;


let xhr = new XMLHttpRequest();
    function fankWaetherXhr(TypeRequest, url){
        xhr.onreadystatechange = () =>{
            if(xhr.readyState == 4 && xhr.status == 200){
                dataElement = JSON.parse(xhr.responseText);
                
                document.getElementById('sity').innerHTML = dataElement.name;
                document.getElementById('temp').innerHTML = dataElement.main.temp;
                document.getElementById('humidity').innerHTML = dataElement.main.humidity;
            }
        }
        xhr.open(TypeRequest, url);
        xhr.send();
    }

fankWaetherXhr("GET", WeatherXhr);





