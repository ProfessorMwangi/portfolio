/** @format */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "./Loading";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import {
	SiJavascript,
	SiPython,
	SiReact,
	SiThreedotjs,
	SiGreensock,
	SiNodedotjs,
	SiMongodb,
	SiPostgresql,
	SiRabbitmq,
	SiRust,
	SiFlask,
	SiSocketdotio,
	SiTypescript,
	SiTailwindcss,
	SiDocker,
	SiGit,
	SiNginx,
	SiWordpress,
	SiPhp,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

interface Skill {
	name: string;
	icon: JSX.Element;
	description: string;
	status: "mastered" | "learning";
	category: string;
	color: string;
}

const skills: Skill[] = [
	{
		name: "JavaScript",
		icon: <SiJavascript className='w-8 h-8' />,
		description: "Modern ES6+, Async Programming",
		status: "mastered",
		category: "Languages",
		color: "#F7DF1E",
	},
	{
		name: "Python",
		icon: <SiPython className='w-8 h-8' />,
		description: "Automation, Backend",
		status: "mastered",
		category: "Languages",
		color: "#3776AB",
	},
	{
		name: "TypeScript",
		icon: <SiTypescript className='w-8 h-8' />,
		description: "Strongly Typed Language",
		status: "mastered",
		category: "Languages",
		color: "#007ACC",
	},
	{
		name: "React",
		icon: <SiReact className='w-8 h-8' />,
		description: "Component Architecture, Hooks, State Management",
		status: "mastered",
		category: "Frontend",
		color: "#61DAFB",
	},
	{
		name: "Three.js & R3F",
		icon: <SiThreedotjs className='w-8 h-8' />,
		description: "3D Graphics, WebGL, Animations",
		status: "mastered",
		category: "Frontend",
		color: "#000000",
	},
	{
		name: "GSAP",
		icon: <SiGreensock className='w-8 h-8' />,
		description: "Advanced Animations, ScrollTrigger",
		status: "mastered",
		category: "Frontend",
		color: "#88CE02",
	},
	{
		name: "Node.js",
		icon: <SiNodedotjs className='w-8 h-8' />,
		description: "API Development, Real-time Applications",
		status: "mastered",
		category: "Backend",
		color: "#339933",
	},
	{
		name: "MongoDB",
		icon: <SiMongodb className='w-8 h-8' />,
		description: "NoSQL, Aggregation Pipeline",
		status: "mastered",
		category: "Database",
		color: "#47A248",
	},
	{
		name: "PostgreSQL",
		icon: <SiPostgresql className='w-8 h-8' />,
		description: "Relational DB, Complex Queries",
		status: "mastered",
		category: "Database",
		color: "#336791",
	},
	{
		name: "RabbitMQ",
		icon: <SiRabbitmq className='w-8 h-8' />,
		description: "Message Queues, Event-Driven Architecture",
		status: "mastered",
		category: "Infrastructure",
		color: "#FF6600",
	},
	{
		name: "Rust",
		icon: <SiRust className='w-8 h-8' />,
		description: "Systems Programming, WebAssembly",
		status: "mastered",
		category: "Languages",
		color: "#000000",
	},
	{
		name: "Flask",
		icon: <SiFlask className='w-8 h-8' />,
		description: "Python Web Framework, RESTful APIs, Microservices",
		status: "mastered",
		category: "Backend",
		color: "#000000",
	},
	{
		name: "Actix",
		icon: <TbBrandReactNative className='w-8 h-8' />,
		description: "Rust Web Framework, High-Performance Server",
		status: "learning",
		category: "Backend",
		color: "#DD3B2B",
	},
	{
		name: "Socket.IO",
		icon: <SiSocketdotio className='w-8 h-8' />,
		description: "Real-time Bidirectional Communication",
		status: "mastered",
		category: "Infrastructure",
		color: "#010101",
	},
	{
		name: "Tailwind CSS",
		icon: <SiTailwindcss className='w-8 h-8' />,
		description: "Utility-First CSS Framework",
		status: "mastered",
		category: "Frontend",
		color: "#06B6D4",
	},
	{
		name: "Git",
		icon: <SiGit className='w-8 h-8' />,
		description: "Version Control, Collaboration",
		status: "mastered",
		category: "DevOps",
		color: "#F05032",
	},
	{
		name: "Docker",
		icon: <SiDocker className='w-8 h-8' />,
		description: "Containerization, Orchestration",
		status: "mastered",
		category: "DevOps",
		color: "#0DB7ED",
	},

	{
		name: "Nginx",
		icon: <SiNginx className='w-8 h-8' />,
		description: "Reverse Proxy, Load Balancing",
		status: "mastered",
		category: "DevOps",
		color: "#000000",
	},
	{
		name: "WordPress",
		icon: <SiWordpress className='w-8 h-8' />,
		description: "Content Management System, Custom Themes",
		status: "mastered",
		category: "CMS",
		color: "#21759B",
	},
	{
		name: "PHP",
		icon: <SiPhp className='w-8 h-8' />,
		description: "Server-Side Scripting, Web Development",
		status: "mastered",	
		category: "Languages",
		color: "#777BB3",
	},
	{
		name: "Axum",
		icon: <SiRust className='w-8 h-8' />,
		description: "Rust Web Framework, High-Performance Server",
		status: "mastered",
		category: "Backend",
		color: "#DD3B2B",
	}
];

const Skills = () => {
	const [loading, setLoading] = useState(true);
	const [selectedCategory, setSelectedCategory] =
		useState<string>("Languages");

	const [init, setInit] = useState(false);
	const [activeCard, setActiveCard] = useState<number | null>(null);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});

		setTimeout(() => setLoading(false), 2000);
	}, []);

	const categories = Array.from(
		new Set(skills.map((skill) => skill.category))
	);
	const filteredSkills = selectedCategory
		? skills.filter((skill) => skill.category === selectedCategory)
		: skills;

	const particlesOptions = {
		particles: {
			color: {
				value: "#9333ea",
			},
			links: {
				color: "#9333ea",
				distance: 150,
				enable: true,
				opacity: 0.2,
				width: 1,
			},
			move: {
				enable: true,
				speed: 1,
			},
			number: {
				value: 40,
			},
			opacity: {
				value: 0.3,
			},
			size: {
				value: { min: 1, max: 3 },
			},
		},
	};

	return (
		<>
			<AnimatePresence mode='popLayout'>
				{loading && <Loading />}
			</AnimatePresence>

			<motion.div
				id='skills'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 2 }}
				className='min-h-screen bg-[#0a0a0a] text-white py-20 relative overflow-hidden'>
				{init && (
					<Particles
						options={particlesOptions}
						className='absolute inset-0'
					/>
				)}

				<div className='relative z-10 font-Monte '>
					<motion.h2
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 2.2 }}
						className='text-4xl md:text-7xl sm:text-5xl font-bold text-center mb-8 md:mb-16 lg:mb-16'>
						<span className='bg-clip-text font-Quick text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 '>
							Technical Arsenal
						</span>
					</motion.h2>

					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 2.4 }}
						className='flex flex-wrap justify-center gap-4 mb-12 px-4 sm:text-sm sm:mb-8'>
						{categories.map((category) => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 py-2 rounded-full transition-all text-[13px] md:text-base lg:text-base ${
									selectedCategory === category
										? "bg-purple-600 text-white"
										: "bg-gray-800 text-gray-300 hover:bg-gray-700"
								}`}>
								{category}
							</button>
						))}
					</motion.div>

					<div className='container mx-auto px-4'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 perspective-1000'>
							<AnimatePresence mode='wait'>
								{filteredSkills.map((skill, index) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, rotateY: -90 }}
										animate={{
											opacity: 1,
											rotateY: 0,
											transition: {
												delay: index * 0.1,
												type: "spring",
												stiffness: 100,
											},
										}}
										exit={{ opacity: 0, rotateY: 90 }}
										className={`card-container cursor-pointer ${
											activeCard === index ? "active" : ""
										}`}
										onClick={() =>
											setActiveCard(
												activeCard === index
													? null
													: index
											)
										}>
										<div className='card'>
											<div className='card-front'>
												<div
													className='relative h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 
                                  transform transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 group overflow-hidden'>
													<div
														className='absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl'
													/>

													<div className='relative z-10 h-full flex flex-col'>
														<div className='flex items-center justify-between mb-4'>
															<div
																className='p-4 rounded-lg transform transition-transform duration-300 group-hover:scale-110 
                                        hover:rotate-12'
																style={{
																	backgroundColor: `${skill.color}20`,
																}}>
																{React.cloneElement(
																	skill.icon,
																	{
																		style: {
																			color: skill.color,
																		},
																		className:
																			"w-12 h-12",
																	}
																)}
															</div>
															{skill.status ===
																"learning" && (
																<span
																	className='px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 
                                              border border-purple-500/30'>
																	Learning in
																	Progress
																</span>
															)}
														</div>

														<h3
															className='text-2xl font-bold mb-3 text-white group-hover:text-purple-400 
                                        transition-colors'>
															{skill.name}
														</h3>
														<p className='text-gray-400 text-sm flex-grow'>
															{skill.description}
														</p>

														<div className='mt-4'>
															<span
																className='px-3 py-1.5 text-sm rounded-md bg-gray-700/50 text-gray-300 
                                            inline-block'>
																{skill.category}
															</span>
														</div>

														<div
															className='absolute bottom-4 right-4 text-purple-400 opacity-50 
                                          group-hover:opacity-100 transition-opacity'>
															Click to flip
														</div>
													</div>
												</div>
											</div>
											<div className='card-back'>
												<div
													className='h-full bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border 
                                    border-gray-700/50'>
													<div className='h-full flex flex-col justify-center items-center text-center'>
														<div className='mb-6 transform hover:scale-110 transition-transform'>
															{React.cloneElement(
																skill.icon,
																{
																	style: {
																		color: skill.color,
																	},
																	className:
																		"w-16 h-16",
																}
															)}
														</div>
														<h4 className='text-xl font-bold mb-4 text-purple-400'>
															Experience Level
														</h4>
														<div className='w-full bg-gray-700 rounded-full h-2 mb-6'>
															<div
																className='bg-purple-500 h-2 rounded-full transition-all duration-1000'
																style={{
																	width:
																		skill.status ===
																		"mastered"
																			? "100%"
																			: "60%",
																}}
															/>
														</div>
														<p className='text-gray-300 mb-4'>
															{skill.status ===
															"mastered"
																? "Mastered and actively using"
																: "Currently expanding knowledge"}
														</p>
														<button
															className='mt-4 px-6 py-2 rounded-full bg-purple-600 text-white 
                                      hover:bg-purple-500 transition-colors'
															onClick={(e) => {
																e.stopPropagation();
																setActiveCard(
																	null
																);
															}}>
															Back to Front
														</button>
													</div>
												</div>
											</div>
										</div>
									</motion.div>
								))}
							</AnimatePresence>
						</div>
					</div>
				</div>

				<div className='absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full filter blur-[100px] animate-pulse' />
				<div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-pink-600/10 rounded-full filter blur-[100px] animate-pulse' />
			</motion.div>
		</>
	);
};

export default Skills;
