import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function SpinningCube() {
  const groupRef = useRef(null)
  const { scene, animations } = useGLTF('/charizard_sv_v3.glb')
  const mixerRef = useRef(null)

  useEffect(() => {
    console.log('GLB loaded. Animations found:', animations.length)
    console.log('Animation names:', animations.map(a => a.name))

    if (scene) {
      const mixer = new THREE.AnimationMixer(scene)
      mixerRef.current = mixer

      if (animations.length > 0) {
        const action = mixer.clipAction(animations[0])
        console.log('Playing animation:', animations[0].name)
        action.play()
      } else {
        console.log('No animations found in model')
      }
    }

    return () => {
      mixerRef.current?.stopAllAction()
    }
  }, [scene, animations])

  useFrame((state, delta) => {
    mixerRef.current?.update(delta)
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.8} />
    </group>
  )
}
