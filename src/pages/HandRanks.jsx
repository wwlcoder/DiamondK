const HandRanks = () => {
	return (
		<section
			id="handranks"
			className="flex flex-col p-6 items-center gap-8 mb-12 scroll-mt-40 justify-start"
		>
			<h2
				className="text-4xl font-bold text-center sm:text-5xl mt-6 text-slate-900 dark:text-white"
			>
				Hand Rankings
			</h2>
			<div className="min-w-2/3 grid grid-cols-2 grid-rows-5 p-2 shadow-xl rounded-xl border border-gray-100">
				<span className="p-4 flex justify-center items-center">
					<h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white">
						Poker Hand
					</h3>
				</span>
				<span className="p-4 flex justify-center items-center">
					<h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white">
						Examples
					</h3>
				</span>
				<span className="bg-rose-50 p-4 text-lg text-center">Royal Flush</span>
				<span className="bg-rose-50 p-4 text-lg text-center">A♥ K♥ Q♥ J♥ 10♥</span>
				<span className="p-4 text-lg text-center">Straight Flush</span>
				<span className="p-4 text-lg text-center">9♥ 8♥ 7♥ 6♥ 5♥</span>
				<span className="bg-rose-50 p-4 text-lg text-center">Four of A Kind</span>
				<span className="bg-rose-50 p-4 text-lg text-center">A♥ A♣ A♠ A♦ 8♣</span>
				<span className="p-4 text-lg text-center">Full House</span>
				<span className="p-4 text-lg text-center">A♥ A♣ A♠ 8♦ 8♣</span>
				<span className="bg-rose-50 p-4 text-lg text-center">Flush</span>
				<span className="bg-rose-50 p-4 text-lg text-center">A♠ 10♠ 8♠ 4♠ 2♠</span>
				<span className="p-4 text-lg text-center">Straight</span>
				<span className="p-4 text-lg text-center">9♥ 8♣ 7♠ 6♦ 5♣</span>
				<span className="bg-rose-50 p-4 text-lg text-center">Three of A Kind</span>
				<span className="bg-rose-50 p-4 text-lg text-center">A♥ A♣ A♠ 8♦ 4♣</span>
				<span className="p-4 text-lg text-center">Two Pairs</span>
				<span className="p-4 text-lg text-center">A♥ A♣ K♠ K♦ 8♣</span>
				<span className="bg-rose-50 p-4 text-lg text-center">One Pair</span>
				<span className="bg-rose-50 p-4 text-lg text-center">A♥ A♣ 8♠ 4♦ 2♣</span>
				<span className="p-4 text-lg text-center">High Card</span>
				<span className="p-4 text-lg text-center">A♥ 10♣ 8♠ 4♦ 2♣</span>
			</div>


		</section>

	)
}

export default HandRanks;
