import { useTranslation } from 'react-i18next';

const HandRanks = () => {
	const { t } = useTranslation();

	return (
		<section
			id="handranks"
			className="flex flex-col p-6 items-center gap-8 mb-12 scroll-mt-40 justify-start"
		>
			<h2
				className="text-4xl font-bold text-center sm:text-5xl mt-6 text-slate-900 dark:text-slate-100">
				{t('rules_header1')}
			</h2>
			<div className="min-w-2/3 grid grid-cols-2 grid-rows-5 p-2 shadow-xl rounded-xl border border-gray-100">
				<span className="p-4 flex justify-center items-center">
					<h3 className="text-2xl font-bold text-center text-slate-900 dark:text-slate-100">
						{t('hand')}
					</h3>
				</span>
				<span className="p-4 flex justify-center items-center">
					<h3 className="text-2xl font-bold text-center text-slate-900 dark:text-slate-100">
						{t('hand_examples')}
					</h3>
				</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('royalflush')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">A♥ K♥ Q♥ J♥ 10♥</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('straightflush')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">9♥ 8♥ 7♥ 6♥ 5♥</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('quads')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">A♥ A♣ A♠ A♦ 8♣</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('fullhouse')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">A♥ A♣ A♠ 8♦ 8♣</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('flush')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">A♠ 10♠ 8♠ 4♠ 2♠</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('straight')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">9♥ 8♣ 7♠ 6♦ 5♣</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('trips')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">A♥ A♣ A♠ 8♦ 4♣</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('twopairs')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">A♥ A♣ K♠ K♦ 8♣</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('pair')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">A♥ A♣ 8♠ 4♦ 2♣</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('highcard')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">A♥ 10♣ 8♠ 4♦ 2♣</span>
			</div>


		</section>

	)
}

export default HandRanks;
