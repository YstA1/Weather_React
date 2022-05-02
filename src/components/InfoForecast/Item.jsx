import React from "react";

function Item({ forecast }) {
	return (
		<div class="forecast__item">
			<div class="data__time">
				<div name="weather__data" class="data">
					{forecast.day}
				</div>
				<div name="weather__time" class="time">
					{forecast.time}
				</div>
			</div>
			<div class="about__weather">
				<div class="weather__temp__feels">
					<div
						name="weather__temp"
						id="weather__temp"
						class="weather__forecast"
					>
						Temperature: {forecast.temp}
					</div>
					<div
						name="weather__feels"
						id="weather__feels"
						class="weather__forecast"
					>
						Feels like: {forecast.feels}
					</div>
				</div>
				<div class="weather__type-icon">
					<div name="weather__type" class="weather__type">
					{forecast.type}
					</div>
					<div name="weather__icon" class="weather__icon">
						<img
							class="lil__icon"
							src={forecast.icon}
							alt="Weather icon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Item;
