import Hero from './Hero';
import Games from './Games';
import Testimonial from './Testimonial';
import Line from './Line';

const Content = () => {
	return (
		<main className="max-w-dvw mx-auto dark:bg-gray-900">
			<Hero />
			<Line />
			<Games />
			<Line />
			<Testimonial />
		</main>
	)
}

export default Content;
