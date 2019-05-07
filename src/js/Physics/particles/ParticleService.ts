import { MassType } from '../types';
import { Vector3 } from 'three';
import {
  getRandomNumberInRange,
  getRandomRadian,
  getOrbit,
  rotateVector
} from '../utils';

export default class {
  static getShapeOfParticles(
    number: number,
    minD: number,
    maxD: number,
    callback: Function
  ): MassType[] {
    const particles: MassType[] = [];

    for (let i = 0; i < number; i++) callback(particles, minD, maxD);

    return particles;
  }

  static getDiscParticle(particles: MassType[], minD: number, maxD: number) {
    const radian = getRandomRadian();
    const dist = getRandomNumberInRange(minD, maxD);

    const x = Math.cos(radian) * dist;
    const y = Math.sin(radian) * dist;
    const z = 0;

    particles.push({
      x: x,
      y: y,
      z: z,
      vx: 0,
      vy: 0,
      vz: 0
    });
  }

  static getCubeParticle(
    particles: MassType[],
    minD: number,
    maxD: number,
    cube: boolean
  ) {
    particles.push({
      x: getRandomNumberInRange(minD, maxD),
      y: getRandomNumberInRange(minD, maxD),
      z: cube ? getRandomNumberInRange(minD, maxD) : 0,
      vx: 0,
      vy: 0,
      vz: 0
    });
  }

  static getParticleSystem(
    vectors: MassType[],
    tilt: [number, number, number],
    primary: MassType,
    mRange: [number, number],
    g: number,
    withOrbit: boolean
  ): MassType[] {
    const p = new Vector3();
    const v = new Vector3();
    const a = new Vector3();

    return vectors.map(item => {
      const pTX = rotateVector(
        item.x,
        item.y,
        item.z,
        tilt[0],
        a.set(1, 0, 0),
        p
      );

      const pTY = rotateVector(pTX.x, pTX.y, pTX.z, tilt[1], a.set(0, 1, 0), p);

      const pTZ = rotateVector(pTY.x, pTY.y, pTY.z, tilt[2], a.set(0, 0, 1), p);

      const orbit = withOrbit
        ? getOrbit(primary, item, g, false, true)
        : { vx: 0, vy: 0, vz: 0 };

      const vTX = rotateVector(
        orbit.vx,
        orbit.vy,
        orbit.vz,
        tilt[0],
        a.set(1, 0, 0),
        v
      );

      const vTY = rotateVector(vTX.x, vTX.y, vTX.z, tilt[1], a.set(0, 1, 0), v);

      const vTZ = rotateVector(vTY.x, vTY.y, vTY.z, tilt[2], a.set(0, 0, 1), v);

      const [mMin, mMax] = mRange;

      return {
        m: getRandomNumberInRange(mMin, mMax),
        x: primary.x + pTZ.x,
        y: primary.y + pTZ.y,
        z: primary.z + pTZ.z,
        vx: primary.vx + vTZ.x,
        vy: primary.vy + vTZ.y,
        vz: primary.vz + vTZ.z
      };
    });
  }
}