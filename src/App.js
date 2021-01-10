import React from 'react';

function Food({name, picture}){
  return (
  <div>
  <h1>I like {name}</h1>
  <img src = {picture} />;
  </div>
  )
}

//동적 호출
const foodILike = [
  {
    name: "Kimchi",
    image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EQfyKbJaFRSaXJvDxMr6mgHaHa%26pid%3DApi&f=1"
  },
  {
    name: "Samgyeopsal",
    image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.o1b4qpMJCb-Z0yHM7vSgMwHaHa%26pid%3DApi&f=1"
  },
  {
    name: "Bibimbap",
    image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.B3ddBez0ci1Fga_TDPmFhwHaEK%26pid%3DApi&f=1"
  }
];

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food name = {dish.name} picture = {dish.image} /> 
    ))} 
  </div>
  );
}

export default App;   