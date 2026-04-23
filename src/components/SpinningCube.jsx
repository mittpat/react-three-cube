import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function SpinningCube() {
  const groupRef = useRef(null)
  const { scene } = useGLTF('/charizard_sv_v3.glb')
  const leftHandRef = useRef(null)
  const rightHandRef = useRef(null)

  useEffect(() => {
    let skinnedMesh = null
    scene.traverse(child => {
      if (child.isSkinnedMesh && !skinnedMesh) {
        skinnedMesh = child
      }
    })

    if (skinnedMesh?.skeleton) {
      const skeleton = skinnedMesh.skeleton
      leftHandRef.current = skeleton.bones[30]
      rightHandRef.current = skeleton.bones[40]
    }
  }, [scene])

  useFrame(({ clock }) => {
    const handRotation = Math.sin(clock.elapsedTime * 2) * (2 * Math.PI / 9)

    if (leftHandRef.current) {
      leftHandRef.current.rotation.z = handRotation
    }
    if (rightHandRef.current) {
      rightHandRef.current.rotation.z = -handRotation
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.8} />
    </group>
  )
}
