
$(document).ready(function () {

    $("#search-btn").on("click", function () {

        var searchValue = $("#search-value").val()

        searchWeather(searchValue)

    })
    $(".history").on("click", function () {

        searchWeather($(this).text())

    })
    function makeRow(text) {

        //additional block of code


    }

    function searchWeather(searchValue) {

        var apiKey = "5c3cb19ef5f06279a16d3fc2040aef07";

        var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q="+searchValue + "&appid="+apiKey+"&units=imperial";

        $.ajax({

            type: "GET",
            url: queryUrl,
            dataType: "JSON", success: function (response) {

                if (history.indexOf(searchValue) === -1) {

                    history.push(searchValue)

                    window.LocalStorage.setItem("history", JSON.stringify(history))

                    makeRow(searchValue)
                }


                var card = $("<div>").addClass("card");
                var wind = $("<p>").addClass("card-text").text("Wind Speed: " + response.wind.speed + " MPH");
                var humid = $("<p>").addClass("card-text").text("Humidity: " + response.main.hmidity + " MPH");
                var temp = $("<p>").addClass("card-text").text("Temperature: " + response.main.temp + " MPH");
                var cardBody = $("<div>").addClass("card-body");

                cardBody.append(temp, humid, wind);
                card.append(cardBody);
                $("#today").append(card);

                getForecast(searchValue);


            }
        })
    }
})





                // var temp = response.main.temp;
                // var windSpeed = response.wind.speed;
                // var humidity = response.main.humidity;
                // var cityDiv = $("<div class='city'>");
                // var header = $("<h4>").text(city);
                // var pOne = $("<p>").text("Temp: " + temp + String.fromCharCode(176) + "F");
                // var pTwo = $("<p>").text("Wind Speed: " + windSpeed + "mph");
                // var pThree = $("<p>").text("Humidity: " + humidity + "%");

                // var uvSpan = $("<span>").text(uvResponse.value).css("color", color);
                // var pFour = $("<p>").text("UV Index: ").append(uvSpan);
                // cityDiv.append(header, pOne, pTwo, pThree, pFour);

    //         }

    //     })


    // }

        // function getForecast(searchValue) {

        //     $.ajax({

        //         type: "GET",
        //         url: queryUrl,
        //         dataType: "JSON", success: function (response) {

        //         if 

        // }




//         var forecast = [];

//         var cities = $(this).attr("city");

//         var apiKey = "5c3cb19ef5f06279a16d3fc2040aef07";

//         var lat = "latitude";

//         var lon = "longitude";

//         var uvIndex = (lat + lon);

//        

//         cities.forEach(function (city, index, cities) {

//             renderButton(city);

//             if (index === cities.length - 1) {

//                 displayWeatherInfo(city);
//             }
//         })

//         function displayWeatherInfo(city) {

//             var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={api key}&units=imperial";

//             $.ajax(queryUrl).then(function (response) {

//                 var lon = response.coord.lon;
//                 var lat = response.coord.lat;
//                 var queryUV = 'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api key}';

//                 $.ajax(queryUV).then(function (uvResponse) {

//                     console.log(uvResponse)

//                     var temp = response.main.temp;
//                     var windSpeed = response.wind.speed;
//                     var humidity = response.main.humidity;
//                     var cityDiv = $("<div class='city'>");
//                     var header = $("<h4>").text(city);
//                     var pOne = $("<p>").text("Temp: " + temp + String.fromCharCode(176) + "F");
//                     var pTwo = $("<p>").text("Wind Speed: " + windSpeed + "mph");
//                     var pThree = $("<p>").text("Humidity: " + humidity + "%");

//                     var uvSpan = $("<span>").text(uvResponse.value).css("color", color);
//                     var pFour = $("<p>").text("UV Index: ").append(uvSpan);
//                     cityDiv.append(header, pOne, pTwo, pThree, pFour);

//                     var forecastTemp = data.list[i].main.temp;
//                     var forecastHumidity = data.list[i].main.humidity;

//                 $("#Five-Day-Forecast").text(FiveDayForecast);

//                 var oneDayForward = new moment().add(1, 'day');
//                 var twoDayForward = new moment().add(1, 'day');
//                 var threeDayForward = new moment().add(1, 'day');
//                 var fourDayForward = new moment().add(1, 'day');
//                 var fiveDayForward = new moment().add(1, 'day');

//                 $("#day1-date").text(oneDayForward.format('dddd MMMM DD'));
//                 $("#day2-date").text(twoDayForward.format('dddd MMMM DD'));
//                 $("#day3-date").text(threeDayForward.format('dddd MMMM DD'));
//                 $("#day4-date").text(fourDayForward.format('dddd MMMM DD'));
//                 $("#day5-date").text(fiveDayForward.format('dddd MMMM DD'));

//                 $("#weather-view").empty();
//                 $("#weather-view").prepend(cityDiv);

//             })

//         })

// }

// function renderButton(city) {

//     var btn = $("<button>");
//     btn.addClass("city-btn btn btn-default").css("display", "block");
//     btn.attr("data-name", city);
//     btn.text(city);
//     $(".cities-array").append(btn);

// }

// $("#searchBtn").on("click", function (event) {

//     evvent.preventDefault();

//     var $weather = $("#city-input").val();

//     cities.push($weather);

//     localStorage.setItem("weather", JSON.stringify(cities));

//     renderButton($weather);

//     displayWeatherInfo($weather);

// });

// $(document).on("click", ".city-btn", function () {

//     var city = $(this).attr("data-name");
//     displayWeatherInfo(city);

// });
