/** @format */

import { motion } from "framer-motion";

const GearSVG = ({
	size,
	className = "",
}: {
	size: number;
	className?: string;
}) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 100 100'
		fill='none'
		className={className}>
		{[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
			<rect
				key={angle}
				x='44'
				y='0'
				width='12'
				height='18'
				rx='3'
				fill='currentColor'
				transform={`rotate(${angle} 50 50)`}
			/>
		))}
		<circle
			cx='50'
			cy='50'
			r='30'
			fill='none'
			stroke='currentColor'
			strokeWidth='8'
		/>
		<circle cx='50' cy='50' r='10' fill='currentColor' />
	</svg>
);

const Gear = ({
	size,
	top,
	left,
	right,
	bottom,
	duration,
	reverse = false,
	opacity = 0.15,
}: {
	size: number;
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	duration: number;
	reverse?: boolean;
	opacity?: number;
}) => (
	<motion.div
		className='absolute'
		style={{
			top,
			left,
			right,
			bottom,
			color: `rgba(120, 120, 120, ${opacity})`,
		}}
		animate={{ rotate: reverse ? -360 : 360 }}
		transition={{ duration, repeat: Infinity, ease: "linear" }}>
		<GearSVG size={size} />
	</motion.div>
);

const RustShowcase = () => {
	return (
		<div className='relative w-full overflow-hidden bg-black py-24 md:py-32'>
			{/* Blended purple-rust radial glow */}
			<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]' />

			{/* Gears */}
			<Gear
				size={180}
				top='-30px'
				left='-40px'
				duration={25}
				opacity={0.08}
			/>
			<Gear
				size={120}
				top='10%'
				right='-20px'
				duration={18}
				reverse
				opacity={0.1}
			/>
			<Gear
				size={90}
				bottom='5%'
				left='8%'
				duration={22}
				opacity={0.07}
			/>
			<Gear
				size={150}
				bottom='-30px'
				right='5%'
				duration={30}
				reverse
				opacity={0.06}
			/>
			<Gear
				size={60}
				top='20%'
				left='25%'
				duration={15}
				reverse
				opacity={0.1}
			/>
			<Gear
				size={70}
				bottom='20%'
				right='22%'
				duration={20}
				opacity={0.09}
			/>

			{/* Content */}
			<div className='relative z-10 flex flex-col items-center justify-center px-6'>
				{/* Ferris the Crab */}
				<motion.img
					src='https://rustacean.net/assets/rustacean-flat-happy.svg'
					alt='Ferris the Rust crab'
					className='w-28 h-28 md:w-40 md:h-40 mb-8 drop-shadow-[0_0_25px_rgba(255,255,255,0.08)]'
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{
						type: "spring",
						stiffness: 120,
						delay: 0.2,
					}}
				/>

				{/* Manifesto */}
				<motion.div
					className='text-center max-w-2xl'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.8, delay: 0.4 }}>
					<h2 className='font-Quick text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6'>
						<span className='text-white'>I engineer </span>
						<span className='text-gray-400'>backends</span>
						<br />
						<span className='text-white'>that never sleep.</span>
					</h2>

					<p className='text-gray-500 text-base md:text-lg leading-relaxed font-Monte'>
						No garbage collector. No runtime. No excuses.
						<br className='hidden md:block' />
						If it compiles, it runs.{" "}
						If it runs, it doesn't stop.
						<br className='hidden md:block' />
						<span className='text-gray-600'>
							I build systems where failure is a compile-time
							error, not a production incident.
						</span>
					</p>
				</motion.div>

				{/* Code-like accent line */}
				<motion.div
					className='mt-10 flex items-center gap-3 font-mono text-xs md:text-sm text-gray-600'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.8 }}>
					<span className='text-gray-700'>{"{"}</span>
					<span>async</span>
					<span className='text-gray-700'>·</span>
					<span>fearless</span>
					<span className='text-gray-700'>·</span>
					<span>zero-cost</span>
					<span className='text-gray-700'>·</span>
					<span>blazing</span>
					<span className='text-gray-700'>{"}"}</span>
				</motion.div>
			</div>
		</div>
	);
};

export default RustShowcase;
