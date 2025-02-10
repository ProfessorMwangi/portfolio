/** @format */

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Rocket, Brain } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const headingRef = useRef<HTMLHeadingElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(headingRef.current, {
				y: 100,
				opacity: 0,
				duration: 1.5,
				ease: "power4.out",
			});

			gsap.to(".skill-card", {
				scrollTrigger: {
					trigger: ".skills-section",
					start: "top center",
					end: "bottom center",
					scrub: 1,
				},
				y: 0,
				opacity: 1,
				stagger: 0.2,
				duration: 1,
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} className='min-h-screen'>
			<div className='h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-black'>
				<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center z-10 px-4'>
					<h1
						ref={headingRef}
						className='text-6xl md:text-8xl font-bold text-white mb-6'>
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
							Creative Developer
						</span>
					</h1>
					<p className='text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto'>
						Crafting digital experiences through code and creativity
					</p>
				</motion.div>
			</div>

			<div className='skills-section py-20 bg-black'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{
								icon: <Code2 className='w-12 h-12' />,
								title: "Full Stack Development",
								description:
									"Building robust applications from front to back",
							},
							{
								icon: <Brain className='w-12 h-12' />,
								title: "Problem Solving",
								description:
									"Turning complex challenges into elegant solutions",
							},
							{
								icon: <Rocket className='w-12 h-12' />,
								title: "Performance Optimization",
								description:
									"Creating lightning-fast digital experiences",
							},
						].map((skill, index) => (
							<motion.div
								key={index}
								className='skill-card opacity-0 translate-y-20 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl'
								whileHover={{ scale: 1.05 }}
								transition={{ type: "spring", stiffness: 300 }}>
								<div className='text-purple-400 mb-4'>
									{skill.icon}
								</div>
								<h3 className='text-2xl font-bold text-white mb-4'>
									{skill.title}
								</h3>
								<p className='text-gray-400'>
									{skill.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
