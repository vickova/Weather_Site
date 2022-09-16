import React, { useState } from 'react';
import styled from 'styled-components';
import Location from '../images/location.svg';
import SearchItem from './SearchItem'

const Search = ({search, weather, setLocation, mode})=>{
  const [changeSearch, setChangeSearch] = useState('');
  const FormHandler = (e)=>{
    e.preventDefault();
    if(changeSearch ===''){
      setChangeSearch((prev)=> prev);
    }
    else{
    setLocation(changeSearch.slice(0,1).toUpperCase()+changeSearch.slice(1,changeSearch.length));
    }
  }
  const SearchHandler = (e)=>{
    setChangeSearch(e.target.value);
  }
  return(
    <SearchStyle $mode={mode}>
        <h2>Pick location</h2>
        <p>Find the area or city that you want to know the detailed weather info at this time</p>
        <form>
            <input value={changeSearch} type="text" onChange={SearchHandler}/>
            <button onClick={FormHandler}><img src={Location} alt="location icon" /></button>
        </form>
        <div className='search-list'>
        {search?.map((item, i)=>{
          return(
            <SearchItem item={item} key={i}weather={weather}/>
          )
        })}
        </div>
    </SearchStyle>
  )
}

const SearchStyle =styled.div`
h2{
  font-size:2rem;
  color:${({$mode})=>$mode?'#020e42':'#e4e1e1'};
}
p{
  font-size:1.2rem;
}
  form{
    display:flex;
    align-items:center;
    gap:1rem;
    input{
      height:40px;
      width:50%;
      border-radius:10px;
      background: #cecccc;
      outline:none;
      font-size:1rem;
      padding:.5rem;
      font-weight:600;
    }
    button{
      padding:1rem 2rem;
      border-radius:10px;
      background: linear-gradient(gray, #9198e5);
      border:none;
      outline:none;
    }
  }
  .search-list{
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:1.5rem;
    margin:3rem 0;
  }
  @media screen and (min-width: 1200px){
    width:70%;
  }
  @media screen and (max-width: 380px){
    .search-list{
      grid-template-columns:1fr 1fr;
      display:block;
      margin-bottom:3rem;
    }
  }
`
export default Search