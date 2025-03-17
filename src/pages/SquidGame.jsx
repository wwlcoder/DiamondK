import { useTranslation } from 'react-i18next';


const SquidGame = () => {
	const { t } = useTranslation();

	return (
		<section
			className="flex flex-col p-6 items-center gap-8 scroll-mt-20 justify-start"
		>
			<h2
				className="text-4xl font-bold text-center sm:text-5xl mt-6 text-slate-900 dark:text-white"
			>
				{t('rules_header3')}
			</h2>
			<div className="w-2/3 grid grid-cols-1 grid-rows-5 p-2 shadow-xl rounded-xl border border-gray-100">
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('squid1')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('squid2')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('squid3')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('squid4')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('squid5')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('squid6')}</span>
			</div>


		</section>

	)
}

export default SquidGame;
