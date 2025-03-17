import { FaTelegramPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
	return (

		<header
			className="bg-rose-100 text-slate-900 sticky top-0 z-50"
		>
			<section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
				<h1 className="text-3xl font-medium">
					<a href="#hero">♦️ Poker Club</a>
				</h1>
				<div>
					<button
						id="hamburger-button"
						className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
					>
						<div className="bg-black w-8 h-1 rounded absolute top-4 -mt-0.5 before:content-[''] before:bg-black before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-black after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3">
						</div>
					</button>
					<nav className="hidden md:block space-x-8 text-xl" aria-label="main">
						<a href="#games">Our Games</a>
						<a href="#testimonials">Testimonials</a>
						<Link to='/rules'>Rules</Link>
						<a href="https://google.com">
							<FaTelegramPlane
								className="inline text-3xl text-slate-800"
							/>
						</a>
					</nav>
				</div>
			</section>
			<section
				id="mobile-menu"
				className="absolute top-68 bg-black w-full text-5xl hidden flex-col justify-center origin-top"
			>
				<nav
					className="flex flex-col min-h-screen items-center py-8"
					aria-label="mobile"
				>
					<a href="#hero" className="w-full text-center py-6 hover:opacity-90">Home</a>
					<a href="#games" className="w-full text-center py-6 hover:opacity-90">Our Games</a>
					<a href="#testimonials" className="w-full text-center py-6 hover:opacity-90">Testimonials</a>
					<a href="#contact" className="w-full text-center py-6 hover:opacity-90">Contact Us</a>


				</nav>
			</section>
		</header>
	)
}

export default Header;
