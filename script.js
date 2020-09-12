let isSpinning = true;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true, 
  onDragStart: function() {
    isSpinning = false;
  },
});
new Zdog.Ellipse({
  addTo: illo,
  diameter: 500,
  stroke: 1,
  color: '#000',
  fill: true,
  translate: {y: 110},
  rotate: {x: Zdog.TAU/4},  
})
new Zdog.Ellipse({
  addTo: illo,
  diameter: 50,
  stroke: 1,
  color: '#fff',
  fill: true,
  translate: {x: -75, y: -50, z: -200},  
})
new Zdog.Ellipse({
  addTo: illo,
  diameter: 100,
  width: 50,
  quarters: 2,
  closed: true,
  stroke: 5,
  color: '#971',
  fill: true,
  translate: {x: -25, y: -30, z: -180},
  rotate: {z: Zdog.TAU/-4},  
})
new Zdog.Ellipse({
  addTo: illo,
  diameter: 75,
  width: 75,
  quarters: 2,
  closed: true,
  stroke: 5,
  color: '#971',
  fill: true,
  translate: {x: -10, y: -30, z: -180},
  rotate: {z: Zdog.TAU/-4},  
})
new Zdog.Ellipse({
  addTo: illo,
  diameter: 100,
  width: 50,
  quarters: 2,
  closed: true,
  stroke: 5,
  color: '#971',
  fill: true,
  translate: {x: -0, y: -30, z: -180},
  rotate: {z: Zdog.TAU/-4},  
})
new Zdog.Ellipse({
  addTo: illo,
  diameter: 100,
  width: 25,
  quarters: 2,
  closed: true,
  stroke: 5,
  color: '#971',
  fill: true,
  translate: {x: -150, y: -10, z: -180},
  rotate: {z: Zdog.TAU/-4},  
})
new Zdog.Ellipse({
  addTo: illo,
  diameter: 50,
  width: 40,
  quarters: 2,
  closed: true,
  stroke: 5,
  color: '#971',
  fill: true,
  translate: {x: -130, y: -15, z: -180},
  rotate: {z: Zdog.TAU/-4},  
})
new Zdog.Box({
  addTo: illo,
  width: 50,
  height: 110,
  depth: 50,
  stroke: false,
  color: '#CCC',
  leftFace: '#CCC',
  rightFace: '#CCC',
  topFace: '#CCC',
  bottomFace: '#CCC',
  translate: {x: -75, y: 45, z: 50}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -90, y: 50, z: 76}, 
  rotate: { x: Zdog.TAU/1} 
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -75, y: 50, z: 76}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -60, y: 50, z: 76}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -90, y: 70, z: 76}, 
  rotate: { x: Zdog.TAU/1} 
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -75, y: 70, z: 76}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -60, y: 70, z: 76}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -90, y: 30, z: 76}, 
  rotate: { x: Zdog.TAU/1} 
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -75, y: 30, z: 76}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -60, y: 30, z: 76}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -90, y: 10, z: 76}, 
  rotate: { x: Zdog.TAU/1} 
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -75, y: 10, z: 76}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 5,
  height: 10,
  stroke: 2,
  color: '#fff',
  translate: {x: -60, y: 10, z: 76}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 50,
  height: 100,
  depth: 50,
  stroke: false,
  color: '#CCC',
  leftFace: '#CCC',
  rightFace: '#CCC',
  topFace: '#CCC',
  bottomFace: '#CCC',
  translate: {x: 0, y: 50, z: 100}, 
  
});
new Zdog.Box({
  addTo: illo,
  width: 50,
  height: 170,
  depth: 50,
  stroke: false,
  color: '#CCC',
  leftFace: '#CCC',
  rightFace: '#CCC',
  topFace: '#CCC',
  bottomFace: '#CCC',
  translate: {x: 75, y: 15, z: -25}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 50,
  height: 20,
  depth: 50,
  stroke: false,
  color: '#CCC',
  leftFace: '#CCC',
  rightFace: '#CCC',
  topFace: '#CCC',
  bottomFace: '#CCC',
  translate: {x: 50, y: 10, z: -25}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 100,
  height: 20,
  depth: 50,
  stroke: false,
  color: '#CCC',
  leftFace: '#CCC',
  rightFace: '#CCC',
  topFace: '#CCC',
  bottomFace: '#CCC',
  translate: {x: 25, y: 90, z: 100}, 
});
new Zdog.Box({
  addTo: illo,
  width: 150,
  height: 50,
  depth: 100,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: -50, y: 75, z: -120}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 50,
  height: 20,
  depth: 100,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: -100, y: 40, z: -120}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 10,
  height: 20,
  depth: 10,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: -0, y: 40, z: -100}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 40,
  height: 120,
  depth: 50,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: -130, y: 40, z: 100}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 20,
  height: 20,
  depth: 20,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: -130, y: -20, z: 100}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 1,
  height: 25,
  depth: 1,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: -130, y: -40, z: 100}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 40,
  height: 60,
  depth: 100,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: -130, y: 70, z: 75}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 150,
  height: 20,
  depth: 40,
  stroke: false,
 color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: -100, y: 90, z: -20}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 100,
  height: 20,
  depth: 40,
  stroke: false,
 color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: -125, y: 70, z: -20}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 1,
  height: 10,
  depth: 1,
  stroke: false,
 color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: -160, y: 60, z: -20}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 50,
  height: 80,
  depth: 100,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: 25, y: 60, z: 0}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 80,
  height: 130,
  depth: 50,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: 100, y: 35, z: -100}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 20,
  height: 10,
  depth: 20,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: 125, y: -30, z: -90}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 30,
  height: 50,
  depth: 100,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: 125, y: 75, z: -25}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 30,
  height: 100,
  depth: 30,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: 175, y: 50, z: 10}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 80,
  height: 20,
  depth: 50,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: 150, y: 90, z: 100}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 50,
  height: 10,
  depth: 25,
  stroke: false,
  color: '#999',
  leftFace: '#999',
  rightFace: '#999',
  topFace: '#999',
  bottomFace: '#999',
  translate: {x: 150, y: 80, z: 100}, 
  rotate: { x: Zdog.TAU/1}
});
new Zdog.Box({
  addTo: illo,
  width: 50,
  height: 10,
  depth: 100,
  stroke: false,
  color: '#CCC',
  leftFace: '#CCC',
  rightFace: '#CCC',
  topFace: '#CCC',
  bottomFace: '#CCC',
  translate: {x: 0, y: 95, z: 190}, 
});
new Zdog.Box({
  addTo: illo,
  width: 80,
  height: 10,
  depth: 50,
  stroke: false,
  color: '#CCC',
  leftFace: '#CCC',
  rightFace: '#CCC',
  topFace: '#CCC',
  bottomFace: '#CCC',
  translate: {x: 25, y: 95, z: 165}, 
});
new Zdog.Box({
  addTo: illo,
  width: 20,
  height: 10,
  depth: 50,
  stroke: false,
  color: '#CCC',
  leftFace: '#CCC',
  rightFace: '#CCC',
  topFace: '#CCC',
  bottomFace: '#CCC',
  translate: {x: 0, y: 90, z: 190}, 
  
});
function animate() {
  illo.rotate.y += isSpinning ? 0.01 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
}
animate();