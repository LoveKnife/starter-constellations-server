const axios = require("axios");

const url = "http://localhost:5000/constellations";
axios
  .get(url)
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data.filter((idx)=>idx.starsWithPlanets<10));
  })
  .catch((error) => {
    console.log(error.message);
  });

function getConstellationsByQuadrant(quadrant){
    axios
    .get(url)
    .then((response)=>{
      console.log(response.data.filter((idx)=>idx.quadrant === quadrant))
    })
}

getConstellationsByQuadrant("SQ1")