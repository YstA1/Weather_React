import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Form from "../Form/Form";
import InfoDetails from "../InfoDetails/InfoDetails";
import InfoForecast from "../InfoForecast/InfoForecast";
import InfoNow from "../InfoNow/InfoNow";
import Locations from "../Locations/Locations";
import Tabs from "../Tabs/Tabs";
import "./App.scss";

function App() {
	const SERVER_URL_WEATHER = "https://api.openweathermap.org/data/2.5/weather";
	const SERVER_URL_FORECAST = "https://api.openweathermap.org/data/2.5/forecast";
	const API_KEY = "a552cb0f1254e987fd5c7b2cd924bc50";
	
	const [city, setCity] = useState("");
	const [temperature, setTemperature] = useState("");
	const [feelsLike, setFeelsLike] = useState("");
	const [icon, setIcon] = useState("");
	const [sunrise, setSunrise] = useState("");
	const [sunset, setSunset] = useState("");
	const [weather, setWeather] = useState("");
	const [cityValidator, setCityValidator] = useState(true)

	const [forecastItems, setForecastItems] = useState([])
	const [favouriteCities, setFavouriteCities] = useState([])

	const [now, setNow] = useState(true)
	const [details, setDetails] = useState(false)
	const [forecast, setForecast] = useState(false)


	useEffect(()=>{
		// localStorage.clear()
		if (localStorage.length == 2) setCity('Санкт-Петербург')
 
		const CITY= JSON.parse(localStorage.getItem('city'));
		if (CITY) {
			setCity(CITY);
		}
		
		const FAVOURITE_CITIES = JSON.parse(localStorage.getItem('favouriteCities'));
		if (FAVOURITE_CITIES) {
			setFavouriteCities(FAVOURITE_CITIES);
		}
	},[])


	useEffect(()=>{
		localStorage.setItem('favouriteCities', JSON.stringify(favouriteCities))
	},[favouriteCities])

	useEffect(()=>{
		localStorage.setItem('city', JSON.stringify(city))
		console.log(localStorage.city)
		getWeather(city)
	},[city])

	useEffect(()=>{
		console.log(city)
	},[])


	const WEATHER_INFO = {
		infoNow: {
			active: now,
			city: city,
			temperature: temperature,
			icon: icon,
		},
		infoDetails: {
			active: details,
			city: city,
			temperature: temperature,
			feelsLike: feelsLike,
			weather:  weather,
			sunrise: sunrise,
			sunset: sunset,
		},
		infoForecast: {
			active: forecast,
			city: city,
		},
	};

	async function getWeather(city) {
		const URL_WEATHER = `${SERVER_URL_WEATHER}?q=${city}&units=metric&appid=${API_KEY}`;
		const RESPONSE = await fetch(URL_WEATHER);

		if (RESPONSE.status === 404) {
			setCityValidator(false)
			setTimeout(()=>setCityValidator(true), 1000)
			return
		}

		const RESULT = await RESPONSE.json();

		setForecastItems([])

		const URL_FORECAST = `${SERVER_URL_FORECAST}?q=${city}&units=metric&appid=${API_KEY}`;
		const RESPONSE_FORECAST = await fetch(URL_FORECAST);
		const RESULT_FORECAST = await RESPONSE_FORECAST.json()

		//NOW
		const ICON_KEY = RESULT.weather[0].icon
		//DETAILS
		const TIMESTOMP_SUNRISE = new Date (RESULT.sys.sunrise * 1000)
		const TIMESTOMP_SUNSET = new Date (RESULT.sys.sunset * 1000)
		
		setCity(RESULT.name);
		setIcon(`http://openweathermap.org/img/wn/${ICON_KEY}@4x.png`);
		setTemperature(Math.round(RESULT.main.temp));
		setFeelsLike(Math.round(RESULT.main.feels_like));
		setWeather(RESULT.weather[0].main);
		setSunrise(TIMESTOMP_SUNRISE.toLocaleTimeString(`ru-RU`, {hour: '2-digit', minute: '2-digit'}));
		setSunset(TIMESTOMP_SUNSET.toLocaleTimeString(`ru-RU`, {hour: '2-digit', minute: '2-digit'}));

		function addItems (count) {
			for (let i = 0; i <= count;  i++) {
				const DATE_STOMP = new Date (RESULT_FORECAST.list[i].dt * 1000);
				const NEW_ITEM = {
					day: `${DATE_STOMP.getDate()} ${DATE_STOMP.toLocaleString(`en-US`, {month: `short`})}`,
					time: `${DATE_STOMP.toLocaleTimeString(`ru-RU`, {hour: '2-digit', minute: '2-digit'})}`,
					icon: `http://openweathermap.org/img/wn/${RESULT_FORECAST.list[i].weather[0].icon}@2x.png`,
					type: RESULT_FORECAST.list[i].weather[0].main,
					temp: Math.round(RESULT_FORECAST.list[i].main.temp),
					feels: Math.round(RESULT_FORECAST.list[i].main.feels_like),
				};
				setForecastItems(forecastItems => [...forecastItems, NEW_ITEM])
			};
		};
		addItems(15)
	}	

	function addToFavourite() {
		const FAVOURITE_CITIES_NAMES = favouriteCities.map(item => {return item.city})
		if(FAVOURITE_CITIES_NAMES.includes(city)) {
			return
		}
		const FAVOURITE_CITY = {
			city: city,
		}
		setFavouriteCities([...favouriteCities, FAVOURITE_CITY])
	}	
		
			
	function removeFavourite(city) {
		setFavouriteCities([...favouriteCities.filter((favourite) => favourite.city !== city)])
	}

	return (
		<div class="wrapper">
			<div class="weather">
				<Form getWeather={getWeather} valid={cityValidator}/>
				<div class="weather__container">
					<div class="weather__info">
						<div class="info__body">
							<InfoNow
								infoNow={WEATHER_INFO.infoNow}
								favouriteHandler={addToFavourite}
							/>
							<InfoDetails
								infoDetails={WEATHER_INFO.infoDetails}
							/>
							<InfoForecast
								infoForecast={WEATHER_INFO.infoForecast}
								forecastItems={forecastItems}
							/>
						</div>
						<Tabs 
							Tabs={WEATHER_INFO} 
							setNow={setNow} 
							setDetails={setDetails} 
							setForecast={setForecast}
						/>
					</div>
					<Locations 
						favouriteCities={favouriteCities}
						getWeather={getWeather}
						removeFavourite={removeFavourite}
					/>
				</div>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
