function InfoNow({infoNow, favouriteHandler}) {
	return (
		<div id="info__now" className={infoNow.active ? "info__now target__block active" : "info__now target__block"}>
			<div
				name="weather__temp"
				className="now__temperature"
				id="now__temperature"
			>
				{infoNow.temperature}
			</div>
			<div className="now__icon" id="now__icon">
				<img className="now__weather__icon" src={infoNow.icon} alt=""/> 
			</div>
			<div className="now__city__favorite">
				<div className="now__city" id="now__city">
					{infoNow.city}
				</div>
				<button className="now__favorite" id="now__favorite" onClick={favouriteHandler}>
					<svg
						className="now__favorite__icon"
						width="24"
						height="25"
						viewBox="0 0 24 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
							stroke="white"
							stroke-width="2"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default InfoNow;
