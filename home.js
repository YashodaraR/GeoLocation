//  window.onload = loadCoupon();

function loadCoupon(){
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('main').style.opacity='0.6';
    
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('main').style.opacity = '1';
}

let x = document.getElementById('out');
let y = document.getElementById('weatherOut');
// let z = document.getElementById('icon')

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
        else{
            x.innerText="Geo not Supported";
        }
}
function showPosition(data){
    let x = document.getElementById('out');
    let y = document.getElementById('weatherOut');
    console.log(data);
    // TO PRINT IT ON THE SCREEN (ie Longitude & Latitude)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    x.innerText = `Lat is ${lat} & Longi ${long}`;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`  
    
    //api calling
    fetch(url,{method: 'GET'})
    //returnpromise
    .then((res) =>res.json())
    //resolve promise
    .then((data) => {
        console.log(data)
    let cityName = data.city.name;
    let temp = data.list[0].temp.day;
    y.innerText = `My city ${cityName} and temp is ${temp}deg C`;
    // z.appendChild(img src="icon.png");
    // <img src="icon.png" id="icon">         
    })
    .catch((err) =>{
        console.log(err);
    })
                
}


            // const checkbox = document.getElementById('checkbox');
            // checkbox.addEventListener('change',() =>{
            //     document.body.classList.toggle('dark');


            // })
