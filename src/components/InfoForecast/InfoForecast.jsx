import Item from "./Item";

function InfoForecast({infoForecast, forecastItems}) {
	return (
		<div id="info__forecast" className={infoForecast.active ? "info__forecast target__block active" :"info__forecast target__block"}>
			<div class="now__city__forecast margintop">{infoForecast.city}</div>
			<div id="forecast__list" class="forecast__list">
				{forecastItems.map(forecast => {
					return <Item forecast={forecast}/>
				})}
			</div>
		</div>
	);
}

export default InfoForecast;
