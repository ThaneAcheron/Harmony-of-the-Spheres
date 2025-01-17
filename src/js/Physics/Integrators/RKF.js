import Euler from './Euler';

export default class extends Euler {
  constructor(params) {
    super(params);

    this.tol = params.tol;
    this.maxDt = params.maxDt;
    this.minDt = params.minDt;
  }

  calculateError(p1, p2) {
    let error = 0;
    const pLen = p1.length;

    for (let i = 0; i < pLen; i++) {
      error += Math.sqrt(
        Math.pow(p1[i].x - p2[i].x, 2) +
          Math.pow(p1[i].y - p2[i].y, 2) +
          Math.pow(p1[i].z - p2[i].z, 2)
      );
    }
    return error;
  }

  k2(s, k1v, k1r) {
    let k2v = [];
    let k2r = [];
    let tempPos = [];
    const kLen = k1r.length;

    const a1 = 1 / 4;

    for (let i = 0; i < kLen; i++) {
      tempPos[i] = {
        x: s[i].x + a1 * this.dt * k1r[i].vx,
        y: s[i].y + a1 * this.dt * k1r[i].vy,
        z: s[i].z + a1 * this.dt * k1r[i].vz
      };

      k2r[i] = {
        vx: s[i].vx + k1v[i].x * this.dt * a1,
        vy: s[i].vy + k1v[i].y * this.dt * a1,
        vz: s[i].vz + k1v[i].z * this.dt * a1
      };
    }
    k2v = this.generateAccelerationVectors(tempPos);
    return [k2v, k2r];
  }

  k3(s, k1v, k2v, k1r, k2r) {
    let k3v = [];
    let k3r = [];
    let tempPos = [];
    const kLen = k1r.length;

    const a1 = 3 / 32;
    const a2 = 9 / 32;

    for (let i = 0; i < kLen; i++) {
      tempPos[i] = {
        x: s[i].x + this.dt * (a1 * k1r[i].vx + a2 * k2r[i].vx),
        y: s[i].y + this.dt * (a1 * k1r[i].vy + a2 * k2r[i].vy),
        z: s[i].z + this.dt * (a1 * k1r[i].vz + a2 * k2r[i].vz)
      };

      k3r[i] = {
        vx: s[i].vx + this.dt * (a1 * k1v[i].x + a2 * k2v[i].x),
        vy: s[i].vy + this.dt * (a1 * k1v[i].y + a2 * k2v[i].y),
        vz: s[i].vz + this.dt * (a1 * k1v[i].z + a2 * k2v[i].z)
      };
    }
    k3v = this.generateAccelerationVectors(tempPos);
    return [k3v, k3r];
  }

  k4(s, k1v, k2v, k3v, k1r, k2r, k3r) {
    let k4v = [];
    let k4r = [];
    let tempPos = [];
    const kLen = k1r.length;

    const a1 = 1932 / 2197;
    const a2 = -7200 / 2197;
    const a3 = 7296 / 2197;

    for (let i = 0; i < kLen; i++) {
      tempPos[i] = {
        x:
          s[i].x + this.dt * (a1 * k1r[i].vx + a2 * k2r[i].vx + a3 * k3r[i].vx),
        y:
          s[i].y + this.dt * (a1 * k1r[i].vy + a2 * k2r[i].vy + a3 * k3r[i].vy),
        z: s[i].z + this.dt * (a1 * k1r[i].vz + a2 * k2r[i].vz + a3 * k3r[i].vz)
      };

      k4r[i] = {
        vx: s[i].vx + this.dt * (a1 * k1v[i].x + a2 * k2v[i].x + a3 * k3v[i].x),
        vy: s[i].vy + this.dt * (a1 * k1v[i].y + a2 * k2v[i].y + a3 * k3v[i].y),
        vz: s[i].vz + this.dt * (a1 * k1v[i].z + a2 * k2v[i].z + a3 * k3v[i].z)
      };
    }
    k4v = this.generateAccelerationVectors(tempPos);
    return [k4v, k4r];
  }

  k5(s, k1v, k2v, k3v, k4v, k1r, k2r, k3r, k4r) {
    let k5v = [];
    let k5r = [];
    let tempPos = [];
    const kLen = k1r.length;

    const a1 = 439 / 216;
    const a2 = -8;
    const a3 = 3680 / 513;
    const a4 = -845 / 4104;

    for (let i = 0; i < kLen; i++) {
      tempPos[i] = {
        x:
          s[i].x +
          this.dt *
            (a1 * k1r[i].vx + a2 * k2r[i].vx + a3 * k3r[i].vx + a4 * k4r[i].vx),
        y:
          s[i].y +
          this.dt *
            (a1 * k1r[i].vy + a2 * k2r[i].vy + a3 * k3r[i].vy + a4 * k4r[i].vy),
        z:
          s[i].z +
          this.dt *
            (a1 * k1r[i].vz + a2 * k2r[i].vz + a3 * k3r[i].vz + a4 * k4r[i].vz)
      };

      k5r[i] = {
        vx:
          s[i].vx +
          this.dt *
            (a1 * k1v[i].x + a2 * k2v[i].x + a3 * k3v[i].x + a4 * k4v[i].x),
        vy:
          s[i].vy +
          this.dt *
            (a1 * k1v[i].y + a2 * k2v[i].y + a3 * k3v[i].y + a4 * k4v[i].y),
        vz:
          s[i].vz +
          this.dt *
            (a1 * k1v[i].z + a2 * k2v[i].z + a3 * k3v[i].z + a4 * k4v[i].z)
      };
    }
    k5v = this.generateAccelerationVectors(tempPos);
    return [k5v, k5r];
  }

