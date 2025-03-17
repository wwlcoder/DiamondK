import { FaTelegramPlane } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';

const Header = () => {

	const loadBtn = () => {
		const hamburgerBtn = document.getElementById("hamburger-button");
		const mobileMenu = document.getElementById("mobile-menu");

		const toggleMenu = () => {
			mobileMenu.classList.toggle('hidden');
			mobileMenu.classList.toggle('flex');
			hamburgerBtn.classList.toggle("toggle-btn");
		}

		hamburgerBtn.addEventListener("click", toggleMenu);
		mobileMenu.addEventListener("click", toggleMenu);
	}

	document.addEventListener("DOMContentLoaded", loadBtn);

	return (
		<header
			className="bg-rose-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 sticky top-0 z-50"
		>
			<section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
				<h1 className="text-3xl font-medium">
					<HashLink to='/#hero'>♦️ Poker Club</HashLink>
				</h1>
				<div>
					<button
						id="hamburger-button"
						className="text-3xl md:hidden cursor-pointer relative w-8 h-8"
					>
						<div className="dark:bg-slate-100 before:dark:bg-slate-100 after:dark:bg-slate-100 bg-black w-8 h-1 rounded absolute top-4 -mt-0.5 before:content-[''] before:bg-black before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-black after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3">
						</div>
					</button>
					<nav className="hidden md:block space-x-8 text-xl" aria-label="main">
						<HashLink to='/#games'>Our Games</HashLink>
						<HashLink to='/#testimonials'>Testimonials</HashLink>
						<HashLink to='/rules#handranks'>Rules</HashLink>
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
				className="absolute top-16 bg-slate-50 text-slate-900 w-full text-3xl sm:text-5xl flex-col hidden justify-center origin-top animate-open-menu"
			>
				<nav
					className="flex flex-col min-h-screen items-center py-8"
					aria-label="mobile"
				>
					<HashLink
						to='/#hero'
						className="w-full text-center py-6 hover:opacity-90"
					>
						Home
					</HashLink>
					<HashLink
						to='/#games'
						className="w-full text-center py-6 hover:opacity-90"
					>
						Our Games
					</HashLink>
					<HashLink
						to='/#testimonials'
						className="w-full text-center py-6 hover:opacity-90"
					>
						Testimonials
					</HashLink>
					<HashLink
						to='/rules#handranks'
						className="w-full text-center py-6 hover:opacity-90"
					>
						Rules
					</HashLink>
				</nav>
			</section>
		</header>
	)
}

export default Header;
