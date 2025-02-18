/** @format */

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, ExternalLink } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	const projectsRef = useRef(null);
	const titleRef = useRef(null);

	useGSAP(() => {
		if (!titleRef.current || !projectsRef.current) return;

		gsap.fromTo(
			titleRef.current,
			{
				y: 50,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: titleRef.current,
					start: "top 100%",
					end: "bottom 20%",
					scrub: true,
					markers: true,
				},
			}
		);

		gsap.fromTo(
			projectsRef.current,
			{
				y: 50,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: projectsRef.current,
					start: "top 75%",
					end: "bottom 20%",
					scrub: true,
				},
			}
		);
	});

	const projects = [
		{
			title: "AI-PowereHFT Trading",
			description:
				"Machine learning platform for real-time HFT trading and predictive analytics.",
			image: "https://www.waterstechnology.com/sites/default/files/styles/landscape_750_463/public/2023-11/GettyImages-1393224925.jpg.webp?itok=kcpLIMQr",
			tech: ["Python", "Rust"],
			github: "#",
			live: "#",
		},
		{
			title: "Garden Florist",
			description:
				"Full-stack e-commerce solution with real-time inventory management and payment processing.",
			image: "https://res.cloudinary.com/dipqldzry/image/upload/v1733244986/brazilian%20jasmine.jpg",
			tech: ["React", "Node.js", "MongoDB", "M-pesa", "RabbitMQ"],
			github: "#",
			live: "https://garden-florist-v3.vercel.app/",
		},
		{
			title: "Medrin Jobs",
			description:
				"Full-stack job board with real-time search and filtering capabilities.",
			image: "https://images.unsplash.com/photo-1577100078641-e92b0a906760?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			tech: [
				"React",
				"Node.js",
				"MongoDB",
				"PostgreSQL",
				"Stripe",
				"M-pesa",
			],
			github: "https://github.com/ProfessorMwangi/medrin-jobs-frontend-v3",
			live: "https://medrin-jobs-frontend.vercel.app/",
		},
		{
			title: "Trigger Influence",
			description:
				"Advertising platform for influencers to manage their content and reach their target audience.",
			image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9ubGluZSUyMGFkdmVydGlzaW5nfGVufDB8fDB8fHww",
			tech: ["React", "Node.js", "MongoDB"],
			github: "#",
			live: "https://triggerinfluence.netlify.app/",
		},
	];

	return (
		<div
			ref={projectsRef}
			className='font-Monte min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 relative overflow-hidden'>
			<div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [transform-origin:0_0] [-webkit-mask-image:linear-gradient(black,transparent)]' />

			<div className='container mx-auto px-4 relative z-10'>
				<h2
					ref={titleRef}
					className='text-5xl md:text-7xl font-bold text-center mb-16'>
					<span className='bg-clip-text font-Quick text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500'>
						Featured Projects
					</span>
				</h2>

				<div className='projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							className='project-card group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50'
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 100 }}>
							<div className='relative h-[400px] overflow-hidden'>
								<img
									src={project.image}
									alt={project.title}
									className='project-image absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90' />

								<div className='absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500'>
									<h3 className='font-Quick text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors'>
										{project.title}
									</h3>
									<p className='text-gray-100 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
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
		</div>
	);
};

export default Projects;
