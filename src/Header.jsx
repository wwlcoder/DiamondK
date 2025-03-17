import { FaTelegramPlane } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
	const { t, i18n } = useTranslation();
	const [dropdownOpen, setDropdown] = useState(false);

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

	const toggleDropdown = () => {
		setDropdown(!dropdownOpen);
	}

	const switchLang = (lang) => {
		setDropdown(!dropdownOpen);
		i18n.changeLanguage(lang);
	}

	return (
		<header
			className="bg-rose-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 sticky top-0 z-50"
		>
			<section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
				<h1 className="text-3xl font-medium">
					<HashLink to='/#hero'>{t('club')}</HashLink>
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
						<HashLink to='/#games'>{t('our_games')}</HashLink>
						<HashLink to='/#testimonials'>{t('testimonials')}</HashLink>
						<HashLink to='/rules#handranks'>{t('rules')}</HashLink>
						<a href="https://google.com">
							<FaTelegramPlane
								className="inline text-3xl text-slate-800"
							/>
						</a>
						<div className="relative inline-block text-left mt-4">
							<div>
								<button type="button" onClick={toggleDropdown} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu-mobile" aria-expanded="true" aria-haspopup="true">
									Language
									<svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</button>
							</div>
							{dropdownOpen && (
								<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu-mobile">
									<div className="py-1" role="none">
										<a href="#" onClick={() => switchLang('en')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem">English</a>
										<a href="#" onClick={() => switchLang('zh')} className="block px-4 py-2 text-sm text-gray-700" role="menuitem">中文</a>
									</div>
								</div>
							)}
						</div>





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
