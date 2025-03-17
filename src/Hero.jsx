import hero from './public/assets/images/hero.jpg';
import { useTranslation } from 'react-i18next';

const Hero = () => {
	const { t } = useTranslation();


	return (
		<section
			id="hero"
			className="section-min-height flex flex-col-reverse justify-end sm:justify-center sm:flex-row p-6 px-12 items-center gap-8 mb-12 scroll-mt-40"
		>
			<article className="sm:w-1/2">
				<h2
					className="max-w-md text-3xl font-bold text-center my-10 sm:my-4 sm:text-5xl sm:text-left text-slate-900 dark:text-white">
					Experience the most <span className="text-indigo-700 dark:text-indigo-300">action-packed No Limit Texas Hold'em Poker</span> game in Sihanoukville!
				</h2>
				<p className="max-w-md text-xl sm:text-2xl my-10 sm:my-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
					{t('hero2')}
				</p>
				<p className="max-w-md text-xl sm:text-2xl sm:my-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
					{t('hero3')}
				</p>
			</article>
			<img
				className="mt-4 w-max sm:w-1/2 sm:h-1/2 rounded-3xl"
				src={hero}
				alt="Action-Packed Poker" />
		</section >
	)
}

export default Hero;
