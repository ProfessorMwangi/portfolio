/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @format */

import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, Stars, Sparkles } from "@react-three/drei";
import gsap from "gsap";
import { motion } from "framer-motion";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

const HeroText = ({ scaleFactor }: { scaleFactor: number }) => {
	const textRefs = {
		intro: useRef(null),
		name: useRef(null),
		title: useRef(null),
		description: useRef(null),
	};

	useEffect(() => {
		const tl = gsap.timeline();
		// @ts-ignore
		tl.from(textRefs.intro.current?.scale, {
			x: 0,
			y: 0,
			z: 0,
			duration: 1.8,
			ease: "elastic.out(1, 0.5)",
		});
		tl.from(
			// @ts-ignore
			textRefs.name.current?.scale,
			{
				x: 0,
				y: 0,
				z: 0,
				duration: 1.5,
				ease: "elastic.out(1, 0.5)",
			},
			"-=0.5"
		);
		//@ts-ignore
		gsap.to(textRefs.name.current?.matrix, {
			y: Math.PI * 2,
			duration: 3,
			repeat: -1,
			ease: "power2.inOut",
		});

		tl.from(
			// @ts-ignore
			textRefs.title.current?.scale,
			{
				x: 0,
				y: 0,
				z: 0,
				duration: 1.8,
				ease: "bounce.out",
			},
			"-=0.7"
		);

		gsap.to(textRefs.title.current, {
			// @ts-ignore
			color: ["#ffcc00", "#ff0000", "#00ffcc", "#ffffff"],
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});

		tl.from(
			// @ts-ignore
			textRefs.description.current?.scale,
			{
				x: 0,
				y: 0,
				z: 0,
				duration: 1.8,
				ease: "back.out(1.7)",
			},
			"-=0.8"
		);

		const descriptionText = textRefs.description.current;
		if (descriptionText) {
			// @ts-ignore
			gsap.to(descriptionText.children, {
				y: 20,
				duration: 1.8,
				stagger: 0.05,
				ease: "power3.out",
			});
		}
	}, []);

	return (
		<>
			{/* "Hi, my name is" */}
			<Text
				ref={textRefs.intro}
				fontSize={0.3 * scaleFactor}
				color='#ffffff'
				position={[0, 2 * scaleFactor, 0]}
				font='/fonts/Poppins-Regular.ttf'
				textAlign='center'>
				Hi, my name is
			</Text>

			{/* "Victor Mwangi" */}
			<Text
				ref={textRefs.name}
				fontSize={0.7 * scaleFactor}
				color='#00ffcc'
				position={[0, 1.3 * scaleFactor, 0]}
				font='/fonts/LobsterTwo-Regular.ttf'
				textAlign='center'>
				Victor Mwangi
			</Text>

			{/* "Software Engineer" */}
			<Text
				ref={textRefs.title}
				fontSize={0.7 * scaleFactor}
				color='#ffcc00'
				position={[0, 0.5 * scaleFactor, 0]}
				font='/fonts/Rajdhani-Regular.ttf'
				textAlign='center'>
				Software Engineer | Full-Stack Developer
			</Text>

			{/* Description */}
			<Text
				ref={textRefs.description}
				fontSize={0.25 * scaleFactor}
				color='#ffffff'
				position={[0, -0.8 * scaleFactor, 0]}
				lineHeight={1.5}
				font='/fonts/Inter-Regular.ttf'
				maxWidth={9 * scaleFactor}
				textAlign='center'>
				I design and develop scalable applications, fine-tune
				performance, and craft efficient solutions to complex
				challenges. Passionate about cloud computing, AI, BlockChain and
				algorithmic bots, I thrive on innovation and pushing the
				boundaries of technology.
			</Text>
		</>
	);
};

const ParticleBackground = () => {
	return (
		<>
			<Stars
				radius={100}
				depth={50}
				count={8000}
				factor={4}
				saturation={0}
				fade
				speed={1}
			/>
			<Sparkles
				count={300}
				scale={10}
				size={2}
				speed={0.5}
				color='#ffffff'
			/>
			<Sparkles
				count={100}
				scale={10}
				size={2}
				speed={0.5}
				color='aqua'
			/>
			<Sparkles
				count={100}
				scale={10}
				size={2}
				speed={0.5}
				color='orange'
			/>
		</>
	);
};

// 3D Scene
const Scene = ({ scaleFactor }: { scaleFactor: number }) => {
	return (
		<Canvas camera={{ position: [0, 0, 10 * scaleFactor], fov: 50 }}>
			<ambientLight intensity={0.5} />
			<pointLight
				position={[10, 10, 10]}
				intensity={0.5}
				color='#ffffff'
			/>
			<ParticleBackground />
			<HeroText scaleFactor={scaleFactor} />
		</Canvas>
	);
};

const HeroSection = () => {
	const [scaleFactor, setScaleFactor] = useState(1);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width < 768) {
				setScaleFactor(0.6);
			} else if (width < 1024) {
				setScaleFactor(0.8);
			} else {
				setScaleFactor(1);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<motion.div
			className='hero-section'
			style={{
				width: "100vw",
				height: "100vh",
				position: "relative",
				backgroundColor: "#000000",
			}}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}>
			<Scene scaleFactor={scaleFactor} />
			<motion.div
				style={{
					position: "absolute",
					bottom: "20px",
					left: "50%",
					transform: "translateX(-50%)",
					color: "#ffffff",
					fontSize: `${1.2 * scaleFactor}rem`,
				}}
				initial={{ y: 20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 2, duration: 1 }}>
				Scroll Down
			</motion.div>
		</motion.div>
	);
};

export default HeroSection;
