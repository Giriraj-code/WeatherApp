import React, { useState } from 'react';
import SearchBox from './searchBox';
import WeatherInfo from './InfoBox';

export default function Weather_App() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 38.18,
        humidity: 29,
        max_temperature: 37.44, 
        min_temperature: 37.44, 
        pressure: 1001,
        sea_level: 1001,
        temperature: 37.44, 
        weather: "clear sky"
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Weather</h1>
            <SearchBox updateInfo={updateInfo} />
            <WeatherInfo Info={weatherInfo} />
        </div>
    );
}
