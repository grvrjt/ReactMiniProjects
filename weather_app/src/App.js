import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const currentDate = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = months[currentDate.getMonth()];
  const day = currentDate.getDay();
  const year = currentDate.getFullYear();
  const apiKey = '9de8aa992ffe52edcaa8846dee0f0f02';

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=matric`);
      if (response.status == 200) {
        const weatherDetails = await response.json();
        setWeatherData(weatherDetails);
      }
    } catch (err) {
      setError(err)
    }
  }

  const formattedDate = `${month} ${day}, ${year}`;
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();

  };
  const handleInputChange = (event) => {
    setCity(event.target.value)
  };

  const getWeatherIconUrl = (cloud) => {
    switch (cloud) {
      case "Clouds":
        return "./thunder.png";
      case "Rain":
        return "./rain_with_cloud.png";
      case "Mist":
        return "./Tornado.png";
      case "Clear":
        return "./sun.png";
      default:
        break;
    }

  }
  useEffect(() => {
    fetchWeatherData();
  }, [])
  return (
    <div className="App">
      <div className='container'>
        {weatherData && (<>
          <h1 className='container_date'> {formattedDate}</h1>
          <div className='weather_data'>
            <h1 className='container_city'>{weatherData.name}</h1>

            <img className='container_img'
              src={getWeatherIconUrl(weatherData.weather[0].main)}
              width="180px"
              alter="thunder"
            />


            <h1 className='container_degree'>{(weatherData.main.temp / 10).toFixed(1)}</h1>
            <h2 className='country_per'>{weatherData?.weather[0].main}<span className="degree_icon"></span></h2>
            <form className='form' onSubmit={handleSubmit}>
              <input
                type='text'
                className='input'
                placeholder='Enter city name'
                onChange={handleInputChange}
                required
              />
              <button type='submit'>Search</button>
            </form>
          </div>
        </>)}

      </div>
    </div>
  );
}

export default App;
