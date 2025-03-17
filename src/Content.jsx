import Hero from './Hero';
import Games from './Games';
import Testimonial from './Testimonial';
import Line from './Line';

const Content = () => {
	return (
		<main className="max-w-4xl mx-auto">
			<Hero />
			<Line />
			<Games />
			<Line />
			<Testimonial />
		</main>
	)
}

export default Content;
