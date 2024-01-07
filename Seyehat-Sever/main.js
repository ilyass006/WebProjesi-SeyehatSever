

let img_id = document.getElementById("img-id-1");

let img_number = 1;
let opacity = 0;

function slideShow()
{

    if(img_number >6) {img_number =1;}
    opacity = 0;
    img_id.opacity = opacity;
    img_id.src = `./images/a (${img_number}).jpg`;

    for(let i=0;i<10;i++)
    {
        img_id.opacity+=0.1;
    }

    img_number++;
}

setInterval(slideShow,3000);

let date_id= document.getElementById("date-id");
let day_id = document.getElementById("day-id");
let clock_id = document.getElementById("clock-id");

let time_info = new Date()
let day_info = time_info.getDay();


switch (day_info)
{

    case 0:
        day_info = "Pazar";
        break;

    case 1:
        day_info = "Pazartesi";
        break;

    case 2:
        day_info = "Salı";
        break;

    case 3:
        day_info = "Çarşamba";
        break;

    case 4:
        day_info = "Perşembe";
        break;
        
    case 5:
        day_info = "Cuma";
        break;
    
    case 6:
        day_info = "Cumartesi";
        break;

    default:
        day_info = "NO Day";
        break;
}

date_id.innerHTML = `${time_info.getDate()}/${time_info.getMonth()+1}/${time_info.getFullYear()}`;
day_id.innerHTML = `${day_info}`;

   
function clock_time()
{
    const current_time = new Date();

    let h = current_time.getHours();
    let m = current_time.getMinutes();
    let s = current_time.getSeconds();

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    clock_id.innerHTML = `${h}.${m}.${s}`;
}


function checkTime(i)
{
    if (i < 10)
    {i = "0" + i};
    return i;
}

setInterval(clock_time,1000);

let city_id1 = document.getElementById("city-id1");
let temp_id1 = document.getElementById("temp-id1");
let desc_id1 = document.getElementById("desc-id1");
let w_img_id1 = document.getElementById("w-img-id1");


let city_name = "ankara";
let api_key = `f2c93804d01a59fee4488dc0bf6d4097`;

const query = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric&lang=tr`;

let weather_infos =fetch(query).then((response) => {return response.json();});

weather_infos.then((result) => {console.log(result)})

weather_infos.then((infos) =>
{
    
    city_id1.innerHTML = infos.name;
    temp_id1.innerHTML = infos.main.temp;
    desc_id1.innerHTML = infos.weather[0].description;
    w_img_id1.src= `https://api.openweathermap.org/img/w/${infos.weather[0].icon}.png`

})


let input_id = document.getElementById("input-id");

let city_id2 = document.getElementById("city-id2");
let temp_id2 = document.getElementById("temp-id2");
let desc_id2 = document.getElementById("desc-id2");
let w_img_id2 = document.getElementById("w-img-id2");

function search_city()
{

let api_key = `f2c93804d01a59fee4488dc0bf6d4097`;

const query = `https://api.openweathermap.org/data/2.5/weather?q=${input_id.value}&appid=${api_key}&units=metric&lang=tr`;

let weather_infos =fetch(query).then((response) => {return response.json();});

weather_infos.then((result) => {console.log(result)})

weather_infos.then((infos) =>
{
    
    city_id2.innerHTML = infos.name;
    temp_id2.innerHTML = infos.main.temp;
    desc_id2.innerHTML = infos.weather[0].description;
    w_img_id2.src= `https://api.openweathermap.org/img/w/${infos.weather[0].icon}.png`

})
}


input_id.addEventListener("keypress", (event)=>{press_enter(event);} );


function press_enter(event)
{
    if (event.key === "Enter")
    {
      document.getElementById("button-id").click();
    }
}
