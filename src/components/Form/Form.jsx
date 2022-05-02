import { useState } from "react";


function Form({getWeather, valid}) {


	const [city, setCity] = useState('');

	

	function handleChange (e) {
		setCity(e.target.value);
	};

	function handleSubmit (e) {
		e.preventDefault();
		getWeather(city);
		setCity('');
	}

	return (
		<div>
			<form
				autocomplete="off"
				className="search__container"
				id="search__container"
				onSubmit={handleSubmit}
			>
				<input
					id="weather__search"
					className={valid ? "weather__search": "weather__search active"}
					value={city}
					type="text"
					placeholder="Enter the city"
					onChange={handleChange}
				/>
				<button class="search__button">
					<svg
						className="svg__search"
						width="40"
						height="40"
						viewBox="0 0 30 30"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path opacity="1" d="M19.3775 17.5H18.385L18.04 17.1575C19.2588 15.7363 20 13.8938 20 11.875C20 7.38752 16.3625 3.75002 11.875 3.75002C7.3875 3.75002 3.75 7.38752 3.75 11.875C3.75 16.3625 7.3875 20 11.875 20C13.8938 20 15.735 19.26 17.1563 18.0425L17.5013 18.385V19.375L23.7488 25.6138L25.6125 23.75L19.3775 17.5ZM11.875 17.5C8.76751 17.5 6.25001 14.9825 6.25001 11.875C6.25001 8.76877 8.76751 6.25002 11.875 6.25002C14.9813 6.25002 17.5 8.76877 17.5 11.875C17.5 14.9825 14.9813 17.5 11.875 17.5Z"/>
					</svg>
				</button>
			</form>
		</div>
	);
}

export default Form;
