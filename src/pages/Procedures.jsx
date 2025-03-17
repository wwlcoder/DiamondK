import { useTranslation } from 'react-i18next';

const Procedures = () => {
	const { t } = useTranslation();

	return (
		<section
			className="flex flex-col p-6 items-center gap-8 mb-12 scroll-mt-40 justify-start"
		>
			<h2
				className="text-4xl font-bold text-center sm:text-5xl mt-6 text-slate-900 dark:text-white"
			>
				{t('rules_header2')}
			</h2>
			<div className="w-2/3 grid grid-cols-1 grid-rows-5 p-2 shadow-xl rounded-xl border border-gray-100">
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('procedures_1')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('procedures_2')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('procedures_3')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('procedures_4')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('procedures_5')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('procedures_6')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('procedures_7')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('procedures_8')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('procedures_9')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('procedures_10')}</span>
				<span className="p-4 text-lg text-center dark:text-slate-100">{t('procedures_11')}</span>
				<span className="bg-rose-50 p-4 text-lg text-center">{t('procedures_12')}</span>
			</div>


		</section >

	)
}

export default Procedures;
