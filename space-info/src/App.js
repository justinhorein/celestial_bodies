
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    checkData();
  }, []);
  
  const [planet, setPlanet] = useState('planet');

  const handleSelect = (data) => {
    let planet = data.target.value;
    let url = "http://localhost:5000?" + planet;

    axios({
      method: "get",
      url: url,
      })
      .then(function(res) {
        let str = res.data;
        setPlanet(str);
      });
  }

  return (
    <div className="App">

      <select onChange={handleSelect}>
        <option value="terre">Earth</option>
        <option value="lune">Moon</option>
        <option value="soleil">Sun</option>
      </select>

      <div>{planet}</div>

      {/* <div>Name: {body.englishName}</div>
      <div>Gravity: {body.gravity} m/s^2</div>
      <div>Radius (equatorial): {(body.equaRadius * 2 * Math.PI).toFixed(2)} km</div>
      <div>Mass: {body.mass.massValue} x 10^{body.mass.massExponent} kg</div>
      <div>Volume: {body.vol.volValue} x 10^{body.vol.volExponent} km^3</div>
      <div>Density: {body.density} g/cm^3</div>
      <div>Axial Tilt: {body.axialTilt}° to orbit plane</div> */}
    </div>
  );
}

function checkData() {
  // let data = localStorage.getItem("planets");
  // data = JSON.parse(data);
  // console.log(data);
  console.log("runnninnin");
  let data = {};

  // axios({
  //   method: "get",
  //   url: "http://localhost:5000/get?soleil"
  // })
  // .then(function({res}) {
  //   data = res.data;
  // });


    axios({
      method: "get",
      url: "https://api.le-systeme-solaire.net/rest/bodies",
    })
    .then(function(res) {
      data = res.data;
    });


    axios.post("http://localhost:5000/post", data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }


export default App;
