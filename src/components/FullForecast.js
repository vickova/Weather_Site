import React from 'react';
import styled from 'styled-components';

const FullForecast = ({forecast, weather, setForecast, setWeather, mode}) => {
  const date = new Date(weather?.location.localtime.slice(0,-5));
  return (
    <FullForecastStyle $mode={mode}>
      <h2>Forecast Report</h2>
      <div className='forecast-cover'>
            <div className='flex-forecast'>
                <p>Today</p>
                <p>{String(date).slice(0,-42)}</p>
            </div>
            <div className='forecast-pin'>
              <div className='first-sec'>
            <div className='forecast-show selected'>
                <img src={forecast?forecast[0].hour[20].condition.icon:''} alt="forecast-icon" />
                <div>
                <h3>{forecast?forecast[0].hour[20].time.slice(-5):''}</h3>
                <p>{forecast?forecast[0].hour[20].temp_c:''} C</p>
                </div>
            </div>
            <div className='forecast-show'>
                <img src={forecast?forecast[0].hour[21].condition.icon:''} alt="forecast-icon" />
                <div>
                <h3 style={{color:'#e4e1e1'}}>{forecast?forecast[0].hour[21].time.slice(-5):''}</h3>
                <p style={{color:'#e4e1e1'}}>{forecast?forecast[0].hour[21].temp_c:''} C</p>
                </div>
            </div>
            </div>
            <div className='forecast-show last'>
                <img src={forecast?forecast[0].hour[22].condition.icon:''} alt="forecast-icon" />
                <div>
                <h3 style={{color:'#e4e1e1'}}>{forecast?forecast[0].hour[22].time.slice(-5):''}</h3>
                <p style={{color:'#e4e1e1'}}>{forecast?forecast[0].hour[22].temp_c:''} C</p>
                </div>
            </div>
            </div>
        </div>
        <div className='fullforecast-cover'>
          <p className='next'>Next Forecast</p>
          <div className='fullforecast-inner'>
            <div className={`fullforecast ${mode?'blue-back':''}`}>
              <div className='dates'>
                <h3>{forecast?String(new Date(forecast[0].date.split('-'))).slice(0, 3):''}</h3>
                <p style={{color:'#e4e1e1'}}>{forecast?String(new Date(forecast[0].date.split('-'))).slice(4, -42):''}</p>
              </div>
              <h3 className='temp'>{forecast?forecast[0].day.avgtemp_c:''} C</h3>
              <img src={forecast?forecast[0].day.condition.icon:''} alt="weather-icon" />
            </div>
            <div className={`fullforecast ${mode?'blue-back':''}`}>
              <div className='dates'>
                <h3>{forecast?String(new Date(forecast[1].date.split('-'))).slice(0, 3):''}</h3>
                <p style={{color:'#e4e1e1'}}>{forecast?String(new Date(forecast[1].date.split('-'))).slice(4, -42):''}</p>
              </div>
              <h3 className='temp'>{forecast?forecast[1].day.avgtemp_c:''} C</h3>
              <img src={forecast?forecast[1].day.condition.icon:''} alt="weather-icon" />
            </div>
            <div className={`fullforecast ${mode?'blue-back':''}`}>
              <div className='dates'>
                <h3>{forecast?String(new Date(forecast[2].date.split('-'))).slice(0, 3):''}</h3>
                <p style={{color:'#e4e1e1'}}>{forecast?String(new Date(forecast[2].date.split('-'))).slice(4, -42):''}</p>
              </div>
              <h3 className='temp'>{forecast?forecast[2].day.avgtemp_c:''} C</h3>
              <img src={forecast?forecast[2].day.condition.icon:''} alt="weather-icon" />
            </div>
          </div>
        </div>
    </FullForecastStyle>
  )
}
const FullForecastStyle = styled.div`
  h2{
    text-align:center;
    font-size:3rem;
    color:${({$mode})=>$mode?'#020e42':'#e4e1e1'};
  }
  .forecast-cover{
        .flex-forecast{
            display:flex;
            justify-content:space-around;
            p:last-child{
                color:#5a94eb;
                text-decoration:none;
            }
        }
        .forecast-pin{
            display:flex;
            justify-content:center;
            gap:4rem;
            .forecast-show{
                display:flex;
                align-items:center;
                background-color:#020f4b;
                color: #e9e9e9;
                font-size:1rem;
                padding:0 2rem;
                border-radius:5px;
                border:none;
                img{
                    height:50px;
                    width:50px;
                }
                h3{
                  font-size:1.8rem;
                }
                p{
                  font-size:1.2rem;
                }
                h3,p{
                  color:${({$mode})=>$mode?'#020e42':'#e4e1e1'};
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
    .fullforecast-cover{
      margin-top:8rem;
      .next{
        font-size:1.5rem;
        margin:0;
      }
      .fullforecast-inner{
        padding-bottom: 2rem;
        margin-bottom:2rem;
        .fullforecast{
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:5rem;
          img{
            width:100px;
            height:100px;
          }
          .dates{
            h3{
              font-size:1.8rem;
              color:#FFD;
            }
            p{
              font-size:1.2rem;
            }
            h3, p{
              margin:0;
            }
          }
          .temp{
            font-size:3.2rem;
            margin:0;
            color:#FFF;
          }
        }
        .blue-back{
          color:gray;
          background-color:#020f4b;
          padding:.5rem 1rem;
          border-radius:10px;
          margin:.5rem;
        }
      }
    }
    @media screen and (max-width: 380px){
      h2{
        font-size:2rem;
      }
        .forecast-cover{
            .forecast-pin{
                flex-direction:column;
                align-items:center;
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
        .fullforecast-cover{
          .fullforecast-inner{
            .fullforecast{
              gap:1.5rem;
            .temp{
              font-size:1.5rem;
            }
            .dates{
              h3{
                font-size:1.5rem;
              }
              p{
                font-size:.8rem;
              }
            }
            }
          }
        }
      }
`
export default FullForecast