import { Canvas } from '@react-three/fiber'
import { OrbitControls, PresentationControls } from '@react-three/drei'
import SpinningCube from './components/SpinningCube'

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[0, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <SpinningCube />
      </PresentationControls>

      <OrbitControls />
    </Canvas>
  )
}
