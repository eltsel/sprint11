var API_KEY = "8a1ebbebbca9f844ad464b5bd4a5937b";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("#weather");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    WeatherInfo(document.querySelector('#results'), form);
})
});

const WeatherInfo = async ( element, weather ) => {
    try {
        let city = weather.querySelector('#city').value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
        let response = await request(url);
        element.innerText = JSON.stringify(response);
      } catch(err) {
        console.log(err);
      }
  };
  

const request = url => {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => {
            if(response.ok) {
                resolve(response.json());
            } else {
                reject({
                    error: 500
                });
            }
        });
    });
};


