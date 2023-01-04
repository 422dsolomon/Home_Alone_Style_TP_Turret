/* 
Toilet Paper Turret Motor Control

  Authors: Daniel Solomon, Zhuoyue Lyu, Caine Ardayfio

  Date: 11/30/22

  Description: Run in modular things while running index.html, in order to allow for control of the motor to aim the toilet paper turret
*/

//Setting step size
motorA.setCScale(0.55)
motorA.setSPU(20)
    
let direction = -1;
let stopState = true;

// Continuosly reading potentiometer, when it is less then .5 then check second potentiometer for directions
// if greater than .5 use facial recognition, and if potentiometer 0 is turned to 1 and potentionmeter 1 is turned to 0 
// the motor holding the marbles is opened

loop( async () => {
    const data = await Promise.all([
      potA.readPotentiometer(0),
      potA.readPotentiometer(1)
    ]);

  if (data[0] < .5){
    if (data[1] < .5){
      await motorA.relative(1);
    }
    else{
      await motorA.relative(-1);
    }
  } else{
    if (stopState) await motorA.relative(direction);
  }

  if (data[0] > 0.95 && data[1] < .05){
    console.log("running the breadboard");
    servoA.writeMicroseconds((2**12)/1.8); // state open
    // await delay(1000)
    // servoA.writeMicroseconds((2**12)/3.2); // state closed
  } else {
    servoA.writeMicroseconds((2**12)/3.2); // state closed
  }

}, 30);

// creating a web app that will be running, with buttons to control the direction of the motor
const div = document.createElement("div");

div.style = `
  padding: 10px;
  background: lightblue;
  color: black;
  height: 100%;
`
// Setting the HTML that will show on the web app
div.innerHTML = `
<h1>Toilet Paper Throwing</h1>
<h1>Stepper Motor Buttons</h1>
<button class="direction">right</button>
<button class="pause-play">stop</button>
<br>
<button class="motor-switch">on</button>
<br>
<button class="marble-switch">on</button>
`
// Making the logic for the web app
const directionButton = div.querySelector(".direction");
const pausePlay = div.querySelector(".pause-play");
const motorSwitch = div.querySelector(".motor-switch");
const marbleSwitch = div.querySelector(".marble-switch");
let counter_Motor = 1;
let counter_Marble = 1;

//Buttons listening for a click
pausePlay.addEventListener("click", () => {
  stopState = !stopState;
  pausePlay.innerText = stopState ? "stop" : "start";
})

directionButton.addEventListener("click", () => {
  direction *= -1;
  directionButton.innerText = direction === -1 ? "left" : "right";
})

motorSwitch.addEventListener("click", () => {
  breadBoard.setpin(counter_Motor % 2);
  counter_Motor++;
})

marbleSwitch.addEventListener("click", () => {
  if (counter_Marble % 2 == 1) {
    servoA.writeMicroseconds((2**12)/1.8); // state open
    counter_Marble++;
  } else {
    servoA.writeMicroseconds((2**12)/3.2); // state closed
    counter_Marble++;
  }
})

buttonA.onButtonStateChange((state) => {
  console.log("check button state");
  console.log(state);
  if (!state) {
    breadBoard.setpin(1);
  } else {
    breadBoard.setpin(0);
  }
})

render(div)