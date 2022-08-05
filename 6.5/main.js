fetch("https://api.openweathermap.org/data/2.5/weather?q=Karditsa&units=metric&APPID=8a1ebbebbca9f844ad464b5bd4a5937b")
    .then((response) => {
        if(!response.ok){
            throw new Error(`There was an error: ${response.status} ${response.statusText}`);
        };
        response.json();
    });
    .then((data) => console.log(data))
    .catch((err) => console.log(err));