import { Suspense } from "react";

import { Canvas, useThree } from '@react-three/fiber'
import {
	ContactShadows,
	Environment,
	OrbitControls,
	Text3D
} from "@react-three/drei";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";

import './GravityScene.css';

const Scene = () => {
	return (
		<group>
			<RigidBody colliders="hull" position={[0, 1, 0]}  enabledTranslations={[true, true, false]} enabledRotations={[false, false, true]}>
				<Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
					P
					<meshStandardMaterial color="white"/>
				</Text3D>
			</RigidBody>
			
			<RigidBody colliders="hull" position={[0.4, 1.5, 0]} enabledTranslations={[true, true, false]} enabledRotations={[false, false, true]}>
				<Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
					O
					<meshStandardMaterial color="white"/>
				</Text3D>
			</RigidBody>

			<RigidBody colliders="hull" position={[0.8, 2, 0]} enabledTranslations={[true, true, false]} enabledRotations={[false, false, true]}>
				<Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
					R
					<meshStandardMaterial color="white"/>
				</Text3D>
			</RigidBody>

			<RigidBody colliders="hull" position={[1.2, 2.5, 0]} enabledTranslations={[true, true, false]} enabledRotations={[false, false, true]}>
				<Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
					T
					<meshStandardMaterial color="white"/>
				</Text3D>
			</RigidBody>

			<RigidBody colliders="hull" position={[1.2, 2.5, 0]} enabledTranslations={[true, true, false]} enabledRotations={[false, false, true]}>
				<Text3D letterSpacing={-0.06} size={0.5} font="/Inter_Bold.json">
					T
					<meshStandardMaterial color="white" />
				</Text3D>
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
		</group>
	);
};

function GravityTextScene() {

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

export default GravityTextScene;