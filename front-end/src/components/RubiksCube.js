import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'

const RubiksCube = ({ state }) => {
  const ref = useRef()
  const snap = useSnapshot(state)
  const { nodes, materials } = useGLTF('cube.glb')
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  })

  const handlePointerOver = (event) => {
    event.stopPropagation()
    setHovered(event.object.material.name)
    event.object.material.color.multiplyScalar(0.4)
  }

  const handlePointerOut = (event) => {
    event.intersections.length === 0 && setHovered(null)
    const material = event.object.material
    if (material.name === 'rubiks_cube') return
    material.color.set(state.items[material.name])
  }

  const handlePointerDown = (event) => {
    event.stopPropagation()
    const name = event.object.material.name
    if (name === 'rubiks_cube') return
    state.current = name
    state.items[state.current] = snap.color
    state.color = snap.color
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.1 - (1 + Math.sin(t / 1.5)) / 20)
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 5
  })

  return (
    <group
      ref={ref}
      dispose={null}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onPointerDown={handlePointerDown}
      onPointerMissed={() => {
        state.current = null
      }}>
      <mesh geometry={nodes.rubiks_cube_1.geometry} material={materials.rubiks_cube} />
      <mesh material-color={snap.items.left_sticker_3} geometry={nodes.rubiks_cube_2.geometry} material={materials.left_sticker_3} />
      <mesh material-color={snap.items.back_sticker_2} geometry={nodes.rubiks_cube_3.geometry} material={materials.back_sticker_2} />
      <mesh material-color={snap.items.bottom_sticker_3} geometry={nodes.rubiks_cube_4.geometry} material={materials.bottom_sticker_3} />
      <mesh material-color={snap.items.left_sticker_2} geometry={nodes.rubiks_cube_5.geometry} material={materials.left_sticker_2} />
      <mesh material-color={snap.items.bottom_sticker_0} geometry={nodes.rubiks_cube_6.geometry} material={materials.bottom_sticker_0} />
      <mesh material-color={snap.items.front_sticker_3} geometry={nodes.rubiks_cube_7.geometry} material={materials.front_sticker_3} />
      <mesh material-color={snap.items.back_sticker_3} geometry={nodes.rubiks_cube_8.geometry} material={materials.back_sticker_3} />
      <mesh material-color={snap.items.bottom_sticker_2} geometry={nodes.rubiks_cube_9.geometry} material={materials.bottom_sticker_2} />
      <mesh material-color={snap.items.bottom_sticker_1} geometry={nodes.rubiks_cube_10.geometry} material={materials.bottom_sticker_1} />
      <mesh material-color={snap.items.front_sticker_2} geometry={nodes.rubiks_cube_11.geometry} material={materials.front_sticker_2} />
      <mesh material-color={snap.items.right_sticker_2} geometry={nodes.rubiks_cube_12.geometry} material={materials.right_sticker_2} />
      <mesh material-color={snap.items.right_sticker_3} geometry={nodes.rubiks_cube_13.geometry} material={materials.right_sticker_3} />
      <mesh material-color={snap.items.left_sticker_0} geometry={nodes.rubiks_cube_14.geometry} material={materials.left_sticker_0} />
      <mesh material-color={snap.items.back_sticker_1} geometry={nodes.rubiks_cube_15.geometry} material={materials.back_sticker_1} />
      <mesh material-color={snap.items.left_sticker_1} geometry={nodes.rubiks_cube_16.geometry} material={materials.left_sticker_1} />
      <mesh material-color={snap.items.front_sticker_0} geometry={nodes.rubiks_cube_17.geometry} material={materials.front_sticker_0} />
      <mesh material-color={snap.items.back_sticker_0} geometry={nodes.rubiks_cube_18.geometry} material={materials.back_sticker_0} />
      <mesh material-color={snap.items.front_sticker_1} geometry={nodes.rubiks_cube_19.geometry} material={materials.front_sticker_1} />
      <mesh material-color={snap.items.right_sticker_1} geometry={nodes.rubiks_cube_20.geometry} material={materials.right_sticker_1} />
      <mesh material-color={snap.items.right_sticker_0} geometry={nodes.rubiks_cube_21.geometry} material={materials.right_sticker_0} />
      <mesh material-color={snap.items.top_sticker_0} geometry={nodes.rubiks_cube_22.geometry} material={materials.top_sticker_0} />
      <mesh material-color={snap.items.top_sticker_3} geometry={nodes.rubiks_cube_23.geometry} material={materials.top_sticker_3} />
      <mesh material-color={snap.items.top_sticker_1} geometry={nodes.rubiks_cube_24.geometry} material={materials.top_sticker_1} />
      <mesh material-color={snap.items.top_sticker_2} geometry={nodes.rubiks_cube_25.geometry} material={materials.top_sticker_2} />
    </group>
  )
}

export default RubiksCube
