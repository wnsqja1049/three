import { Suspense } from "react";

import { Canvas, useThree } from '@react-three/fiber'
import {
	ContactShadows,
	Environment,
	OrbitControls,
	TorusKnot,
} from "@react-three/drei";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";

import './GravityScene.css';

const Scene = () => {
	return (
		<group>
			<RigidBody colliders="hull" position={[-3, 3, 0]}>
				<TorusKnot scale={0.5}>
					<meshPhysicalMaterial />
				</TorusKnot>
			</RigidBody>

			<RigidBody colliders="ball" position={[-1, 3, 0]}>
				<TorusKnot scale={0.5}>
					<meshPhysicalMaterial />
				</TorusKnot>
			</RigidBody>

			<RigidBody colliders="cuboid" position={[1, 3, 0]}>
				<TorusKnot scale={0.5}>
					<meshPhysicalMaterial />
				</TorusKnot>
			</RigidBody>

			<RigidBody colliders="trimesh" position={[3, 3, 0]}>
				<TorusKnot scale={0.5}>
					<meshPhysicalMaterial />
				</TorusKnot>
			</RigidBody>

			{/* Floor */}
			<CuboidCollider position={[0, -2.5, 0]} args={[10, 1, 10]} />

			{/* 바닥 그림자 */}
			<ContactShadows
				scale={20}
				blur={0.4}
				opacity={0.2}
				position={[-0, -1.5, 0]}
			/>

			<OrbitControls />
		</group>
	);
};

function GravityScene() {

	return (
		<>
			<Suspense fallback={<Spinner />}>
				<Canvas shadows>
					<Environment preset="studio" />
					<fog attach="fog" args={["#000", 2, 100]} />

					{/* debug를 넣으면 물체와 Collider의 윤곽선이 보임 */}
					<Physics debug>
						<Scene />
					</Physics>
				</Canvas>
			</Suspense>
		</>
	)
}

const Spinner = () => {

	return (
		<div className="spinner">
			<div className="spinner__text">Loading</div>
		</div>
	);
};

export default GravityScene;