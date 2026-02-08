import { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Gltf, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

function Model(){
  const ref = useRef()
  const obj = useLoader(OBJLoader, '/skull.obj')

  const { pointer } = useThree()

  const [processedObj] = useState(() => {
    const clonedObj = obj.clone()
    
    clonedObj.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({ 
          color: 0x000000,
          opacity: 0.5,
          transparent: true
        })
        
        const edges = new THREE.EdgesGeometry(child.geometry)
        const line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ color: 0x2ba19d })
        )
        child.add(line)
      }
    })
    
    return clonedObj
  })

  useFrame((state, delta) => {
    if (ref.current) {
      // Convert mouse position to 3D world coordinates
      const x = pointer.x * 5  // Scale to world space
      const y = pointer.y * 5
      
      // Create target point for skull to look at
      const target = new THREE.Vector3(x, y, 5)
      
      // Smoothly rotate toward target
      ref.current.lookAt(target)
    if (ref.current) {
            console.log('Pointer:', pointer.x, pointer.y)  // Add this
            
            const x = pointer.x * 5
            const y = pointer.y * 5
            const target = new THREE.Vector3(x, y, 5)
            ref.current.lookAt(target)
        }
      // Optional: add smooth lerping for less snappy movement
      // ref.current.rotation.y = THREE.MathUtils.lerp(
      //   ref.current.rotation.y,
      //   Math.atan2(x - ref.current.position.x, 5),
      //   0.05
      // )
    }
  })
  
  return <primitive ref={ref} object={processedObj} scale={0.5} position={[0, -2, 0]}/>
}

// function RotatingBox() {
//   const meshRef = useRef()
  
//   useFrame((state, delta) => {
//     // This runs every frame - rotate the box
//     meshRef.current.rotation.x += delta * 0.5
//     meshRef.current.rotation.y += delta * 5
//   })
  
//   return (
//     <mesh ref={meshRef}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial color="transparent" />
//     </mesh>
//   )
// }

export default function AnimatedBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model/>
    </Canvas>
  )
}