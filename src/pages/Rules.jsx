import React from 'react';
import HandRanks from './HandRanks';
import Procedures from './Procedures';
import SquidGame from './SquidGame';
import Line from '../Line';

const Rules = () => {
	return (
		<main className="max-w-dvw mx-auto dark:bg-gray-900">
			<HandRanks />
			<Line />
			<Procedures />
			<Line />
			<SquidGame />
		</main >
	)
}

export default Rules;
