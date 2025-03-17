import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer
			id="footer"
			className="bg-rose-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 text-xl sticky bottom-0 z-50"
		>
			<section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row justify-between sm:justify-between">
				<div className="flex flex-col text-xl sm:text-2xl sm:gap-2 basis-1/3 justify-center">
					<h2 className="font-bold text-center">{t('footer_contact')}</h2>
					<a href="tel:+855123456789" className="text-center">{t('phone')}: +855 1234 56789</a>

				</div>
				<nav className="hidden md:flex flex-col gap-2 basis-1/3 text-center" aria-label="footer">
					<HashLink to='/#games'>{t('our_games')}</HashLink>
					<HashLink to='/#testimonials'>{t('testimonials')}</HashLink>
					<HashLink to='/rules#handranks'>{t('rules')}</HashLink>
				</nav>
				<div className="hidden md:flex flex-col sm:gap-2 text-base sm:text-2xl basis-1/3 justify-center">
					<h2 className="font-bold text-center">{t('footer_address1')}</h2>
					<p className="text-center">{t('footer_address2')}</p>
				</div>
			</section>
		</footer>
	)
}

export default Footer;
