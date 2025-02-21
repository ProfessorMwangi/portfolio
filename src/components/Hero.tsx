/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @format */

import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text, Stars, Sparkles, Html } from "@react-three/drei";
import gsap from "gsap";
import { motion } from "framer-motion";
import { TextPlugin } from "gsap/TextPlugin";
import TextTransition, { presets } from "react-text-transition";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);

const HeroText = ({ scaleFactor }: { scaleFactor: number }) => {
	const textRefs = {
		intro: useRef(null),
		name: useRef(null),
		title: useRef(null),
		description: useRef(null),
	};

	const textTransitionRef = useRef(null);
const [showText, setShowText] = useState(false);

	const isSmallScreen = window.innerWidth < 400;
	const TEXTS = ["Software Engineer", "Full-Stack Developer"];
	const [index, setIndex] = useState(0);

	useGSAP(() => {
		const tl = gsap.timeline();

		//@ts-ignore
		tl.from(textRefs.intro.current?.scale, {
			x: 0,
			y: 0,
			z: 0,
			duration: 1.8,
			ease: "elastic.out(1, 0.5)",
		});

		// Animate name text
		tl.from(
			//@ts-ignore
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
			//@ts-ignore
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
			//@ts-ignore
			color: ["#ffcc00", "#ff0000", "#00ffcc", "#ffffff"],
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
		});

		tl.from(
			//@ts-ignore
			textRefs.description.current?.scale,
			{
				x: 0,
				y: 0,
				z: 0,
				duration: 1.8,
				ease: "back.out(1.7)",
			},
			"-=0.4"
		);

 		if (isSmallScreen && textTransitionRef.current) {
			tl.fromTo(
				textTransitionRef.current,
				{ opacity: 0, y: 10 }, 
				{ opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
				"-=1"
			);
		}
	}, [isSmallScreen]);

	useEffect(() => {
		if (!isSmallScreen) return;

		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
		}, 5000);

		return () => clearInterval(interval);
		
	}, [isSmallScreen]);useEffect(() => {
		if (isSmallScreen) {
			setTimeout(() => {
				setShowText(true);
			}, 1400);
		}
	}, [isSmallScreen]);

	return (
		<>
			<Text
				ref={textRefs.intro}
				fontSize={0.3 * scaleFactor}
				font='/fonts/Poppins-Regular.ttf'
				color='#ffffff'
				position={[0, 2 * scaleFactor, 0]}
				textAlign='center'>
				Hi, my name is
			</Text>

			<Text
				ref={textRefs.name}
				fontSize={0.7 * scaleFactor}
				font='/fonts/LobsterTwo-Regular.ttf'
				color='#00ffcc'
				position={[0, 1.3 * scaleFactor, 0]}
				textAlign='center'>
				Victor Mwangi
			</Text>

			<Text
				ref={textRefs.title}
				fontSize={isSmallScreen ? 0.5 * scaleFactor : 0.7 * scaleFactor}
				font='/fonts/Rajdhani-Regular.ttf'
				color='#ffcc00'
				position={[
					0,
					isSmallScreen ? 0.3 * scaleFactor : 0.5 * scaleFactor,
					0,
				]}
				textAlign='center'>
				{isSmallScreen ? (
					<Html position={[0, 0, 0]} center>
						<div
							style={{
								opacity: showText ? 1 : 0,
								transform: showText
									? "translateY(0px)"
									: "translateY(12px)",
								transition:
									"opacity 1.8s ease-out, transform 1.5s ease-out",
							}}>
							<TextTransition
								style={{
									fontFamily: `'Rajdhani', sans-serif`,
									color: "#ffcc00",
									whiteSpace: "nowrap",
									display: "inline-block",
									fontSize: "1.5rem",
									textAlign: "center",
									width: "200px",
								}}
								springConfig={presets.gentle}>
								{TEXTS[index]}
							</TextTransition>
						</div>
					</Html>
				) : (
					"Software Engineer | Full-Stack Developer"
				)}
			</Text>

			<Text
				ref={textRefs.description}
				fontSize={
					isSmallScreen ? 0.18 * scaleFactor : 0.25 * scaleFactor
				}
				color='#ffffff'
				position={[
					0,
					isSmallScreen ? -1 * scaleFactor : -0.5 * scaleFactor,
					0,
				]}
				lineHeight={1.4}
				font='/fonts/Inter-Regular.ttf'
				maxWidth={isSmallScreen ? 4 * scaleFactor : 9.5 * scaleFactor}
				textAlign='center'>
				I design and develop scalable applications, fine-tune
				performance, and craft efficient solutions to complex
				challenges. Passionate about cloud computing, AI, Blockchain,
				and algorithmic bots, I thrive on innovation and pushing the
				boundaries of technology.
			</Text>
		</>
	);
};

const ParticleBackground = () => (
	<>
		<Stars radius={100} depth={50} count={8000} factor={4} fade speed={1} />
		<Sparkles count={300} scale={10} size={2} speed={0.5} color='#ffffff' />
	</>
);

const Scene = ({ scaleFactor }: { scaleFactor: number }) => (
	<Canvas camera={{ position: [0, 0, 10 * scaleFactor], fov: 50 }}>
		<ambientLight intensity={0.5} />
		<pointLight position={[10, 10, 10]} intensity={0.5} color='#ffffff' />
		<ParticleBackground />
		<HeroText scaleFactor={scaleFactor} />
	</Canvas>
);

const HeroSection = () => {
	const [scaleFactor, setScaleFactor] = useState(1);

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width < 480) {
				setScaleFactor(0.5);
			} else if (width < 768) {
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
			id="hero"
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
