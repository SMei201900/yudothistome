import axios from "axios";

export default function Axiosatt() {
	function one(response) {
		alert(`weather is${response.data.main.temp}`);
	}
	let apiKey = "094780c710fa4efd669f0df8c3991927";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(one);
}
