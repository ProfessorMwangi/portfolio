/** @format */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMobileMenuOpen(false);
		}
	};

	const navItems = [
		{ label: "Home", id: "hero" },
		{ label: "Skills", id: "skills" },
		{ label: "Projects", id: "projects" },
	];

	const socialLinks = [
		{ icon: <Github className='w-5 h-5' />, href: "#", label: "GitHub" },
		{
			icon: <Linkedin className='w-5 h-5' />,
			href: "#",
			label: "LinkedIn",
		},
		{ icon: <Mail className='w-5 h-5' />, href: "#", label: "Email" },
	];

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6 }}
				className={`fixed w-full z-50 transition-all duration-300 ${
					isScrolled
						? "bg-black/80 backdrop-blur-lg"
						: "bg-transparent"
				}`}>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-Monte'>
					<div className='flex items-center justify-between h-16'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className='flex-shrink-0'>
							<span className='font-Glitch text-2xl bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text '>
								Victor Mwangi
							</span>
						</motion.div>

						{/* Desktop Navigation */}
						<div className='hidden md:flex items-center space-x-8'>
							{navItems.map((item, index) => (
								<motion.button
									key={item.id}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 * (index + 1) }}
									onClick={() => scrollToSection(item.id)}
									className='text-gray-300 hover:text-white transition-colors'>
									{item.label}
								</motion.button>
							))}
						</div>

						{/* Social Links */}
						<div className='hidden md:flex items-center space-x-4'>
							{socialLinks.map((link, index) => (
								<motion.a
									key={link.label}
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.1 * (index + 1) }}
									href={link.href}
									target='_blank'
									rel='noopener noreferrer'
									className='text-gray-400 hover:text-purple-400 transition-colors'>
									{link.icon}
								</motion.a>
							))}
						</div>

						{/* Mobile menu button */}
						<div className='md:hidden'>
							<button
								onClick={() =>
									setIsMobileMenuOpen(!isMobileMenuOpen)
								}
								className='text-gray-400 hover:text-white transition-colors'>
								{isMobileMenuOpen ? (
									<X className='w-6 h-6' />
								) : (
									<Menu className='w-6 h-6' />
								)}
							</button>
						</div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className='fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-lg'>
						<div className='pt-20 pb-6 px-4'>
							<div className='flex flex-col space-y-6'>
								{navItems.map((item) => (
									<button
										key={item.id}
										onClick={() => scrollToSection(item.id)}
										className='text-gray-300 hover:text-white text-lg font-medium transition-colors'>
										{item.label}
									</button>
								))}
							</div>
							<div className='mt-8 flex justify-center space-x-6'>
								{socialLinks.map((link) => (
									<a
										key={link.label}
										href={link.href}
										target='_blank'
										rel='noopener noreferrer'
										className='text-gray-400 hover:text-purple-400 transition-colors'>
										{link.icon}
									</a>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;

