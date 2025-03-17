const Footer = () => {
	return (
		<footer
			id="footer"
			className="bg-rose-100 text-slate-900 text-xl sticky bottom-0 z-50"
		>
			<section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row justify-between sm:justify-between">
				<div className="flex flex-col sm:gap-2 basis-1/3">
					<h2 className="font-bold text-2xl text-center">Contact ♦️ K Poker</h2>
					<a href="tel:+85581740104" className="text-center">Phone: +855 8174 0104</a>

				</div>
				<nav className="hidden md:flex flex-col gap-2 basis-1/3text-center" aria-label="footer">
					<a href="#games" className="hover:opacity-90">Our Games</a>
					<a href="#testimonials" className="hover:opacity-90">Testimonials</a>
					<a href="#contact" className="hover:opacity-90">Contact Us</a>
				</nav>
				<div className="flex flex-col sm:gap-2 basis-1/3">
					<h2 className="font-bold text-2xl text-center">Find us At ZS Casino</h2>
					<p className="text-center">🇰 At ZheShang Casino, Sihanoukville, KH 18000</p>
				</div>
			</section>
		</footer>
	)
}

export default Footer;
