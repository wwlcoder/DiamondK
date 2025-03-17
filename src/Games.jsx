import deepstack from './public/assets/images/deepstacks.jpg';
import action from './public/assets/images/action.jpg';
import freebies from './public/assets/images/freebies.jpg';

const Games = () => {
	return (
		<section
			id="games"
			className="my-12 scroll-mt-20 min-h-screen relative flex flex-col p-4"
		>
			<h2
				className="text-4xl font-bold text-center sm:text-5xl my-6 text-slate-900 dark:text-white p-4"
			>
				Our Games
			</h2>
			<ul className="list-none mx-auto h-screen flex flex-col sm:flex-row gap-8 justify-center items-center">
				<li
					className="w-11/12 items-center sm:w-5/6 features-height flex flex-col border border-solid border-slate-900 dark:border-gray-100 bg-rose-50 dark:bg-sky-50 py-6 px-2 rounded-3xl shadow-xl">
					<div className="text-center">
						<h2 className="text-2xl sm:text-4xl text-slate-900 font-bold p-2 mb-8">Experience an Action-Packed Game!</h2>
					</div>
					<img src={deepstack} alt="Action-Packed" className="w-5/6 sm:w-11/12 rounded-xl mb-6" />
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">$1/$2 with frequent straddles from action-packed players who loves big pots!</p>
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">$1/$3 Squid Texas Hold-Em. Enjoy high-stakes thrills at affordable stakes!</p>
				</li>
				<li
					className="w-11/12 sm:w-5/6 features-height flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-rose-50 dark:bg-sky-50 py-6 px-2 rounded-3xl shadow-xl">
					<div className="text-center">
						<h2 className="text-2xl sm:text-4xl text-slate-900 font-bold p-2 mb-8">Frequent straddles and Action = Big Wins!</h2>
					</div>
					<img src={action} alt="Action-Packed" className="w-5/6 sm:w-11/12 rounded-xl mb-6" />
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">Minimum Buy-in at Only $100!</p>
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">Frequent straddles from action-players</p>
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">Win big with just a small buy-in!</p>
				</li>
				<li
					className="w-11/12 sm:w-5/6 features-height flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-rose-50 dark:bg-sky-50 py-6 px-2 rounded-3xl shadow-xl">
					<div className="text-center">
						<h2 className="text-2xl sm:text-4xl text-slate-900 font-bold p-2 mb-8">Freebies for maximum enjoyment!</h2>
					</div>
					<img src={freebies} alt="Action-Packed" className="w-5/6 sm:w-11/12 rounded-xl mb-6" />
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">Free drinks, fresh fruits, cigarettes and food!</p>
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">Win bonus jackpots when you hit big hands or take down a pot with 72 after the flop is dealt</p>

				</li>
			</ul>
		</section>
	)
}

export default Games;
