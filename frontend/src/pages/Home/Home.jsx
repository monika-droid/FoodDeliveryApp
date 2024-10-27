import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import DisplayFoodItem from '../../components/DisplayFoodItem/DisplayFoodItem';
const Home = () => {
  const [category, setCategory]= useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory }/>
        <DisplayFoodItem category ={category}/>
    </div>
  )
}

export default Home