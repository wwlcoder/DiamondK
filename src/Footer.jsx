import { HashLink } from 'react-router-hash-link';

const Footer = () => {
	return (
		<footer
			id="footer"
			className="bg-rose-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-xl sticky bottom-0 z-50"
		>
			<section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row justify-between sm:justify-between">
				<div className="flex flex-col sm:gap-2 basis-1/3 justify-center">
					<h2 className="font-bold text-2xl text-center">Contact ♦️ K Poker</h2>
					<a href="tel:+855123456789" className="text-center">Phone: +855 1234 56789</a>

				</div>
				<nav className="hidden md:flex flex-col gap-2 basis-1/3 text-center" aria-label="footer">
					<HashLink to='/#games'>Our Games</HashLink>
					<HashLink to='/#testimonials'>Testimonials</HashLink>
					<HashLink to='/rules#handranks'>Rules</HashLink>
				</nav>
				<div className="flex flex-col sm:gap-2 basis-1/3 justify-center">
					<h2 className="font-bold text-2xl text-center">Find us Here!</h2>
					<p className="text-center">ZheShang Casino, Sihanoukville, KH 18000</p>
				</div>
			</section>
		</footer>
	)
}

export default Footer;
