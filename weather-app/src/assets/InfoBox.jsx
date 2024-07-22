import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function WeatherInfo({ Info }) {

    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.jpg?s=2048x2048&w=is&k=20&c=VP4sgIBQaIcgxMDi-GrF0s2ASAHHymy3SHrcI2Gd6vQ=";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1709461951105-294d438afbe8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="Info-Box">
            <h3>Weather Info - {Info.weather}</h3>
            <div className="card-Container">
                <Card sx={{ maxWidth: 1000, border: "1px solid black", borderRadius: "5px" }}>
                    <CardMedia
                        sx={{ height: 150 }}
                        image={
                            Info.humidity > 80 ? RAIN_URL
                                : Info.temperature > 15 ? HOT_URL
                                    : COLD_URL
                        }
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Info.city}
                        </Typography>
                        <div style={{backgroundColor:"lightGray" , borderRadius:"5px" }} >
                            <div>Temperature: {Info.temperature}&deg;C</div>
                            <div>Feels-Like: {Info.feels_like}</div>
                            <div>Humidity: {Info.humidity}</div>
                            <div>Maximum Temperature: {Info.max_temperature}&deg;C</div>
                            <div>Minimum Temperature: {Info.min_temperature}&deg;C</div>
                            <div>Pressure: {Info.pressure}</div>
                            <div>Sea Level: {Info.sea_level}</div>
                            <div>Weather: {Info.weather}</div>
                        </div>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button> */}
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}




