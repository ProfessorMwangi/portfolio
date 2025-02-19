/** @format */
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useGSAP } from "@gsap/react";

function App() {
	const lenisRef = useRef<Lenis | null>(null);
	const sectionsRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.5,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			smoothWheel: true,
			wheelMultiplier: 1.2,
			touchMultiplier: 2.5,
			infinite: false,
		});
		lenisRef.current = lenis;

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const sections = gsap.utils.toArray(".section") as HTMLElement[];

		sections.forEach((section) => {
			gsap.fromTo(
				section,
				{ opacity: 0, y: 100, scale: 0.95 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 1.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: section,
						start: "top 90%",
						end: "top 30%",
						scrub: true,
						toggleActions: "play none none reverse",
					},
				}
			);
		});
	}, []);

	return (
		<div className='relative bg-black text-white' ref={sectionsRef}>
			<Navbar />
			<main className='relative z-10'>
				<section className='section'>
					<Hero />
				</section>
				<section className='section'>
					<Skills />
				</section>
				<Projects />
				
					<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
