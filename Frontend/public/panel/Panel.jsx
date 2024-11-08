/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 panel.gltf 
Author: Xavi Pujadas (https://sketchfab.com/XaviPujadas)
License: CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/)
Source: https://sketchfab.com/3d-models/sci-fi-panels-c1243c5a9e954c539b2c181c886dad62
Title: Sci-Fi Panels
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'
export default function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('./panel/panel.gltf')
  const { actions ,names} = useAnimations(animations, group)
  useEffect(() => {
    actions[names[0]].play()
  },[])
  return (
    <group ref={group} {...props} dispose={null} scale={0.016}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="ff5b6b89bb5645798bba547b0e63daf2fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Plane001" position={[4.05, 82.828, -56.52]} scale={0}>
                  <mesh name="Plane001_Material_#2_0" geometry={nodes['Plane001_Material_#2_0'].geometry} material={materials.Material_2} />
                </group>
                <group name="Sphere002" position={[162.859, 50.888, 14.684]} rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="Sphere002_Material_#3_0" geometry={nodes['Sphere002_Material_#3_0'].geometry} material={materials.Material_3} />
                </group>
                <group name="Plane005" position={[-162.396, 89.748, -57.101]} scale={0}>
                  <mesh name="Plane005_Material_#4_0" geometry={nodes['Plane005_Material_#4_0'].geometry} material={materials.Material_4} />
                </group>
                <group name="Plane006" position={[162.365, 56.763, -57.216]} scale={0}>
                  <mesh name="Plane006_Material_#7_0" geometry={nodes['Plane006_Material_#7_0'].geometry} material={materials.Material_7} />
                </group>
                <group name="Plane007" position={[-164.039, 10.593, 1.279]} scale={0}>
                  <mesh name="Plane007_Material_#9_0" geometry={nodes['Plane007_Material_#9_0'].geometry} material={materials.Material_9} />
                </group>
                <group name="Plane012" position={[33.501, 3.566, 12.886]} rotation={[-1.134, 0, 0]}>
                  <group name="Object_24" position={[1.439, 0.139, -0.065]}>
                    <mesh name="Plane012_Material_#6_0" geometry={nodes['Plane012_Material_#6_0'].geometry} material={materials.Material_6} />
                  </group>
                </group>
                <group name="Plane019" position={[-355.134, 3.566, 12.886]} rotation={[-1.134, 0, 0]} />
                <group name="Plane020" position={[-352.622, 3.566, 12.886]} rotation={[-1.134, 0, 0]} />
                <group name="Plane021" position={[17.317, 3.566, 12.886]} rotation={[-1.134, 0, 0]}>
                  <group name="Object_29" position={[1.439, 0.139, -0.065]}>
                    <mesh name="Plane021_Material_#6_0" geometry={nodes['Plane021_Material_#6_0'].geometry} material={materials.Material_6} />
                  </group>
                </group>
                <group name="Plane022" position={[3.891, 2.765, 14.602]} rotation={[-1.134, 0, 0]} scale={0.549}>
                  <group name="Object_32" position={[1.439, 0.139, -0.065]}>
                    <mesh name="Plane022_Material_#6_0" geometry={nodes['Plane022_Material_#6_0'].geometry} material={materials.Material_6} />
                  </group>
                </group>
                <group name="Plane023" position={[-5.187, 2.765, 14.602]} rotation={[-1.134, 0, 0]} scale={0.549}>
                  <group name="Object_35" position={[1.439, 0.139, -0.065]}>
                    <mesh name="Plane023_Material_#6_0" geometry={nodes['Plane023_Material_#6_0'].geometry} material={materials.Material_6} />
                  </group>
                </group>
                <group name="Plane024" position={[70.368, 10.624, -2.251]} rotation={[-1.134, 0, 0]}>
                  <group name="Object_38" position={[1.439, 0.139, -0.065]}>
                    <mesh name="Plane024_Material_#6_0" geometry={nodes['Plane024_Material_#6_0'].geometry} material={materials.Material_6} />
                  </group>
                </group>
                <group name="Plane025" position={[84.09, 11.123, -3.322]} rotation={[-1.134, 0, 0]} scale={0.549}>
                  <group name="Object_41" position={[1.439, 0.139, -0.065]}>
                    <mesh name="Plane025_Material_#6_0" geometry={nodes['Plane025_Material_#6_0'].geometry} material={materials.Material_6} />
                  </group>
                </group>
                <group name="Paneles_Low" position={[0, 1.443, 0.19]} rotation={[-1.134, 0, 0]}>
                  <mesh name="Paneles_Low__0" geometry={nodes.Paneles_Low__0.geometry} material={materials.Paneles_Low__0} />
                </group>
                <group name="Sphere004" position={[35.724, 4.522, 14.621]} rotation={[2.094, 0, 0]} />
                <group name="Plane008" position={[-52.572, 8.688, 0.391]} rotation={[-1.134, 0, 0]}>
                  <mesh name="Plane008_Material_#8_0" geometry={nodes['Plane008_Material_#8_0'].geometry} material={materials.Material_8} />
                </group>
                <group name="Plane009" position={[15.028, 16.376, -11.121]} rotation={[-1.134, 0, 0]}>
                  <mesh name="Plane009_Material_#10_0" geometry={nodes['Plane009_Material_#10_0'].geometry} material={materials.Material_10} />
                </group>
                <group name="Plane010" position={[81.558, 20.582, -21.527]} rotation={[-1.134, 0, 0]}>
                  <mesh name="Plane010_Material_#11_0" geometry={nodes['Plane010_Material_#11_0'].geometry} material={materials.Material_11} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./panel/panel.gltf')
