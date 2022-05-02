function Favourite({favourite, getWeather, removeFavourite}) {
	return (
		<div className="locations__item" >
			<label className="label__location" for="checkbox" onClick={()=>getWeather(favourite.city)}>
				{favourite.city}
			</label>
			<button className="delete__location__button" onClick={()=>removeFavourite(favourite.city)}>
				<svg
					className="delete__button"
					width="20"
					height="20"
					viewBox="0 0 17 16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<line
						y1="-0.5"
						x2="20.7803"
						y2="-0.5"
						transform="matrix(0.710506 0.703691 -0.65218 0.758064 1 1)"
						stroke="#FFFFFF"
					/>
					<line
						y1="-0.5"
						x2="20.8155"
						y2="-0.5"
						transform="matrix(0.693335 -0.720616 0.670126 0.742247 1.56787 16)"
						stroke="#FFFFFF"
					/>
				</svg>
			</button>
		</div>
	);
}

export default Favourite;
