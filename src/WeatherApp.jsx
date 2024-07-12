import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo]=useState({});

    let updateInfo = (result)=>{
        setWeatherInfo(result);
    }

    return(
        <div>
            <h3 style={{textAlign:"center",color:"red",fontSize:"28px"}}>Weather App</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}