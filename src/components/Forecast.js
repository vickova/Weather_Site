import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import ForecastHome from './ForecastHome';
import ForecastAir from './ForecastAir';

const Forecast = ({weather, setWeather, forecast, setForecast}) => {
  return (
    <ForecastStyle>
      <Routes>
        <Route path='/' element={<ForecastHome weather={weather} setWeather={setWeather} forecast={forecast?.forecast.forecastday[0]} setForecast={setForecast}/>}/>
        <Route path='/forecastair' element={<ForecastAir/>}/>
      </Routes>
    </ForecastStyle>
  )
}

const ForecastStyle = styled.div`
  
`
export default Forecast