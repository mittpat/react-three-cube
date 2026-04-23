import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function SpinningCube() {
  const groupRef = useRef(null)
  const { scene, animations } = useGLTF('/charizard_sv_v3.glb')
  const [mixer, setMixer] = useState(null)
  const [actions, setActions] = useState([])

  useEffect(() => {
    if (scene && animations.length > 0) {
      const THREE = require('three')
      const newMixer = new THREE.AnimationMixer(scene)
      const newActions = animations.map(clip => newMixer.clipAction(clip))

      console.log('Available animations:', animations.map(a => a.name))

      if (newActions.length > 0) {
        newActions[0].play()
      }

      setMixer(newMixer)
      setActions(newActions)
    }
  }, [scene, animations])

  useFrame((state, delta) => {
    mixer?.update(delta)
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
