import Euler from './Euler';
import H3 from '../vectors';
import { IntegratorType, VectorType } from '../types';

export default class extends Euler {
  utilityVector: H3;
  lastAcc: VectorType[];

  constructor({ g, dt, masses, elapsedTime }: IntegratorType) {
    super({ g, dt, masses, elapsedTime });

    this.utilityVector = new H3();

    this.lastAcc = this.generateAccelerationVectors(
      this.getStateVectors(this.masses).p
    );
  }

  generateVerletPositionVectors(
    s: { p: VectorType[]; v: VectorType[] },
    a: VectorType[],
    dt: number
  ): VectorType[] {
    const p = [];
    const aLen = a.length;

    for (let i = 0; i < aLen; i++) {
      let aI = a[i];
      let sI = s.v[i];
      let m = this.masses[i];

      p[i] = this.p
        .set({ x: m.x, y: m.y, z: m.z })
        .addScaledVector(dt, sI)
        .addScaledVector(
          0.5,
          this.utilityVector.set(aI).multiplyByScalar(Math.pow(dt, 2))
        )
        .toObject();
    }

    return p;
  }

  generateVerletVelocityVectors(
    a1: VectorType[],
    a2: VectorType[],
    dt: number
  ): VectorType[] {
    const v = [];
    const aLen = a1.length;

    for (let i = 0; i < aLen; i++) {
      let aI1 = a1[i];
      let aI2 = a2[i];
      let m = this.masses[i];

      v[i] = this.v
        .set({ x: m.vx, y: m.vy, z: m.vz })
        .addScaledVector(
          0.5,
          this.utilityVector
            .set(aI1)
            .add(aI2)
            .multiplyByScalar(dt)
        )
        .toObject();
    }

    return v;
  }

  iterate(): void {
    const s = this.getStateVectors(this.masses);

    const a1 = this.lastAcc;
    const p = this.generateVerletPositionVectors(s, a1, this.dt);
    const a2 = this.generateAccelerationVectors(p);
    const v = this.generateVerletVelocityVectors(a1, a2, this.dt);

    this.lastAcc = a2;
    this.updateStateVectors(p, v);

    this.incrementElapsedTime();
  }
}
