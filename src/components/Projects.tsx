/** @format */

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
	const projectsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".project-card", {
				scrollTrigger: {
					trigger: projectsRef.current,
					start: "top center",
					end: "bottom center",
					scrub: 1,
				},
				y: 100,
				opacity: 0,
				stagger: 0.3,
			});
		}, projectsRef);

		return () => ctx.revert();
	}, []);

	const projects = [
		{
			title: "AI-Powered Analytics",
			description: "Machine learning platform for predictive analytics",
			image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
			tech: ["React", "Python", "TensorFlow"],
		},
		{
			title: "E-commerce Platform",
			description:
				"Full-stack e-commerce solution with real-time inventory",
			image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
			tech: ["Next.js", "Node.js", "MongoDB"],
		},
		{
			title: "Social Network",
			description: "Real-time social platform with video streaming",
			image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
			tech: ["React", "WebRTC", "Firebase"],
		},
	];

	return (
		<div ref={projectsRef} className='min-h-screen bg-black py-20'>
			<div className='container mx-auto px-4'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-4xl md:text-6xl font-bold text-white mb-16 text-center'>
					Featured Projects
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							className='project-card group relative overflow-hidden rounded-xl'
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 300 }}>
							<div className='relative h-[400px] overflow-hidden'>
								<img
									src={project.image}
									alt={project.title}
									className='absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80' />
								<div className='absolute bottom-0 left-0 right-0 p-6'>
									<h3 className='text-2xl font-bold text-white mb-2'>
										{project.title}
									</h3>
									<p className='text-gray-300 mb-4'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-2 mb-4'>
										{project.tech.map((tech, i) => (
											<span
												key={i}
												className='px-3 py-1 text-sm bg-purple-600 text-white rounded-full'>
												{tech}
											</span>
										))}
									</div>
									<div className='flex gap-4'>
										<a
											href='#'
											className='text-white hover:text-purple-400 transition-colors'>
											<Github className='w-6 h-6' />
										</a>
										<a
											href='#'
											className='text-white hover:text-purple-400 transition-colors'>
											<ExternalLink className='w-6 h-6' />
										</a>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
