const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  zoom: .5,
  rotate: {x:-.125, y:-0},
 
});

// Initials
var letters = new Zdog.Group({
  addTo:illo,
  visible: true,
  updateSort: true,
})

const I = new Zdog.Shape({
  addTo:letters,
  path: [
  {x: -40, y: -40},
  {x: 40, y: -40},
  {x: 40, y: -10},
  {x: 15, y: -10},
  {x: 15, y: 10},
  {x: 40, y: 10},
  {x: 40, y: 40},
  {x: -40, y: 40},
  {x: -40, y: 10},
  {x: -15, y: 10},
  {x: -15, y: -10},
  {x: -40, y: -10},  
  ],      
  fill: false,
  color: 'white',
  translate: {y:-55,z:40},
  visible: true,
  stroke: 3,
  })
const M = new Zdog.Shape({
  addTo:letters,
  path: [
    {x: -40, y: -40},
    {x: 00, y: -10},
    {x: 40, y:-40},
    {x: 40, y: 40},
    {x: -40, y:40},
  ],
  fill: false,
  color: 'white',
  rotate: {y: Zdog.TAU/4},
  translate: {y:-55,x: 40},
  visible: true,
  stroke: 3,
})
const D = new Zdog.Shape({
  addTo:letters,
  path: [
  {x: -40, y: -40},
  {x: 10, y: -40},
    {arc: [
      {x :40, y:-40},
      {x :40, y: -10},
    ]},
  {x: 40, y: 10},
    {arc: [
      {x :40, y: 40},
      {x :10, y: 40},
    ]},
  {x: -40, y:40},
  ],
  rotate: {y: Zdog.TAU/2},
  translate: {y:-55,z: -40},
  fill: false,
  color: 'white',
  visible: true,
  stroke: 3,
  })
const space = new Zdog.Shape({
  addTo:letters,
  path: [
    {x: -40, y: -40,z:80},
    {x: 40, y:-40,z:80},
    {x: 40, y: 40,z:80},
    {x: -40, y:40,z:80},
  ],
  fill: false,
  color: '#f6931e',
  rotate: {y: Zdog.TAU/4},
  translate: {y:-50,x: 40},
  visible: false,
})

// RecordPlayerBase

const Player = new Zdog.Group({
  addTo: illo,
  visible: true,
  updateSort: true,
})

const left = new Zdog.Shape({
  addTo: Player,
  path: [
    {x:-75, y:0},
    {x:-75, y:30},
    {x:75, y:30},
    {x:75, y:0},
],
  fill: true,
  color: '#6a0000',
  rotate: {y: Zdog.TAU/4},
  translate: {x:-100},
  stroke:3,
})

const back = new Zdog.Shape({
  addTo: Player,
  path: [
    {x:-100, y:0},
    {x:-100, y:30},
    {x:100, y:30},
    {x:100, y:0},
],
  fill: true,
  color: '#e0481f',
  translate: {z:-75},
  stroke:3,
})

const front = new Zdog.Shape({
  addTo: Player,
  path: [
    {x:-100, y:0},
    {x:-100, y:30},
    {x:100, y:30},
    {x:100, y:0},
],
  fill: true,
  color: '#e0481f',
  translate: {z:75},
  stroke:3,
})

const right = new Zdog.Shape({
  addTo: Player,
  path: [
    {x:-75, y:0},
    {x:-75, y:30},
    {x:75, y:30},
    {x:75, y:0},
],
  fill: true,
  color: '#f6931e',
  rotate: {y: Zdog.TAU/4},
  translate: {x:100},
  stroke:3,
})

const up = new Zdog.Shape({
  addTo: Player,
  path: [
    {x:-100, y:-75},
    {x:100, y:-75},
    {x:100, y:75},
    {x:-100, y:75},
],
  fill: true,
  color: '#f6931e',
  rotate: {x: Zdog.TAU/4},
  stroke:3,
})
  
const down = new Zdog.Shape({
  addTo: Player,
  path: [
    {x:-98, y:-73},
    {x:-98, y: -73,z:-10},
    {x:-98, y:-73},
    {x:98, y:-73},
    {x:98, y:-73,z:-10},
    {x:98, y:-73},
    {x:98, y:73},
    {x:98, y:73,z:-10},
    {x:98, y:73},
    {x:-98, y:73},
    {x:-98, y:73,z:-10},
    {x:-98, y:73},
],
  fill: true,
  color: '#6a0000',
  rotate: {x: Zdog.TAU/4},
  translate: {y: 30},
  stroke: 5,
})

const button = new Zdog.Box({
  addTo:up,
  height: 5,
  depth: 15,
  width: 15,
  color: '#e0481f',
  translate: {x:-80,y:0,z:3},
  rotate: {x: Zdog.TAU/4},
  bottomFace: '#f6931e',
  stroke:3,
})



// Arm

let armbase = new Zdog.Box({
  addTo: up,
  width: 20,
  height: 7.5,
  depth: 20,
  translate: {x:80, y: -55, z:5},
  stroke:3,
  color: '#f6931e',
  topFace: '#e0481f',
  rotate: {x: Zdog.TAU/-4,y:-.005},
})

