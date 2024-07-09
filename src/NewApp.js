import './App.css';

import { Gltf, Environment, PointerLockControls, Sky } from '@react-three/drei';

import { Camera } from './Camera';
import { Sphere } from './Sphere';
// import { Ground } from './Ground';
import { SkyBox } from './SkyBox';

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
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

function App() {
	return (
		<>
			<Canvas>
				<Camera />
				<Sphere />
				<SkyBox />
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

export default App;