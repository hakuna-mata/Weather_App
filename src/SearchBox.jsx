import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let[exists,setExists]=useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f6d0b52e6c1d3e7d4d670db0ce7f7ff4";
    
    let getWeatherInfo = async()=>{
        try{
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse=await response.json();
       console.log(jsonResponse);
       let result = {
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelslike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
       }
       console.log(result);
       return result;
        }catch(err){
            throw err;
        }
    } 

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async(event)=>{
        try{
            event.preventDefault();
            setCity("");
            let info = await getWeatherInfo();
            updateInfo(info);
            setExists(false);
        }catch(err){
            setExists(true);
        }
    }

    return(
        <div className='sb'>
            <form onSubmit={handleSubmit}>
            
            <TextField id="city" label="Enter the City" value={city} variant="outlined" onChange={handleChange}  required />
             <br/><br/>
             <Button variant="contained" type="submit" endIcon={<SendIcon />} >Search</Button>
             
             {exists && <p style={{color:"red"}}>No such place exists in our API call</p> }

            </form>
        </div>
    )
}