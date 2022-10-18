import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ForecastHome = ({weather, setWeather, forecast, setForecast, mode}) => {
  return (
    <ForecastHomeStyle $mode={mode}>
        <div className='main-values'>
            <div className='sect'>
                <p>Temp</p>
                <h4>{weather?.current.temp_c} C</h4>
            </div>
            <div className='sect'>
                <p>Wind</p>
                <h4>{weather?.current.wind_kph} km/h</h4>
            </div>
            <div className='sect'>
                <p>Humidity</p>
                <h4>{weather?.current.humidity}%</h4>
            </div>
        </div>
        <div className='forecast-cover'>
            <div className='flex-forecast'>
                <p>Today</p>
                <p><Link to='/fullforecast'>View full report</Link></p>
            </div>
            <div className='forecast-pin'>
            <div className='first-sec'>
            <div className='forecast-show selected'>
                <img src={forecast?.hour[20].condition.icon} alt="forecast-icon" />
                <div>
                <h3>{forecast?.hour[20].time.slice(-5)}</h3>
                <p>{forecast?.hour[20].temp_c} C</p>
                
                </div>
            </div>
            <div className='forecast-show'>
                <img src={forecast?.hour[21].condition.icon} alt="forecast-icon" />
                <div>
                <h3>{forecast?.hour[21].time.slice(-5)}</h3>
                <p>{forecast?.hour[21].temp_c} C</p>
                </div>
            </div>
            </div>
            <div className='forecast-show last'>
                <img src={forecast?.hour[22].condition.icon} alt="forecast-icon" />
                <div>
                <h3>{forecast?.hour[22].time.slice(-5)}</h3>
                <p>{forecast?.hour[22].temp_c} C</p>
                </div>
            </div>
            </div>
        </div>
      </ForecastHomeStyle>
  )
}

const ForecastHomeStyle = styled.div`
    .main-values{
        display:flex;
        justify-content:center;
        gap:2rem;
        color:#FFF;
        .sect{
            text-align:center;
            p{
                font-size:1.5rem;
            }
            h4{
                font-size:1.2rem;
            }
            p{
                color:${({$mode})=>$mode?'#020e42, ':'#e4e1e1'};
            }
            h2, h3, h4{
                color:${({$mode})=>$mode?'#020e42':'#e4e1e1'};
            }
            h4, p{
                margin:1rem 0;
            }
        }
    }
    .forecast-cover{
        .flex-forecast{
            display:flex;
            justify-content:space-around;
            p:last-child{
                a{
                color:#5a94eb;
                text-decoration:none;
                }
            }
        }
        .forecast-pin{
            display:flex;
            justify-content:center;
            gap:1rem;
            .forecast-show{
                display:flex;
                align-items:center;
                background-color:#020f4b;
                color: #e9e9e9;
                font-size:1rem;
                padding:0 2rem;
                border-radius:5px;
                border:none;
                h3{
                  font-size:1.8rem;
                }
                p{
                  font-size:1.2rem;
                }
                h3, p{
                    margin:1rem 0;
                    color:${({$mode})=>$mode?'#020e42':'#e4e1e1'}
                }
                img{
                    height:50px;
                    width:50px;
                }
            }
            .first-sec{
                display:flex;
                gap:3rem;
            }
            .selected{
                background-color: #5a94eb;
            }
        }
    }
    @media screen and (max-width: 380px){
        .forecast-cover{
            .flex-forecast{
                justify-content:space-between;
                p{
                    font-size:.8rem;
                }
            }
            .forecast-pin{
                flex-direction:column;
                align-items:center;
                margin-bottom:2rem;
                .forecast-show{
                  padding:1rem;
                  h3{
                    font-size:1.2rem;
                    margin:0;
                  }
                  p{
                    font-size:.8rem;
                    margin:0;
                  }
                }
                .last{
                    width: 30%;
                    justify-content:center;
                }
            }
        }
        .main-values{
            margin:1rem 0;
            .sect{
                h4{
                    font-size:.8rem;
                    margin:0;
                }
                p{
                    font-size:1rem;
                }
            }
        }
    }
`
export default ForecastHome