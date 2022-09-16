import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Umbrella from '../images/umbrella.jpg'

const Settings = () => {
  return (
    <SettingsStyle>
      <img src={Umbrella} alt="umbrella" />
      <button><Link to='/'>Reset</Link></button>
    </SettingsStyle>
  )
}

const SettingsStyle = styled.div`
margin:1rem;
img{
  width:100%;
}
button{
      padding:1rem 2rem;
      border-radius:10px;
      background: linear-gradient(gray, #9198e5);
      border:none;
      outline:none;
      a{
        text-decoration:none;
        color:black;
      }
    }
`
export default Settings;