// apiConnection.js
export function getWeather(city) {
  const apiKey = "1fcdc9e12548013f8d1a03ff1d7c1869";

  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
    .then(function (response) {
      const data = response.data;
      return {
        temperature: data.main.temp,
        windSpeed: data.wind.speed,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      };
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}
