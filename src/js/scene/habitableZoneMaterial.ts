import * as THREE from 'three';
import habitableZone from './shaders/habitableZone';

export default (start: number, end: number): THREE.ShaderMaterial =>
  new THREE.ShaderMaterial({
    uniforms: {
      resolution: { value: new THREE.Vector3(1, 1, 1) },
      start: { value: start },
      end: { value: end }
    },
    vertexShader: habitableZone.vertex,
    fragmentShader: habitableZone.fragment,
    side: THREE.DoubleSide
  });
