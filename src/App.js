import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Aside from './components/Aside';
import Forecast from './components/Forecast';
import FullForecast from './components/FullForecast';
import Search from './components/Search';
import Settings from './components/Settings';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [search, setSearch] = useState(null);
  const [location, setLocation] = useState('Lagos');
  const [mode, setMode] = useState(false);

  const Key = process.env.REACT_APP_WEATHER_API;

  useEffect(()=>{
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${Key}&q=${location}&aqi=no`)
    .then((data)=>{
      setWeather(data.data);
      console.log(data.data)
    })
    .catch(err => console.log(err))
  },[Key, location])
  useEffect(()=>{
    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${Key}&q=${location}&days=3&aqi=no&alerts=no`)
    .then((data)=>{
      setForecast(data.data);
      console.log(data.data)
    })
    .catch(err => console.log(err))
  },[Key, weather?.current.condition.text, location])
  useEffect(()=>{
    axios.get(`https://api.weatherapi.com/v1/search.json?key=${Key}&q=${location}&aqi=no`)
    .then((data)=>{
      setSearch(data.data);
      console.log(data.data)
    })
    .catch(err => console.log(err))
  },[Key,location])

  return (
    <AppStyle $mode={mode}>
      <GlobalStyle/>
      <MainStyle>
        <div className='otherside'>
          <Routes>
              <Route path='/*' element={<Home $mode={mode} weather={weather} setWeather={setWeather} forecast={forecast?.forecast.forecastday[0]} setForecast={setForecast}/>}/>
              <Route path='/forecast' element={<Forecast/>} weather={weather} setWeather={setWeather} forecast={forecast?.forecast.forecastday[0]} setForecast={setForecast}/>
              <Route path='/fullforecast' element={<FullForecast mode={mode} weather={weather} setWeather={setWeather} forecast={forecast?.forecast.forecastday} setForecast={setForecast}/>}/>
              <Route path='/search' element={<Search mode={mode} weather={weather} setLocation={setLocation} search={search} setWeather={setWeather} forecast={forecast?.forecast.forecastday[0]} setForecast={setForecast}/>}/>
              <Route path='/settings' element={<Settings weather={weather} setLocation={setLocation} search={search} setWeather={setWeather} forecast={forecast?.forecast.forecastday[0]} setForecast={setForecast}/>}/>
          </Routes>
        </div>
        <Aside mode={mode} setMode={setMode}/>
      </MainStyle>
    </AppStyle>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: 'Open Sans', sans-serif;
  }
`
const AppStyle = styled.div`
  background-color:${({$mode})=>$mode?'#FAFAF0':'#020e42'};
  display:flex;
  justify-content:center;
  min-height:100vh;
  p{
    color:${({$mode})=>$mode?'#020e42':'#e4e1e1'}
  }
  h2, h3, h4{
    color:${({$mode})=>$mode?'#020e42':'#e4e1e1'}
  }
  .otherside{
    margin:0 6rem;
  }
  @media screen and (min-width: 1000px){
    .otherside{
      height:100%;
      width:75%
    }
  }
  @media screen and (max-width: 380px){
    width:100%;
    .otherside{
      margin:0 1rem;
    }
  }
`
const MainStyle = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:row-reverse;
  gap:1rem;
  width:100%;
  @media screen and (max-width: 980px){
    display:block;
  }
`

export default App;
