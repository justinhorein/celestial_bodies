
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const body = fetchData();
  const [value, setValue] = useState('planet');

  const handleSelect = (data) => {
    // setValue(planet.target.value);
    let planet = data.target.value;
    let url = "http://localhost:5000?" + planet;

    axios({
      method: "get",
      url: url,
      })
      .then(function(res) {
        let str = res.data;
        setValue(str);
      });
  }

  return (
    <div className="App">

      <select onChange={handleSelect}>
        <option value="terre">Earth</option>
        <option value="lune">Moon</option>
        <option value="soleil">Sun</option>
      </select>

      <div>{value}</div>

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

function fetchData() {
  let data = localStorage.getItem("planets");
  data = JSON.parse(data);
  // console.log(data);

  if (!data) {
    axios({
    method: "get",
    url: "https://api.le-systeme-solaire.net/rest/bodies",
    })
    .then(function({res}) {
      let str = JSON.stringify(res.data);
      // localStorage.setItem("planets", str);
      // data = localStorage.getItem("planets");
      // data = JSON.parse(data);
      // Write data to Mongodb
      
    });
  }

  return data;
}

export default App;
