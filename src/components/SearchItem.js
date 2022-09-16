import React from 'react';
import styled from 'styled-components';

const SearchItem = ({item, weather}) => {
  return (
    <SearchItemStyle>
      <div>
      <p style={{color:'#e4e1e1'}}>{item.name},<br/> {item.region}</p>
      <h3 style={{color:'#e4e1e1'}}>{item.country}</h3>
      </div>
      <div>
        <img src={weather?.current.condition.icon} alt="icon" />
      </div>
    </SearchItemStyle>
  )
}

const SearchItemStyle = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
color:gray;
background-color:#020f4b;
padding:.5rem 1rem;
border-radius:10px;
h3{
  margin:0;
}
@media screen and (max-width: 380px){
  gap:1rem;
  margin:.5rem 0;
}
`
export default SearchItem