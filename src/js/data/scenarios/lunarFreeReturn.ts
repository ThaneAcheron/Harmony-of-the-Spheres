export default {
  name: 'Lunar Free Return Trajectory',
  tcmsData: [
    {
      t: 0,
      playing: true
    },
    {
      t: 0.00000000000000001,
      playing: false
    }
  ],
  logarithmicDepthBuffer: true,
  type: 'Spacecraft',
  g: 39.5,
  dt: 20e-8,
  distMax: 50,
  distMin: -50,
  rotatingReferenceFrame: 'Earth',
  cameraPosition: 'Chase',
  cameraFocus: 'Apollo 11',
  collisions: true,
  freeOrigo: { x: 0, y: 0, z: 16000 },
  particles: {
    max: 20000,
    size: 20,
    rings: []
  },
  massBeingModified: 'Sun',
  primary: 'Earth',
  maximumDistance: { name: 'Moon to Earth * 10', value: 0.0256955529 },
  distanceStep: { name: 'Moon to Earth / 100', value: 0.000025695552899999998 },
  scenarioWikiUrl: 'https://en.wikipedia.org/wiki/Free-return_trajectory',
  masses: [
    {
      name: 'Earth',
      x: 0.4240363252016235,
      y: -0.9248449798862485,
      z: -1.232690294681233e-4,
      vx: 5.622675894714279,
      vy: 2.5745894556521574,
      vz: 3.8057228235271535e-4,
      trailVertices: 0
    },
    {
      name: 'Sun',
      x: 0.004494747940528018,
      y: 9.145777867796766e-4,
      z: -6.127893755128986e-5,
      vx: -1.7443876658803292e-4,
      vy: 0.002043973630637931,
      vz: -4.697196039923407e-6,
      trailVertices: 10000
    },
    {
      name: 'Moon',
      x: 0.4220528422463315,
      y: -0.9230209264977778,
      z: 1.632323615688905e-5,
      vx: 5.486589374929882,
      vy: 2.420601498441581,
      vz: -0.014677846271227611,
      trailVertices: 5000
    },
    {
      name: 'Apollo 11',
      x: 0.4240447232851519,
      y: -0.9247715402118077,
      z: -1.129301018611092e-4,
      vx: 4.395253850175561,
      vy: 3.8323649107803948,
      vz: 0.15792573886687206,
      trailVertices: 10e4
    }
  ]
};
