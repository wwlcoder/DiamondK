const SquidGame = () => {
	return (
		<section
			className="flex flex-col p-6 items-center gap-8 mb-12 scroll-mt-40 justify-start"
		>
			<h2
				className="text-4xl font-bold text-center sm:text-5xl mt-6 text-slate-900 dark:text-white"
			>
				How to Play the Squid Game
			</h2>
			<div className="w-2/3 grid grid-cols-1 grid-rows-5 p-2 shadow-xl rounded-xl border border-gray-100">
				<span className="p-4 text-lg text-center">One squid marker per player at the table</span>
				<span className="bg-rose-50 p-4 text-lg text-center">A marker placed in the pot per hand</span>
				<span className="p-4 text-lg text-center">Win a hand outright and show your cards to win the marker</span>
				<span className="bg-rose-50 p-4 text-lg text-center">Anyone without marker after all markers distributed has to pay a bounty to each person with a market</span>
				<span className="p-4 text-lg text-center">More markers collected translates to more bounties</span>
				<span className="bg-rose-50 p-4 text-lg text-center">For more thrilling action, there is a multiplier component for more markers collected</span>
			</div>


		</section>

	)
}

export default SquidGame;
