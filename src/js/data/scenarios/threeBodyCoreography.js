export default {
  name: 'Three Body Coreography',
  playing: false,
  g: 100,
  dt: 0.01,
  scale: 0.35,
  trails: true,
  labels: true,
  collisions: true,
  rotatingReferenceFrame: 'Eva',
  cameraPosition: 'Free',
  cameraFocus: 'Eva',
  massBeingModified: 'Eva',
  distMax: 400,
  distMin: -400,
  distStep: 0.0000023797035266666667,
  velMax: 0.5,
  velMin: -0.5,
  velStep: 0.000005,
  masses: [
    {
      name: 'Eva',
      type: 'star',
      trailVertices: 220,
      radius: 0.5,
      m: 1e4,
      x: -100,
      y: 0,
      z: 0,
      vx: 34.7111,
      vy: 53.2728,
      vz: 0,
      color: 'red'
    },
    {
      name: 'Sarada',
      type: 'star',
      trailVertices: 220,
      radius: 0.5,
      m: 1e4,
      x: 100,
      y: 0,
      z: 0,
      vx: 34.7111,
      vy: 53.2728,
      vz: 0,
      color: 'yellow'
    },
    {
      name: 'Arjuna',
      type: 'star',
      trailVertices: 220,
      radius: 0.5,
      m: 1e4,
      x: 0,
      y: 0,
      z: 0,
      vx: -69.4222,
      vy: -106.5456,
      vz: 0,
      color: 'blue'
    }
  ]
};
