/** @format */

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	const projectsRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);

	useGSAP(() => {
		gsap.from(titleRef.current, {
			scrollTrigger: {
				trigger: titleRef.current,
				start: "top 85%", 
				end: "bottom 20%",
				toggleActions: "play none none reverse",
			},
			y: 50, 
			opacity: 0,
			duration: 1,
			ease: "power3.out",
			
		});

		gsap.from(".project-card", {
			scrollTrigger: {
				trigger: ".projects-grid",
				start: "top 90%", 
				end: "bottom 30%",
				toggleActions: "play none none reverse",
			},
			y: 60, 
			opacity: 0,
			stagger: 0.15,
			duration: 1.5,
			ease: "power2.out",
		});

		gsap.utils
			.toArray<HTMLImageElement>(".project-image")
			.forEach((image) => {
				gsap.to(image, {
					scrollTrigger: {
						trigger: image,
						start: "top 95%",
						end: "bottom 10%",
						scrub: true,
						toggleActions: "play none none reverse",
					},
					y: -40,
					ease: "power3.out",
				});
			});
	}, []);
	const projects = [
		{
			title: "AI-Powered HFT Trading",
			description:
				"Machine learning platform for real-time HFT trading and predictive analytics.",
			image: "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
			tech: [ "Python", "Rust"],
			github: "#",
			live: "#",
		},
		{
			title: "E-commerce Platform",
			description:
				"Full-stack e-commerce solution with real-time inventory management and payment processing.",
			image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
			tech: ["React", "Node.js", "MongoDB", "M-pesa"],
			github: "#",
			live: "#",
		},
		{
			title: "Social Network",
			description:
				"Real-time social platform with video streaming and instant messaging capabilities.",
			image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
			tech: ["React", "WebRTC", "Firebase", "Socket.IO"],
			github: "#",
			live: "#",
		},
	];

	return (
		<div
			ref={projectsRef}
			className='min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 relative overflow-hidden'>
			{/* Background Grid */}
			<div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [transform-origin:0_0] [-webkit-mask-image:linear-gradient(black,transparent)]' />

			<div className='container mx-auto px-4 relative z-10'>
				<h2
					ref={titleRef}
					className='text-5xl md:text-7xl font-bold text-center mb-16'>
					<span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500'>
						Featured Projects
					</span>
				</h2>

				<div className='projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							className='project-card group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50'
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 300 }}>
							<div className='relative h-[400px] overflow-hidden'>
								<img
									src={project.image}
									alt={project.title}
									className='project-image absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90' />

								<div className='absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500'>
									<h3 className='text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
										{project.title}
									</h3>
									<p className='text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
										{project.description}
									</p>

									<div className='flex flex-wrap gap-2 mb-4'>
										{project.tech.map((tech, i) => (
											<span
												key={i}
												className='px-3 py-1 text-sm bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30'>
												{tech}
											</span>
										))}
									</div>

									<div className='flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
										<a
											href={project.github}
											className='text-white hover:text-purple-400 transition-colors flex items-center gap-2'
											target='_blank'
											rel='noopener noreferrer'>
											<Github className='w-5 h-5' />
											<span>Code</span>
										</a>
										<a
											href={project.live}
											className='text-white hover:text-purple-400 transition-colors flex items-center gap-2'
											target='_blank'
											rel='noopener noreferrer'>
											<ExternalLink className='w-5 h-5' />
											<span>Live Demo</span>
										</a>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Decorative Elements */}
			<div className='absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full filter blur-[100px] animate-pulse' />
			<div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-pink-600/10 rounded-full filter blur-[100px] animate-pulse' />
		</div>
	);
};

export default Projects;
