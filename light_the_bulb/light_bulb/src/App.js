import React from 'react';
import './App.css';
import bulbOff from '../src/components/bulb-off.png';
import bulbOn from '../src/components/bulb-on.png';

function App() {
  return (
    <>
      <div id="bulb" className="bulb">
        <img
          id="bulb-off"
          className="bulb-off"
          src={bulbOff} // Use the imported image variable
          alt=""
        />
        <img
          id="bulb-on"
          className="bulb-on"
          src={bulbOn} // Use the imported image variable
          alt=""
        />
        <button className="button" id="button">
          {" "}
          Turn On{" "}
        </button>
      </div>
    </>
  );
}

export default App;

const bulboff = document.getElementById('bulb-off');
const bulbon = document.getElementById('bulb-on');
const button = document.getElementById('button');


function turnOn() {
    button.textContent = 'Turn Off';
    bulboff.style.display = 'none';
    bulbon.style.display = 'block';
}

function turnOff() {
    button.textContent = 'Turn On';
    bulboff.style.display = 'block';
    bulbon.style.display = 'none';
}

button.addEventListener('click', function() {
    if (button.textContent == 'Turn On') {
        turnOn();
    } else {
        turnOff();
    }
})