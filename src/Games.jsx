import deepstack from './public/assets/images/deepstacks.jpg';
import action from './public/assets/images/action.jpg';
import freebies from './public/assets/images/freebies.jpg';
import { useTranslation } from 'react-i18next';


const Games = () => {
	const { t } = useTranslation();

	return (
		<section
			id="games"
			className="my-12 scroll-mt-20 min-h-screen relative flex flex-col p-4"
		>
			<h2
				className="text-4xl font-bold text-center sm:text-5xl my-6 text-slate-900 dark:text-white p-4"
			>
				{t('our_games')}
			</h2>
			<ul className="list-none mx-auto min-h-screen flex flex-col sm:flex-row gap-8 justify-center items-start">
				<li
					className="w-11/12 items-center sm:w-5/6 flex flex-col border border-solid border-slate-900 dark:border-gray-100 bg-rose-50 dark:bg-sky-50 py-6 px-2 rounded-3xl shadow-xl">
					<div className="text-center">
						<h2 className="text-2xl sm:text-4xl text-slate-900 font-bold p-2 mb-8">{t('games_header_1')}</h2>
					</div>
					<img src={deepstack} alt="Action-Packed" className="w-5/6 sm:w-11/12 rounded-xl mb-6" />
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">{t('games_section_1a')}</p>
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">{t('games_section_1b')}</p>
				</li>
				<li
					className="w-11/12 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-rose-50 dark:bg-sky-50 py-6 px-2 rounded-3xl shadow-xl">
					<div className="text-center">
						<h2 className="text-2xl sm:text-4xl text-slate-900 font-bold p-2 mb-8">{t('games_header_2')}</h2>
					</div>
					<img src={action} alt="Action-Packed" className="w-5/6 sm:w-11/12 rounded-xl mb-6" />
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">{t('games_section_2a')}</p>
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">{t('games_section_2b')}</p>
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">{t('games_section_2c')}</p>
				</li>
				<li
					className="w-11/12 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-rose-50 dark:bg-sky-50 py-6 px-2 rounded-3xl shadow-xl">
					<div className="text-center">
						<h2 className="text-2xl sm:text-4xl text-slate-900 font-bold p-2 mb-8">{t('games_header_3')}</h2>
					</div>
					<img src={freebies} alt="Action-Packed" className="w-5/6 sm:w-11/12 rounded-xl mb-6" />
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">{t('games_section_3a')}</p>
					<p className="text-xl sm:text-2xl text-center mt-2 text-slate-900 p-2">{t('games_section_3b')}</p>

				</li>
			</ul>
		</section>
	)
}

export default Games;
