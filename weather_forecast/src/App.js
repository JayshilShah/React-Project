import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';
import axios from 'axios';

const API_KEY = "e313bfeb6ac7d1731937067dbe285242";

class App extends Component{

  constructor(props){
    super();
  }

  state = {
    city : undefined,
    temperature : undefined,
    humidity : undefined,
    weather : undefined,
    windSpeed : undefined,
    error : undefined
  }

  getWeather = (e) => {
    e.preventDefault(); 

    const city = e.target.city.value;
    const country = e.target.country.value; 
    
    if(city && country){
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
      .then(response => {    
        if(response.data.name === city){           
          this.setState({
            city : response.data.name,
            temperature : response.data.main.temp,
            humidity : response.data.main.humidity,
            weather : response.data.weather[0].description,
            windSpeed : response.data.wind.speed,
            error : undefined
          });
        }   
        else{
          this.setState({
            city : undefined,
            temperature : undefined,
            humidity : undefined,
            weather : undefined,
            windSpeed : undefined,
            error : 'Please Enter Proper City'
          });
        } 
      })
      .catch(error => {
        this.setState({
          city : undefined,
          temperature : undefined,
          humidity : undefined,
          weather : undefined,
          windSpeed : undefined,
          error : 'Please Enter Proper Data'
        });      
      }) 
    }
    else{
      this.setState({
        city : undefined,
        temperature : undefined,
        humidity : undefined,
        weather : undefined,
        windSpeed : undefined,
        error : 'Any Field should not be Empty'
      });
    }    
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Title />
          <Form weatherData={this.getWeather}/>
          <Weather 
            temperature = {this.state.temperature}
            city = {this.state.city}
            humidity = {this.state.humidity}
            weather = {this.state.weather}
            windSpeed = {this.state.windSpeed}
            error = {this.state.error}
          />
        </header>
      </div>
    );
  }
}

export default App;
