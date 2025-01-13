import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three';


const StarField = () => {
  const pointsRef = useRef();
  const starCount = 9000;
  const positions = new Float32Array(starCount * 3);

  useEffect(() => {
    const generateStars = () => {
      for (let i = 0; i < starCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000; // X position
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000; // Y position
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // Z position
      }
      return positions;
    };
    generateStars();

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.3,
      transparent: true,
      opacity: 0.8,
    });

    const points = new THREE.Points(geometry, material);
    pointsRef.current.add(points);

    return () => {
      pointsRef.current.remove(points);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  useFrame(() => {
    const positionAttribute = pointsRef.current.children[0].geometry.attributes.position;
    
    for (let i = 0; i < starCount; i++) {
      positionAttribute.array[i * 3 + 2] -= 0.3 ;

      if (positionAttribute.array[i * 3 + 2] < -1000) {
        positionAttribute.array[i * 3 + 2] = Math.random() * 2000;
      }
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <group ref={pointsRef} />
  );
};


export default function Galaxy() {
  return (<Canvas style={{zIndex: -1, position: 'fixed', top: 0, backgroundColor: 'black'}}>
    <ambientLight intensity={0.5} />
    <StarField />
  </Canvas>)
}