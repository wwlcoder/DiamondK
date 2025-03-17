import { useTranslation } from 'react-i18next';

const Testimonial = () => {
	const { t } = useTranslation();

	return (
		<section id="testimonials" className="order-3 p-6 min-h-screen mt-12 scroll-mt-20">
			<h2
				className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
				{t('testimonials')}
			</h2>
			<figure className="my-12">
				<blockquote className="bg-rose-50 dark:bg-sky-50 pl-14 pr-8 py-12 rounded-3xl relative">
					<p className="text-2xl sm:text-3xl text-left mt-2 text-slate-900 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-slate-900 before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl
						after:text-slate-900 after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
						{t('testimonial_1')}

					</p>
				</blockquote>
				<figcaption className="italic text-xl:sm:text-2xl text-right mt-2 text-slate-900 dark:text-slate-200">
					&#8212; {t('testimonial_1_owner')}
				</figcaption>

			</figure>
			<figure className="my-12">
				<blockquote className="bg-rose-50 dark:bg-sky-50 pl-14 pr-8 py-12 rounded-3xl relative">
					<p className="text-2xl sm:text-3xl text-left mt-2 text-slate-900 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-slate-900 before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl
						after:text-slate-900 after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
						{t('testimonial_2')}
					</p>
				</blockquote>
				<figcaption className="italic text-xl:sm:text-2xl text-right mt-2 text-slate-900 dark:text-slate-200">
					&#8212; {t('testimonial_2_owner')}
				</figcaption>

			</figure>
			<figure className="my-12">
				<blockquote className="bg-rose-50 dark:bg-sky-50 pl-14 pr-8 py-12 rounded-3xl relative">
					<p className="text-2xl sm:text-3xl text-left mt-2 text-slate-900 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-slate-900 before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl
						after:text-slate-900 after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
						{t('testimonial_3')}
					</p>
				</blockquote>
				<figcaption className="italic text-xl:sm:text-2xl text-right mt-2 text-slate-900 dark:text-slate-200">
					&#8212; {t('testimonial_3_owner')}
				</figcaption>

			</figure>
		</section>
	)
}

export default Testimonial;