new Zdog.Cylinder({
  addTo: armbase,
  diameter: 5,
  length: 10,
  rotate: {x: Zdog.TAU/4},
  translate: {y:-10},
  color: '#e0481f',
  stroke: 3,
})

// NeedleArm

let arm = new Zdog.Cylinder({
  addTo: armbase,
  diameter: 5,
  length: 40,
  translate: {y:-15},
  rotate: {x: -.18, y: .3},
  color: '#e0481f',
  stroke: 3,
})

let pt1 = new Zdog.Cylinder({
  addTo: arm,
  diameter: 2.5,
  length: 75,
  translate: {z: 25},
  color: '#e0481f',
  stroke: 3,  
})

new Zdog.Box({
  addTo: pt1,
  width: 7.5,
  depth: 15,
  height: 2.5,
  stroke: 3,
  translate: {z:45},
  rotate: {x:.15},
  color: '#f6931e',
  topFace: '#e0481f',
})

// Record

const Record1 = new Zdog.Ellipse({
  addTo: up,
  diameter: 125,
  stroke: 3,
  color: '#000',
  fill: true,
  translate: {z: 1},
})

const Record2 = new Zdog.Ellipse({
  addTo: up,
  diameter: 50,
  color: 'white',
  fill: true,
  translate: {z: 1.5},
})

const Record3 = new Zdog.Ellipse({
  addTo: up,
  diameter: 10,
  color: 'black',
  fill: true,
  translate: {z: 1.75},


})

new Zdog.Ellipse({
  addTo: letters,
  diameter: 75,
  quarters: 1,
  stroke: 1,
  color: 'white',
  translate: {y: -2},
  rotate: {x: Zdog.TAU/4}
});

new Zdog.Ellipse({
  addTo: letters,
  diameter: 75,
  quarters: 1,
  stroke: 1,
  color: 'white',
  translate: {y: -2},
  rotate: {x: Zdog.TAU/4, z: 3}
});

// Speakers
var Speaker1 = new Zdog.Group({
  addTo:illo,
  visible: true,
  updateSort: true,
})

const speaker = new Zdog.Box({
  addTo:Speaker1,
  height: 150,
  depth: 75,
  width: 75,
  translate: {x:-100,z:-150,y:-34},
  color: '#f6931e',
  leftFace: '#6a0000',
  frontFace: '#6a0000',
  rightFace: '#f6931e',
  rearFace: '#e0481f',
  bottomFace: '#6a0000',
  stroke:3,
  
})

new Zdog.Ellipse({
  addTo: speaker,
  diameter:55,
  translate: {z:42,y:35},
  stroke: 3,
  fill: true,
  color: 'black',
  
})

new Zdog.Hemisphere({
  addTo: speaker,
  diameter:5,
  translate: {z:42,y:35},
  stroke: 3,
  fill: true,
  color: '#6a0000',
  
})

new Zdog.Ellipse({
  addTo: speaker,
  diameter:55,
  translate: {z:42,y:-35},
  stroke: 3,
  fill: true,
  color: 'black',
  
})

new Zdog.Hemisphere({
  addTo: speaker,
  diameter:5,
  translate: {z:42,y:-35},
  stroke: 3,
  fill: true,
  color: '#6a0000',
  
})

var Speaker2 = new Zdog.Group({
  addTo:illo,
  visible: true,
  updateSort: true,
})

const speaker2 = new Zdog.Box({
  addTo:Speaker2,
  height: 150,
  depth: 75,
  width: 75,
  translate: {x:100,z:-150,y:-34},
  color: '#f6931e',
  leftFace: '#6a0000',
  frontFace: '#6a0000',
  rightFace: '#f6931e',
  rearFace: '#e0481f',
  bottomFace: '#6a0000',
  stroke:3,
  
})

new Zdog.Ellipse({
  addTo: speaker2,
  diameter:55,
  translate: {z:42,y:35},
  stroke: 3,
  fill: true,
  color: 'black',
  
})

new Zdog.Hemisphere({
  addTo: speaker2,
  diameter:5,
  translate: {z:42,y:35},
  stroke: 3,
  fill: true,
  color: '#6a0000',
  
})

new Zdog.Ellipse({
  addTo: speaker2,
  diameter:55,
  translate: {z:42,y:-35},
  stroke: 3,
  fill: true,
  color: 'black',
  
})

new Zdog.Hemisphere({
  addTo: speaker2,
  diameter:5,
  translate: {z:42,y:-35},
  stroke: 3,
  fill: true,
  color: '#6a0000',
  
})

function animate() {
  illo.updateRenderGraph();
  letters.rotate.y += 0.01;
  Speaker1.bounce += 20;
  requestAnimationFrame(animate);
}
function animateLetters(){
  letters.rotate.y += 0.01;
  letters.updateRenderGraph()
  requestAnimationFrame(animateLetters)
}
function animateSpeaker1(){
  Speaker1.rotate.y += 0.01;
  Speaker1.updateRenderGraph()
  requestAnimationFrame(animateSpeaker1)
}
animate();
