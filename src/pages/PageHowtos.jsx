import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const url = 'https://edwardtanguay.netlify.app/share/howtos.json';

export const PageHowtos = () => {
	const [howtos, setHowtos] = useState([]);
	let { id } = useParams();
	id = Number(id);

	useEffect(() => {
		(async () => {
			setHowtos((await axios.get(url)).data);
		})();
	}, []);

	return (
		<div className="page_howtos">
			<h2>Howtos</h2>
			{howtos.length === 0 ? (
				<div className="loading">Loading...</div>
			) : (
				<>
					<p>I currently have {howtos.length} howtos:</p>

					<div className="howtos">
						{howtos.map((howto, index) => {
							return (
								<>
									{howto.id === id && (
										<div className="howto" key={index}>
											<div className="title">
												<a
													target="_blank"
													href={`https://edwardtanguay.netlify.app/howtos?id=${howto.id}`}
												>
													{howto.title}
												</a>
											</div>
											<pre className="body">
												{howto.body}
											</pre>
										</div>
									)}
								</>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};
