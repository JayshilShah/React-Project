import React from 'react'
import './Weather.css'

const Weather = (props) => {
    return(
        <div>
            {props.city && <p>City : {props.city}</p>}
            {props.weather && <p>Weather : {props.weather}</p>}
            {props.temperature && <p>Temperature : {props.temperature} Degree Celcius</p>}
            {props.humidity && <p>Humidity : {props.humidity} %</p>}
            {props.windSpeed && <p>WindSpeed : {props.windSpeed} </p>}
            {props.error && <p className='error'>{props.error}</p>}
        </div>
    );
}

export default Weather;