import { Gltf, Environment, PointerLockControls, Sky } from '@react-three/drei';

import { Camera } from '../components/Camera';
import { Sphere } from '../components/Sphere';
import { CubeSkyBox } from '../components/NewSkyBox';
import { SkyBox } from '../components/SkyBox';

import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
	CubeTextureLoader,
	CubeCamera,
	WebGLCubeRenderTarget,
	RGBFormat,
	LinearMipmapLinearFilter,
	TextureLoader,
} from "three";
import { OrbitControls } from "@react-three/drei";

function SphereWithSkyboxScene() {
	
	return (
		<>
			<Canvas>
				<Camera />
				<OrbitControls />
				<gridHelper />
				<Sphere />
				<SkyBox />

				
				{/* <GlbSkyBox /> */}


				{/* <PointerLockControls /> */}
				{/* <Sky/> */}
				{/* <ambientLight intensity={1.5} /> */}
				{/* <mesh>
					<boxGeometry args={[1, 1, 1]} />
				</mesh> */}
				{/* <Ground /> */}
			</Canvas>
		</>
	)
}

export default SphereWithSkyboxScene;