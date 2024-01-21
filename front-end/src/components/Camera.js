import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import RubiksCube from './RubiksCube'

function Camera({ state }) {
  return (
    <Canvas camera={{ position: [10, 0, 10], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.3} position={[5, 20, 20]} />
      <Suspense fallback={null}>
        <RubiksCube state={state} />
        <Environment preset="city" />
        <ContactShadows position={[0, -6.5, 0]} scale={100} />
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 4} maxPolarAngle={(3 * Math.PI) / 4} enableZoom={false} enablePan={true} />
    </Canvas>
  )
}

export default Camera
