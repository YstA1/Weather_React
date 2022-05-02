import Favourite from "./Favourite";

function Locations({favouriteCities, getWeather, removeFavourite}) {
	return (
		<div className="locations">
			<div class="locations__added">
				<span className="added__text">Favourite Locations:</span>
			</div>
			<div className="locations__list" id="locations__list">
				{favouriteCities.map(favourite => {
					return (
						<Favourite 
							favourite={favourite} 
							getWeather={getWeather} 
							removeFavourite={removeFavourite}
						/>)
				})}
			</div>
		</div>
	);
}

export default Locations;
