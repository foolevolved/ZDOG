const illo2 = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  zoom: .75,
 
});

// Initials
var letters2 = new Zdog.Group({
  addTo:illo2,
  visible: true,
  updateSort: true,
  translate: {y:55},
})

const I2 = new Zdog.Shape({
  addTo:letters2,
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
const M2 = new Zdog.Shape({
  addTo:letters2,
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
const D2 = new Zdog.Shape({
  addTo:letters2,
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
const space2 = new Zdog.Shape({
  addTo:letters2,
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
  illo2.updateRenderGraph();
  letters2.rotate.y += 0.01;
  requestAnimationFrame(animate);
}
animate();
