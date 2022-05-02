function InfoDetails({infoDetails}) {
	return (
		<div id="info__details" className={infoDetails.active ? "info__details target__block active" :"info__details target__block"}>
			<div className="now__city__details margintop">{infoDetails.city}</div>
			<div className="weather__details__list">
				<div
					name="weather__temp"
					id="weather__temp"
					className="weather__temp weather__item"
				>
					Temperature: {infoDetails.temperature}
				</div>
				<div
					name="weather__feels"
					id="weather__feels" 
					className="weather__feels weather__item"
				>
					Feels like: {infoDetails.feelsLike}
				</div>
				<div id="weather__clouds" className="weather__clouds weather__item">
					Weather: {infoDetails.weather}
				</div>
				<div
					id="weather__sunrise"
					className="weather__sunrise weather__item"
				>
					Sunrise: {infoDetails.sunrise}
				</div>
				<div id="weather__sunset" className="weather__sunset weather__item">
					Sunset: {infoDetails.sunset}
				</div>
			</div>
		</div>
	);
}

export default InfoDetails;
