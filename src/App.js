import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Heading from './Heading';
import Card from './Cards';
import Sdata from './Sdata';


function App() {
  return (
  <>
  <Heading />

  {
   Sdata.map((val)=>{
    return (
    <Card 
      key={val.id}
      imgsrc={val.imgsrc} 
      title= {val.title}
      sname={val.sname}
      link={val.link} 
    />
  );}) }
  </>
  );
}

export default App;
