import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function SpinningCube() {
  const meshRef = useRef(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#ff6b6b"
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  )
}
