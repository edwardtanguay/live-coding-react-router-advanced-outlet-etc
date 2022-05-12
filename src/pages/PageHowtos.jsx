import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://edwardtanguay.netlify.app/share/howtos.json';

export const PageHowtos = () => {
	const [howtos, setHowtos] = useState([]);

	useEffect(() => {
		(async () => {
			setHowtos((await axios.get(url)).data);
		})();
	}, []);

	return (
		<>
			<h2>Howtos</h2>
			{howtos.length === 0 ? (
				<div className="loading">Loading...</div>
			) : (
				<p>I currently have {howtos.length} howtos:</p>
			)}
		</>
	);
};
