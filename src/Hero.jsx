import hero from './public/assets/images/hero.jpg';

const Hero = () => {
	return (
		<section
			id="hero"
			className="section-min-height flex flex-col-reverse justify-center sm:flex-row p-6 px-12 items-center gap-8 mb-12 scroll-mt-40"
		>
			<article className="sm:w-1/2">
				<h2
					className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
					Experience the most <span className="text-indigo-700 dark:text-indigo-300">action-packed No Limit Texas Hold'em Poker</span> game in Sihanoukville!
				</h2>
				<p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
					No tight professional players who plays GTO ranges.Only action junkies who loves to gamble and have fun!
				</p>
				<p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
					For Fun and Action-Packed Poker. Think ♦️K Poker
				</p>
			</article>
			<img
				className="w-1/2 h-1/2 rounded-3xl"
				src={hero}
				alt="Action-Packed Poker" />

		</section >
	)
}

export default Hero;
