export default {
  name: 'Journey to Pluto - New Horizons',
  g: 39.5,
  dt: 0.0005,
  distMax: 60,
  distMin: -60,
  distStep: 0.1,
  velMax: 0.5,
  velMin: -0.5,
  velStep: 0.000005,
  rotatingReferenceFrame: 'Sun',
  cameraPosition: 'Free',
  cameraFocus: 'New Horizons',
  freeOrigoZ: '99500000',
  massBeingModified: 'Sun',
  primary: 'Sun',
  maximumDistance: { name: 'Sun to Kuiper Belt', value: 55 },
  distanceStep: { name: 'Sun to Earth / 10', value: 0.1 },
  masses: [
    {
      name: 'Sun',
      x: 0.003105382820836557,
      y: 0.003421107715470631,
      z: -1.128874250543145e-4,
      vx: -0.0016117046847855569,
      vy: 0.0018341010190244748,
      vz: 1.4207828429244852e-5,
      trailVertices: 4e3
    },
    {
      name: 'Earth',
      x: 0.6355808228859378,
      y: -0.7904677085067398,
      z: -1.002472603316248e-4,
      vx: 4.810026644475574,
      vy: 3.8958651756142295,
      vz: 1.4585339016878442e-4,
      trailVertices: 3e3
    },
    {
      name: 'New Horizons',
      x: -1.992164573274362,
      y: -2.301641761520275,
      z: 0.04364285932798397,
      vx: -0.627751406550844,
      vy: -5.174225494942215,
      vz: 0.04752908860301672,
      trailVertices: 1e5
    },
    {
      name: 'Mars',
      x: -0.320950462453678,
      y: 1.565928009403821,
      z: 0.04061607311236139,
      vx: -4.812049493267159,
      vy: -0.6026978648189573,
      vz: 0.1055127360208306,
      trailVertices: 3e3
    },
    {
      name: 'Jupiter',
      x: -3.420140620263771,
      y: -4.17639729175358,
      z: 0.09384198472444041,
      vx: 2.0982188217181896,
      vy: -1.615934684899708,
      vz: -0.040244608432520916,
      trailVertices: 12e3
    },
    {
      name: 'Pluto',
      x: -2.365357406754338,
      y: -30.79945464082713,
      z: 3.979920498188652,
      vx: 1.1616329240882042,
      vy: -0.30185828812247,
      vz: -0.30664299241349696,
      trailVertices: 2e4
    },
    {
      name: 'Saturn',
      x: -8.417303721615914,
      y: -4.926388621921075,
      z: 0.4206428591233111,
      vx: 0.919151760170189,
      vy: -1.7631987893271037,
      vz: -0.005984764290193158,
      trailVertices: 15e3
    },
    {
      name: 'Uranus',
      x: 19.94996398927053,
      y: 2.105545795789208,
      z: -0.250642112216617,
      vx: -0.16129339690269276,
      vy: 1.3616609675222109,
      vz: 0.007139790220137776,
      trailVertices: 2e4
    },
    {
      name: 'Neptune',
      x: 26.3776735181941,
      y: -14.27426743109879,
      z: -0.3139485147556967,
      vx: 0.5381987172626345,
      vy: 1.015130164798585,
      vz: -0.033446435472504955,
      trailVertices: 2e4
    }
  ]
};
