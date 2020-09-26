const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  zoom: 1.5,
 
});

// Initials
var letters = new Zdog.Group({
  addTo:illo,
  visible: true,
  updateSort: true,
  translate: {y:55},
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
  color: 'black',
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
  color: 'black',
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
  color: 'black',
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
function animateSpeaker1(){
  Speaker1.rotate.y += 0.01;
  Speaker1.updateRenderGraph()
  requestAnimationFrame(animateSpeaker1)
}
animate();
