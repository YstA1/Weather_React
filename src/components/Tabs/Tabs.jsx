function Tabs({Tabs, setNow, setDetails, setForecast}) {


	return (
		<nav class="info__tabs">
			<button className={Tabs.infoNow.active ? "tabs_item active" : "tabs_item"} onClick={()=> {
				setNow(true)
				setDetails(false)
				setForecast(false)
				}}>
				Now
			</button>
			<button className={Tabs.infoDetails.active ? "tabs_item active" : "tabs_item"} onClick={()=> {
				setNow(false)
				setDetails(true)
				setForecast(false)
				}}>
				Details
			</button>
			<button className={Tabs.infoForecast.active ? "tabs_item active" : "tabs_item"} onClick={()=> {
				setNow(false)
				setDetails(false)
				setForecast(true)
				}}>
				Forecast
			</button>
		</nav>
	);
}

export default Tabs;
