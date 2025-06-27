function fetchapi(form) {
    var wather = form.wather.value;
    console.log(wather);

    async function weatherapi() {
        const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=' + wather;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '969e850623mshaeefd98a1c5a46fp114733jsn21d35431569e',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            var response = await fetch(url, options);
            var mydata = await response.json();
            document.getElementById("weatherCards").classList.remove("d-none");

            document.getElementById("head").innerHTML = "Location Information";
            document.getElementById("msg1").innerHTML =
                "Name: " + mydata["location"]["name"] +
                "<br>Region: " + mydata["location"]["region"] +
                "<br>Lat: " + mydata["location"]["lat"] +
                "<br>Lon: " + mydata["location"]["lon"] +
                "<br>Time Zone: " + mydata["location"]["tz_id"];

            document.getElementById("head1").innerHTML = "Current Weather";
            document.getElementById("msg2").innerHTML =
                "Last Update: " + mydata["current"]["last_updated"] +
                "<br>Temp in Celsius: " + mydata["current"]["temp_c"] +
                "<br>Temp in Fahrenheit: " + mydata["current"]["temp_f"] +
                "<br>Wind Speed: " + mydata["current"]["wind_kph"] + " kph" +
                "<br>Wind Degree: " + mydata["current"]["wind_degree"] +
                "<br>Wind Direction: " + mydata["current"]["wind_dir"] +
                "<br>Humidity: " + mydata["current"]["humidity"] +
                "<br>Cloud: " + mydata["current"]["cloud"];

            document.getElementById("head2").innerHTML = "Weather Condition";
            document.getElementById("msg3").innerHTML =
                "Condition: " + mydata["current"]["condition"]["text"] +
                "<br><img src='https:" + mydata["current"]["condition"]["icon"] + "' alt='Weather Icon'>";
        } catch (error) {
            alert("Error fetching weather data. Please try again.");
            console.error(error);
        }
    }

    weatherapi();
}