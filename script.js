const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  zoom: 1.5,
  rotate: {x:-.07, y:-0.7},
 
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
  color: '#fff',
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
  color: '#fff',
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
  color: '#fff',
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
})
  
let down = new Zdog.Shape({
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



// Arm
let armbase = new Zdog.Box({
  addTo: Player,
  width: 20,
  height: 7.5,
  depth: 20,
  translate: {x:80, y: -5, z:-50},
  stroke: 2,
  color: '#f6931e',
  topFace: '#e0481f',
})

new Zdog.Cylinder({
  addTo: armbase,
  diameter: 5,
  length: 10,
  rotate: {x: Zdog.TAU/4},
  translate: {y:-10},
  color: '#f6931e',
  stroke: 2,
})
// NeedleArm
let arm = new Zdog.Cylinder({
  addTo: armbase,
  diameter: 5,
  length: 40,
  translate: {y:-15},
  rotate: {x: -.18, y: .3},
  color: '#f6931e',
  stroke: 2,
})

let pt1 = new Zdog.Cylinder({
  addTo: arm,
  diameter: 2.5,
  length: 75,
  translate: {z: 25},
  color: '#f6931e',
  stroke: 2,  
})

new Zdog.Box({
  addTo: pt1,
  width: 7.5,
  depth: 15,
  height: 2.5,
  stroke: 2,
  translate: {z:45},
  rotate: {x:.15},
  color: '#f6931e',
  topFace: '#e0481f',
})

// Record
const Record = new Zdog.Group({
  addTo: illo,
  visible: true,
  updateSort: true,
})

const Record1 = new Zdog.Ellipse({
  addTo: letters,
  diameter: 125,
  stroke: 2,
  color: '#000',
  fill: true,
  translate: {y: -2},
  rotate: {x: Zdog.TAU/4},
})

const Record2 = new Zdog.Ellipse({
  addTo: letters,
  diameter: 50,
  color: 'white',
  fill: true,
  translate: {y: -3},
  rotate: {x: Zdog.TAU/4},
})

const Record3 = new Zdog.Ellipse({
  addTo: letters,
  diameter: 10,
  color: 'black',
  fill: true,
  translate: {y: -4.15},
  rotate: {x: Zdog.TAU/4},

})

new Zdog.Ellipse({
  addTo: letters,
  diameter: 75,
  quarters: 1,
  stroke: 1,
  color: 'white',
  translate: {y: -3},
  rotate: {x: Zdog.TAU/4}
});

new Zdog.Ellipse({
  addTo: letters,
  diameter: 75,
  quarters: 1,
  stroke: 1,
  color: 'white',
  translate: {y: -3},
  rotate: {x: Zdog.TAU/4, z: 3}
});


function animate() {
  illo.updateRenderGraph();
  letters.rotate.y += 0.01;
  requestAnimationFrame(animate);
}
function animateLetters(){
  letters.rotate.y += 0.01;
  letters.updateRenderGraph()
  requestAnimationFrame(animateLetters)
}
animate();
