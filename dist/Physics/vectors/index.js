import { degreesToRadians } from '../utils';
export default class {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    set(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    }
    toArray() {
        return [this.x, this.y, this.z];
    }
    toObject() {
        return { x: this.x, y: this.y, z: this.z };
    }
    getLength() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    normalise() {
        return this.divideByScalar(this.getLength());
    }
    getDistanceParameters(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        const dz = this.z - v.z;
        const dSquared = dx * dx + dy * dy + dz * dz;
        return { dx, dy, dz, dSquared, d: Math.sqrt(dSquared) };
    }
    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }
    subtractFrom(v) {
        this.x = v.x - this.x;
        this.y = v.y - this.y;
        this.z = v.z - this.z;
        return this;
    }
    multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
    }
    divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
        return this;
    }
    multiplyByScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    divideByScalar(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
        return this;
    }
    addScaledVector(scalar, v) {
        this.x += scalar * v.x;
        this.y += scalar * v.y;
        this.z += scalar * v.z;
        return this;
    }
    subtractScaledVector(scalar, v) {
        this.x -= scalar * v.x;
        this.y -= scalar * v.y;
        this.z -= scalar * v.z;
        return this;
    }
    rotate(axis, angle) {
        const radians = degreesToRadians(angle);
        const halfAngle = radians / 2;
        const s = Math.sin(halfAngle);
        const q = {
            x: axis.x * s,
            y: axis.y * s,
            z: axis.z * s,
            w: Math.cos(halfAngle)
        };
        const ix = q.w * this.x + q.y * this.z - q.z * this.y;
        const iy = q.w * this.y + q.z * this.x - q.x * this.z;
        const iz = q.w * this.z + q.x * this.y - q.y * this.x;
        const iw = -q.x * this.x - q.y * this.y - q.z * this.z;
        this.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;
        this.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;
        this.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;
        return this;
    }
}
//# sourceMappingURL=index.js.map