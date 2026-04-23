import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function SpinningCube() {
  const groupRef = useRef(null)
  const { scene } = useGLTF('/charizard_sv_v3.glb')

  useEffect(() => {
    function logBones(node, depth = 0) {
      const indent = '  '.repeat(depth)
      console.log(`${indent}${node.name} (${node.type})`)
      if (node.skeleton) {
        console.log(`${indent}  -> Skeleton with ${node.skeleton.bones.length} bones:`)
        node.skeleton.bones.forEach((bone, idx) => {
          console.log(`${indent}    [${idx}] ${bone.name}`)
        })
      }
      node.children?.forEach(child => logBones(child, depth + 1))
    }

    console.log('=== Charizard Rigging Structure ===')
    logBones(scene)
  }, [scene])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
      groupRef.current.rotation.x += 0.002
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.8} />
    </group>
  )
}
