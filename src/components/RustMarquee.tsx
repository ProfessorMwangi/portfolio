/** @format */

const items = [
	"BACKEND ENGINEERING",
	"RUST",
	"SYSTEMS PERFORMANCE",
	"TYPE SAFETY",
	"ZERO-COST ABSTRACTIONS",
	"MEMORY SAFETY",
	"AXUM",
	"ASYNC RUNTIMES",
	"HIGH THROUGHPUT",
	"OWNERSHIP MODEL",
	"FEARLESS CONCURRENCY",
	"PERFORMANCE OBSESSED",
];

const RustMarquee = () => {
	const doubled = [...items, ...items];

	return (
		<div className='relative w-full overflow-hidden py-5 bg-black border-y border-gray-800/40'>
			{/* Left fade */}
			<div className='absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none' />
			{/* Right fade */}
			<div className='absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none' />

			<div
				className='flex whitespace-nowrap'
				style={{ animation: "rustMarquee 28s linear infinite" }}>
				{doubled.map((item, i) => (
					<span key={i} className='flex items-center'>
						<span className='mx-3 text-[11px] font-mono font-bold tracking-[0.25em] text-gray-500'>
							{item}
						</span>
						<span className='text-gray-700 text-xs'>·</span>
					</span>
				))}
			</div>

			<style>{`
        @keyframes rustMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
		</div>
	);
};

export default RustMarquee;
