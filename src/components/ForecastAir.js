import React from 'react';
import styled from 'styled-components';

const ForecastAir = ({weather}) => {
  return (
    <ForecastAirStyle>
      <div>
        <h3>AIR QUALITY</h3>
        <p>Degree of the wind: {weather?.current.wind_degree} degree</p>
        <p>Direction of the wind: {weather?.current.wind_dir}</p>
        <p>The speed of the wind in kilometer per hour: {weather?.current.wind_kph}km/h</p>
        <p>The speedof the wind in Meter per hour: {weather?.current.wind_mph}m/h</p>
      </div>
    </ForecastAirStyle>
  )
}

const ForecastAirStyle = styled.div`
  padding:1rem;
  margin: 2rem;
  box-shadow: -7px 6px 28px 14px rgba(74, 89, 104, 0.15);
  border-radius: 5px;
  p{
    text-align:left;
  }
`
export default ForecastAir