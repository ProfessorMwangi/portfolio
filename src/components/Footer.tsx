/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	Github,
	Linkedin,
	Mail,
	Send,
	MapPin,
	Phone,
} from "lucide-react";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [subscribeStatus, setSubscribeStatus] = useState<
		"idle" | "success" | "error"
	>("idle");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubscribe = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

		setIsSubmitting(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setSubscribeStatus("success");
			setEmail("");
		} catch (error) {
			setSubscribeStatus("error");
		} finally {
			setIsSubmitting(false);
			setTimeout(() => setSubscribeStatus("idle"), 3000);
		}
	};

	const socialLinks = [
		{ icon: <Github className='w-5 h-5' />, href: "#", label: "GitHub" },
		{
			icon: <Linkedin className='w-5 h-5' />,
			href: "#",
			label: "LinkedIn",
		},

		{ icon: <Mail className='w-5 h-5' />, href: "#", label: "Email" },
	];

	const quickLinks = [
		{ label: "About", href: "#" },
		{ label: "Projects", href: "#projects" },
		{ label: "Skills", href: "#skills" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<footer className='relative bg-black border-t border-gray-800 font-Monte'>
			<div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />

			<div className='relative z-10'>
				{/* Main Footer Content */}
				<div className='container mx-auto px-4 py-12'>
					<div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{/* Brand Section */}
						<div className='space-y-4'>
							<h3 className='text-2xl font-Glitch bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text'>
								Victor Mwangi
							</h3>
							<p className='text-gray-400 max-w-xs'>
								Crafting digital experiences through innovative
								solutions and cutting-edge technology.
							</p>
							<div className='flex space-x-4'>
								{socialLinks.map((link) => (
									<motion.a
										key={link.label}
										href={link.href}
										target='_blank'
										rel='noopener noreferrer'
										className='text-gray-400 hover:text-purple-400 transition-colors'
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}>
										{link.icon}
									</motion.a>
								))}
							</div>
						</div>

						{/* Quick Links */}
						<div>
							<h3 className='text-white font-semibold mb-4'>
								Quick Links
							</h3>
							<ul className='space-y-2'>
								{quickLinks.map((link) => (
									<li key={link.label}>
										<a
											href={link.href}
											className='text-gray-400 hover:text-purple-400 transition-colors'>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Contact Info */}
						<div>
							<h3 className='text-white font-semibold mb-4'>
								Contact Info
							</h3>
							<ul className='space-y-4'>
								<li className='flex items-center space-x-3 text-gray-400'>
									<MapPin className='w-5 h-5 text-purple-400' />
									<span>Nairobi, Kenya</span>
								</li>
								<li className='flex items-center space-x-3 text-gray-400'>
									<Phone className='w-5 h-5 text-purple-400' />
									<span>+254 700505443</span>
								</li>
								<li className='flex items-center space-x-3 text-gray-400'>
									<Mail className='w-5 h-5 text-purple-400' />
									<span>mwangivictor929@gmail.com</span>
								</li>
							</ul>
						</div>

						{/* Newsletter */}
						<div>
							<h3 className='text-white font-semibold mb-4'>
								Newsletter
							</h3>
							<p className='text-gray-400 mb-4'>
								Subscribe to receive updates about new projects
								and tech insights.
							</p>
							<form
								onSubmit={handleSubscribe}
								className='space-y-4'>
								<div className='relative'>
									<input
										type='email'
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										placeholder='Your email address'
										className='w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
									/>
								</div>
								<motion.button
									type='submit'
									disabled={isSubmitting}
									className='w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg px-4 py-2 font-medium
                           flex items-center justify-center gap-2 hover:opacity-90 transition-opacity
                           disabled:opacity-50 disabled:cursor-not-allowed'
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}>
									{isSubmitting ? (
										<div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin' />
									) : (
										<>
											Subscribe
											<Send className='w-4 h-4' />
										</>
									)}
								</motion.button>
								{subscribeStatus !== "idle" && (
									<motion.p
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										className={`text-sm ${
											subscribeStatus === "success"
												? "text-green-400"
												: "text-red-400"
										}`}>
										{subscribeStatus === "success"
											? "Thank you for subscribing!"
											: "Something went wrong. Please try again."}
									</motion.p>
								)}
							</form>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='border-t border-gray-800'>
					<div className='container mx-auto px-4 py-6'>
						<div className='flex flex-col md:flex-row justify-between items-center'>
							<p className='text-gray-400 text-sm'>
								© {new Date().getFullYear()} Victor Mwangi. All
								rights reserved.
							</p>
							
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
