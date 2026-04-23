import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function SpinningCube() {
  const groupRef = useRef(null)
  const { scene } = useGLTF('/charizard_sv_v2.glb')

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.8} />
    </group>
  )
}
