/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 python.gltf 
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/python-8be4a2579dd84586b915068e475073ee
Title: Python
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF("../python/python.gltf")
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.Python_Python_0.geometry} material={materials.Python} rotation={[-Math.PI / 2, 0, 0]} scale={50}/>
      </group>
    </group>
  )
}

useGLTF.preload('../python/python.gltf')
