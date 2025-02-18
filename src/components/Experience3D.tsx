/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @format */

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";

const FloatingText = () => {
	const textRef = useRef(null);

	useFrame(({ clock }) => {
		if (textRef.current) {
			// @ts-ignore
			textRef.current.rotation.y =
				Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
			// @ts-ignore
			textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
		}
	});

	return (
		<Center>
			<Text3D
				ref={textRef}
				font='/fonts/helvetiker_regular.typeface.json'
				size={0.5}
				height={0.2}
				curveSegments={12}>
				{`< CODE />`}
				<meshStandardMaterial color='#9333ea' />
			</Text3D>
		</Center>
	);
};

const Experience3D = () => {
	return (
		<div className='h-screen bg-black'>
			<Canvas camera={{ position: [0, 0, 5] }}>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} />
				<FloatingText />
				<OrbitControls enableZoom={false} />
			</Canvas>
		</div>
	);
};

export default Experience3D;
