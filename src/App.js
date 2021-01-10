import React from 'react';
import PropTypes from 'prop-types';

//동적 호출
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.EQfyKbJaFRSaXJvDxMr6mgHaHa%26pid%3DApi&f=1",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.o1b4qpMJCb-Z0yHM7vSgMwHaHa%26pid%3DApi&f=1",
    rating: 3.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.B3ddBez0ci1Fga_TDPmFhwHaEK%26pid%3DApi&f=1",
    rating: 2.5
  }
];

function Food({name, picture, rating}){
  return (
  <div>
  <h1>I like {name}</h1>
  <h4>{rating}/5.0</h4>
  <img src = {picture} alt = {name} />;
  </div>
  )
}

//각각의 요소들에 한 타입 확인
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

//함수를 통한 렌더링
function renderFood(dish){
  console.log(dish);
    return (<Food name = {dish.name} picture = {dish.image} rating = {dish.rating}/>)
}

function App() {
  return (
  <div>    
    {console.log(foodILike.map(renderFood))}    
    {foodILike.map(renderFood)}

    {foodILike.map(dish => (
      <Food key = 
      {dish.id}  
      name = {dish.name} 
      picture={dish.image}
      rating = {dish.rating}/>
    ))}
  </div>
  );
}

export default App;   