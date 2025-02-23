/** @format */

import React from "react";
import {
	Phone,
	Mail,
	Globe,
	Code2,
	Briefcase,
	GraduationCap,
	Heart,
	Github,
	Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Cv() {
	return (
		<div className='min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 font-Monte'>
			{/* Back to Portfolio Button */}
			<div className='max-w-5xl mx-auto mb-6'>
				<Link
					to='/'
					className='inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 mr-2'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M10 19l-7-7m0 0l7-7m-7 7h18'
						/>
					</svg>
					Back to Portfolio
				</Link>
			</div>

			<div className='max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
				<div className='p-8'>
					{/* Header */}
					<div className='flex flex-col lg:flex-row justify-between mb-12'>
						<div>
							<h1 className='text-5xl font-light text-gray-700 mb-2'>
								VICTOR
							</h1>
							<h1 className='text-5xl font-light text-gray-700 mb-4'>
								MWANGI
							</h1>
							<h2 className='text-xl text-gray-600 tracking-wide'>
								SOFTWARE DEVELOPER
							</h2>
						</div>
						<div className='mt-6 lg:mt-0 space-y-2'>
							<div className='flex items-center space-x-2 text-gray-600'>
								<Phone size={18} />
								<span>+254 700505443</span>
							</div>
							<div className='flex items-center space-x-2 text-gray-600'>
								<Mail size={18} />
								<span>mwangivictor929@gmail.com</span>
							</div>
							<div className='flex items-center space-x-2 text-gray-600'>
								<Github size={18} />
								<a
									href='https://github.com/ProfessorMwangi'
									className='hover:text-gray-800'>
									/ProfessorMwangi
								</a>{" "}
							</div>
							<div className='flex items-center space-x-2 text-gray-600'>
								<Linkedin size={18} />
								<a
									href='https://www.linkedin.com/in/victor-mwangi-9b5667317/'
									className='hover:text-gray-800'>
								/victor-mwangi
								</a>
							</div>
						</div>
					</div>

					{/* Profile Section */}
					<section className='mb-12'>
						<div className='flex items-center mb-4'>
							<Code2 className='mr-2' size={24} />
							<h2 className='text-2xl font-semibold text-gray-700'>
								PROFILE
							</h2>
						</div>
						<p className='text-gray-600 leading-relaxed'>
							A passionate Full-Stack Developer with expertise in
							React, Redux, Node.js, TypeScript, RabbitMQ MongoDB,
							and PostgreSQL, dedicated to building scalable web
							applications. Skilled in cloud computing, AI, and
							algorithmic trading, with a keen interest in Rust,
							Solidity, and quantum computing. Strong
							problem-solving skills, a hunger for knowledge, and
							a drive to build next-generation applications in
							fintech, AI, and blockchain.
						</p>
					</section>

					{/* Work Experience */}
					<section className='mb-12'>
						<div className='flex items-center mb-6'>
							<Briefcase className='mr-2' size={24} />
							<h2 className='text-2xl font-semibold text-gray-700'>
								WORK EXPERIENCE
							</h2>
						</div>

						<div className='space-y-8'>
							<div>
								<div className='flex justify-between items-baseline mb-2'>
									<h3 className='text-xl font-semibold text-gray-700'>
										Fullstack Developer (In Progress)
									</h3>
									<span className='text-gray-600'>
										2024 - PRESENT
									</span>
								</div>
								<p className='text-gray-600 mb-2'>
									Garden Florist Ke
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-2'>
									<li>
										Developing and maintaining the
										e-commerce platform, ensuring a seamless
										shopping experience for customers.
									</li>
									<li>
										Integrated MPesa for secure and
										efficient payments, enabling smooth
										transactions for users.
									</li>
									<li>
										Optimized system performance and
										scalability, improving website speed,
										reliability, and responsiveness.
									</li>
									<li>
										Collaborated with cross-functional
										teams, including designers and
										marketers, to enhance platform features
										and user engagement.
									</li>
								</ul>
							</div>

							<div>
								<div className='flex justify-between items-baseline mb-2'>
									<h3 className='text-xl font-semibold text-gray-700'>
										Frontend Development (In Progress)
									</h3>
									<span className='text-gray-600'>
										2025 - PRESENT
									</span>
								</div>
								<p className='text-gray-600 mb-2'>
									Trigger Influence
								</p>
								<ul className='list-disc list-inside text-gray-600 space-y-2'>
									<li>
										Developed a responsive and user-friendly
										interface using React (TSX) and Tailwind
										CSS, ensuring a seamless experience for
										advertisers and influencers.
									</li>
									<li>
										Implemented a dynamic bidding system
										that allows influencers to submit
										proposals and track their campaign
										performance in real-time.
									</li>
									<li>
										Designed and developed the Admin
										Dashboard, providing realtime insights,
										campaign management tools, and user
										analytics for platform monitoring.
									</li>
								</ul>
							</div>
						</div>
					</section>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
						{/* Education */}
						<section>
							<div className='flex items-center mb-6'>
								<GraduationCap className='mr-2' size={24} />
								<h2 className='text-2xl font-semibold text-gray-700'>
									EDUCATION
								</h2>
							</div>
							<div>
								<h3 className='text-xl font-semibold text-gray-700'>
									MORINGA SCHOOL
								</h3>
								<p className='text-gray-600'>
									JUN 2024 - DEC 2024
								</p>
								<p className='text-gray-600 mt-2'>
									Software Engineering
								</p>
							</div>
						</section>

						{/* Technical Skills */}
						<section>
							<div className='flex items-center mb-6'>
								<Code2 className='mr-2' size={24} />
								<h2 className='text-2xl font-semibold text-gray-700'>
									TECHNICAL SKILLS
								</h2>
							</div>
							<div className='grid grid-cols-2 gap-4'>
								<div>
									<ul className='space-y-2 text-gray-600'>
										<li>Javascript</li>
										<li>Python</li>
										<li>Rust</li>
										<li>General IT Knowledge</li>
									</ul>
								</div>
							</div>
						</section>

						{/* Soft Skills */}
						<section>
							<div className='flex items-center mb-6'>
								<Heart className='mr-2' size={24} />
								<h2 className='text-2xl font-semibold text-gray-700'>
									SOFT SKILLS
								</h2>
							</div>
							<ul className='space-y-2 text-gray-600'>
								<li>Problem-Solving</li>
								<li>Attention to Detail</li>
								<li>Teamwork</li>
								<li>Time Management</li>
								<li>Adaptability</li>
								<li>Effective Communication</li>
								<li>Critical Thinking</li>
							</ul>
						</section>

						{/* Languages */}
						<section>
							<div className='flex items-center mb-6'>
								<Globe className='mr-2' size={24} />
								<h2 className='text-2xl font-semibold text-gray-700'>
									LANGUAGES
								</h2>
							</div>
							<ul className='space-y-2 text-gray-600'>
								<li>English</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cv;
