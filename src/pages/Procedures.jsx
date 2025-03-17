const Procedures = () => {
	return (
		<section
			className="flex flex-col p-6 items-center gap-8 mb-12 scroll-mt-40 justify-start"
		>
			<h2
				className="text-4xl font-bold text-center sm:text-5xl mt-6 text-slate-900 dark:text-white"
			>
				Anatomy of a Texas Hold'em Hand
			</h2>
			<div className="w-2/3 grid grid-cols-1 grid-rows-5 p-2 shadow-xl rounded-xl border border-gray-100">
				<span className="p-4 text-lg text-center dark:text-slate-100">Blinds are placed and cards are shuffled</span>
				<span className="bg-rose-50 p-4 text-lg text-center">Players are dealt two cards face down</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">First round of bets, clockwise after the blinds</span>
				<span className="bg-rose-50 p-4 text-lg text-center">Dealer burns top card and deals three cards face-up (FLOP)</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">Second betting round, starting with player left of the dealer</span>
				<span className="bg-rose-50 p-4 text-lg text-center">Dealer burns a card and deals a single card face-up (TURN)</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">Third round of bets, same as the second</span>
				<span className="bg-rose-50 p-4 text-lg text-center">Dealer burns a card and deals the fifth card face-up (RIVER)</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">Remaining players make the best five-card hand they can using the table and hole cards</span>
				<span className="bg-rose-50 p-4 text-lg text-center">Final round of bets, same as the previous</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">Players reveal their hands (SHOWDOWN)</span>
				<span className="bg-rose-50 p-4 text-lg text-center">Winning hand takes the pot!</span>
			</div>


		</section >

	)
}

export default Procedures;