  k6(s, k1v, k2v, k3v, k4v, k5v) {
    let k6r = [];
    const kLen = k1v.length;

    const a1 = -8 / 27;
    const a2 = 2;
    const a3 = -3544 / 2565;
    const a4 = 1859 / 4104;
    const a5 = -11 / 40;

    for (let i = 0; i < kLen; i++) {
      k6r[i] = {
        vx:
          s[i].vx +
          this.dt *
            (a1 * k1v[i].x +
              a2 * k2v[i].x +
              a3 * k3v[i].x +
              a4 * k4v[i].x +
              a5 * k5v[i].x),
        vy:
          s[i].vy +
          this.dt *
            (a1 * k1v[i].y +
              a2 * k2v[i].y +
              a3 * k3v[i].y +
              a4 * k4v[i].y +
              a5 * k5v[i].y),
        vz:
          s[i].vz +
          this.dt *
            (a1 * k1v[i].z +
              a2 * k2v[i].z +
              a3 * k3v[i].z +
              a4 * k4v[i].z +
              a5 * k5v[i].z)
      };
    }
    return k6r;
  }

  iterate() {
    const s = this.getStateVectors(this.masses);

    const k1v = this.generateAccelerationVectors(s);
    const k1r = s;

    const p = []; // order 4 solution
    const p2 = []; // order 5 solution
    const v = [];

    const mLen = this.masses.length;

    let error = 1e10; // just to get the loop running
    while (error > this.tol) {
      const [k2v, k2r] = this.k2(s, k1v, k1r);
      const [k3v, k3r] = this.k3(s, k1v, k2v, k1r, k2r);
      const [k4v, k4r] = this.k4(s, k1v, k2v, k3v, k1r, k2r, k3r);
      const [k5v, k5r] = this.k5(s, k1v, k2v, k3v, k4v, k1r, k2r, k3r, k4r);
      const k6r = this.k6(s, k1v, k2v, k3v, k4v, k5v);

      for (let i = 0; i < mLen; i++) {
        p[i] = {
          x:
            s[i].x +
            this.dt *
              (25 / 216 * k1r[i].vx +
                1408 / 2565 * k3r[i].vx +
                2197 / 4104 * k4r[i].vx -
                1 / 5 * k5r[i].vx),
          y:
            s[i].y +
            this.dt *
              (25 / 216 * k1r[i].vy +
                1408 / 2565 * k3r[i].vy +
                2197 / 4104 * k4r[i].vy -
                1 / 5 * k5r[i].vy),
          z:
            s[i].z +
            this.dt *
              (25 / 216 * k1r[i].vz +
                1408 / 2565 * k3r[i].vz +
                2197 / 4104 * k4r[i].vz -
                1 / 5 * k5r[i].vz)
        };

        p2[i] = {
          x:
            s[i].x +
            this.dt *
              (16 / 135 * k1r[i].vx +
                6656 / 12825 * k3r[i].vx +
                28561 / 56430 * k4r[i].vx -
                9 / 50 * k5r[i].vx +
                2 / 55 * k6r[i].vx),
          y:
            s[i].y +
            this.dt *
              (16 / 135 * k1r[i].vy +
                6656 / 12825 * k3r[i].vy +
                28561 / 56430 * k4r[i].vy -
                9 / 50 * k5r[i].vy +
                2 / 55 * k6r[i].vy),
          z:
            s[i].z +
            this.dt *
              (16 / 135 * k1r[i].vz +
                6656 / 12825 * k3r[i].vz +
                28561 / 56430 * k4r[i].vz -
                9 / 50 * k5r[i].vz +
                2 / 55 * k6r[i].vz)
        };

        v[i] = {
          vx:
            s[i].vx +
            this.dt *
              (25 / 216 * k1v[i].x +
                1408 / 2565 * k3v[i].x +
                2197 / 4104 * k4v[i].x -
                1 / 5 * k5v[i].x),
          vy:
            s[i].vy +
            this.dt *
              (25 / 216 * k1v[i].y +
                1408 / 2565 * k3v[i].y +
                2197 / 4104 * k4v[i].y -
                1 / 5 * k5v[i].y),
          vz:
            s[i].vz +
            this.dt *
              (25 / 216 * k1v[i].z +
                1408 / 2565 * k3v[i].z +
                2197 / 4104 * k4v[i].z -
                1 / 5 * k5v[i].z)
        };
      }
      error = this.calculateError(p, p2);
      if (error != 0) {
        this.dt = this.dt * Math.pow(this.tol / (2 * error), 1 / 4);
      }
      if (this.dt < this.minDt) {
        this.dt = this.minDt;
      } else if (this.dt > this.maxDt) {
        this.dt = this.maxDt;
      }
    }
    this.updateStateVectors(p, v);
    this.incrementElapsedTime();
  }
}
