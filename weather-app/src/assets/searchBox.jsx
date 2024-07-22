import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        const newInfo = await weatherReport(city);
        updateInfo(newInfo);
    };

    const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "9162880fe587e3ea3697a4040930ea8c";

    const weatherReport = async (city) => {
        try {
            const response = await fetch(`${WEATHER_API}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            const result = {
                city: city,
                temperature: jsonResponse.main.temp,
                pressure: jsonResponse.main.pressure,
                humidity: jsonResponse.main.humidity,
                max_temperature: jsonResponse.main.temp_max,
                min_temperature: jsonResponse.main.temp_min,
                sea_level: jsonResponse.main.sea_level,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            return null;
        }
    };

    return (
        <div>
            <h3>Search For The Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField onChange={handleChange} id="city" label="City Name" variant="outlined" required value={city} style={{backgroundColor:"gray",borderRadius:"5px"}} /><br />
                <Button type='submit' style={{ marginTop: '40px'}} variant="contained">Search</Button>
            </form>
        </div>
    );
}
