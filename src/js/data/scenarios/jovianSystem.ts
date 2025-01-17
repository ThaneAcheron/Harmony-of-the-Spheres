export default {
  name: 'The Jovian System',
  type: 'Solar System',
  g: 39.5,
  dt: 0.000006,
  rotatingReferenceFrame: 'Jupiter',
  cameraPosition: 'Free',
  cameraFocus: 'Origo',
  freeOrigo: {
    x: 0,
    y: 0,
    z: 50000
  },
  particles: {
    max: 20000,
    size: 400,
    rings: []
  },
  massBeingModified: 'Jupiter',
  distMax: 50,
  distMin: -50,
  primary: 'Jupiter',
  maximumDistance: { name: 'Io to Jupiter * 150', value: 0.42285 },
  distanceStep: { name: 'Io to Jupiter / 10', value: 0.00028189999999999997 },
  scenarioWikiUrl: 'https://en.wikipedia.org/wiki/Jupiter',
  masses: [
    {
      name: 'Jupiter',
      x: -7.059720449635489e-9,
      y: -3.458205558367953e-7,
      z: -8.560595128944146e-9,
      vx: 1.2011206801885418e-4,
      vy: -1.4404565860802778e-5,
      vz: 1.85765499287888e-6,
      trailVertices: 5000
    },
    {
      name: 'Sun',
      x: 5.436151339701778,
      y: -2.691893935210006e-1,
      z: -1.20522867020747e-1,
      vx: 4.638501110265252e-4 * 365.25,
      vy: 7.187356979742229e-3 * 365.25,
      vz: -4.022800836950103e-5 * 365.25,
      trailVertices: 5000
    },
    {
      name: 'Io',
      x: 4.123396684098477e-4,
      y: -0.00277546561117049,
      z: -9.213389019387901e-5,
      vx: 3.632459716708889,
      vy: 0.5331313883142663,
      vz: 0.07191321713719195
    },
    {
      name: 'Europa',
      x: 2.31315012572641e-4,
      y: -0.004516461518956031,
      z: -1.948699591675548e-4,
      vx: 2.867825888888589,
      vy: 0.1479315881074277,
      vz: 0.053531172951165384
    },
    {
      name: 'Ganymede',
      x: -0.007162482360743344,
      y: -1.26082702584475e-5,
      z: -9.466593207081436e-5,
      vx: 0.009854944632595801,
      vy: -2.2904667534862946,
      vz: -0.08642422976208332
    },
    {
      name: 'Callisto',
      x: -0.01163958701040644,
      y: -0.005000778655901151,
      z: -3.148071350588741e-4,
      vx: 0.6828251398971682,
      vy: -1.5765023231560384,
      vz: -0.040977438627834185
    },
    {
      name: 'Juno',
      x: -5.039266773550064e-5,
      y: -0.00788144649482092,
      z: -0.004586041119660474,
      vx: -0.02521299585620324,
      vy: -2.5307649570849953,
      vz: -0.6940820182189928
    }
  ]
};
