import * as THREE from 'three';
import particle from './shaders/particle';

export default function(depthTest, texture) {
  return new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(0xffffff) },
      texture: {
        value: new THREE.TextureLoader().load(`./textures/${texture}.png`)
      },
      sizeAttenuation: { value: true }
    },
    vertexShader: particle.vertex,
    fragmentShader: particle.fragment,
    blending: THREE.AdditiveBlending,
    depthTest: depthTest,
    transparent: true
  });
}
