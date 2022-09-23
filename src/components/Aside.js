import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeIcon from '../images/house.svg';
import SearchIcon from '../images/search.svg';
import SettingIcon from '../images/settings.svg';
import ForecastIcon from '../images/lightning.svg';
import LightMode from '../images/lightmode.svg';
import DarkMode from '../images/darkmode.svg';

const Aside = ({mode, setMode}) => {
  return (
    <AsideStyle $mode={mode}>
        <div className='asideicons'>
        <Link to='/'>
            <img src={HomeIcon} alt='home'/>
            <p>Home</p>
        </Link>
        </div>
        <div className='asideicons'>
            <Link to='/search'>
            <img src={SearchIcon} alt='search'/>
            <p>Search</p>
            </Link>
        </div>
        <div className='asideicons'>
            <img onClick={()=>setMode(!mode)} style={{width:'25px', height:'25px'}} src={mode?DarkMode:LightMode} alt="mode" />
        </div>
        <div className='asideicons'>
            <Link to='/fullforecast'>
            <img src={ForecastIcon} alt='forecast'/>
            <p>Forecast</p>
            </Link>
        </div>
        <div className='asideicons'>
            <Link to='/settings'>
            <img src={SettingIcon} alt='settings'/>
            <p>Setting</p>
            </Link>
        </div>
    </AsideStyle>
  )
}

const AsideStyle = styled.div`
padding:2rem;
background-color:${({$mode})=>$mode?'#FAFAF0':'#020c38'};
    .asideicons{
        a{
        display:flex;
        gap:1.5rem;
        align-items:center;
        margin:1rem 0;
        text-decoration:none;
        img{
            width:25px;
            height:25px;
        }
        p{
            font-size:1.5rem;
        }
    }
    }
    @media screen and (max-width: 980px){
        display:flex;
        justify-content:space-between;
        align-items:center;
        height:fit-content;
        overflow:hidden;
        .asideicons{
            p{
                display:none;
            }
        }
    }
    @media screen and (max-width: 380px){
        padding:0 1rem;
        bottom:0;
        left:0;
        position: fixed;
        clear:both;
        width:92%;
    }
`
export default Aside