import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const Hot_Url = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=612x612&w=0&k=20&c=8DxY8mLBr1ogKBwHxxC0bd6lv8tlBXytISdAjdPBhTE=";
    const Cold_url = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const Rainy_url = "https://media.istockphoto.com/id/1162332729/photo/blue-umbrella-under-heavy-rain-against-nature-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=FuYBo3IIFocQ08qBo4uY-M4tV0hGCLakbilX1l_f1ME=";
    
    return(
        <div className='infobox'>
            
            <div className="card">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?Rainy_url:info.temp>15?Hot_Url:Cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  {info.humidity>80?<ThunderstormIcon/>:info.temp>15?< WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature:{info.temp}</p>
          <p>Humidity:{info.humidity}</p>
          <p>Min Temp:{info.tempMin}</p>
          <p>Max Temp:{info.tempMax}</p>
          <p>Weather can be described as <i>{info.weather}</i> and feelslike {info.feelslike} &deg;c</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}