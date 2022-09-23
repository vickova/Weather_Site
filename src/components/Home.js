import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import ForecastHome from './ForecastHome';
import ForecastAir from './ForecastAir';


const Home = ({weather, setWeather, forecast, setForecast, mode}) => {
  const date = new Date(weather?.location.localtime.slice(0,-5));
  const {pathname} = useLocation();
  return (
    <HomeStyle $mode={mode}>
      <div className='heading'>
        <h2>{weather?.location.name}, {weather?.location.country}.</h2>
        <h3>{String(date).slice(0,-42)}</h3>
        <h4>{weather?.current.temp_c} C</h4>
        <div className='buttons'>
          <button className={pathname==='/'?'selected':''}><Link to='/'>Forecast</Link></button>
          <button className={pathname==='/air'?'selected':''}><Link to='/air'>Air Quality</Link></button>
        </div>
        <img src={weather?.current.condition.icon} alt="weather-icon" />
        <p>{weather?.current.condition.text}</p>
      </div>
      <Routes>
        <Route path='/'   element={<ForecastHome weather={weather} setWeather={setWeather} forecast={forecast} setForecast={setForecast}/>}/>
        <Route path='/air' element={<ForecastAir weather={weather} setWeather={setWeather}/>}/>
      </Routes>
    </HomeStyle>
  )
}
const HomeStyle = styled.div`
  text-align:center;
  color:#FFF;
  padding:2rem;
  .heading{
    h2{
      font-size:3rem;
      margin:0;
    }
    p{
      font-size:1.2rem;
      margin-top:0;
    }
    h3{
      font-size:1.5rem;
    }
    
    img{
      width:200px;
      height:200px;
    }
    .buttons{
      display:flex;
      justify-content:center;
      gap:1rem;
      button{
        padding: 1rem 1.5rem;
        border-radius:5px;
        border:none;
        background-color:#020f4b;
        cursor:pointer;
        font-size:1.2rem;
        a{
        color: #e9e9e9;
        font-size:1rem;
        text-decoration:none;
        }
      }
      .selected{
        background-color: #5a94eb;
      }
    }
  }
  @media screen and (max-width: 380px){
    padding:1rem 0;
    .heading{
      h2{
        font-size:2rem;
      }
      h3{
        font-size:1.5rem;
      }
    }
  }
`
export default Home