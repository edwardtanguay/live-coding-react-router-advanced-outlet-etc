import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, NavLink, useNavigate, Outlet } from 'react-router-dom';

const url = 'https://edwardtanguay.netlify.app/share/howtos.json';
const currentCategory = 'React';

export const PageHowtos = () => {
	const [howtos, setHowtos] = useState([]);
	let { id } = useParams();
	id = Number(id);
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			const allHowtos = (await axios.get(url)).data;
			const _howtos = allHowtos.filter(
				(m) =>
					m.category.toLowerCase() === currentCategory.toLowerCase()
			);
			setHowtos(_howtos);
		})();
	}, []);

	const getCurrentHowto = () => {
		if (id) {
			return howtos.find((m) => m.id == id);
		} else {
			if (howtos.length > 0) {
				const _id = String(howtos[0].id);
				navigate(_id);
			}
		}
	};

	return (
		<div className="page_howtos">
			<h2>Howtos</h2>
			{howtos.length === 0 ? (
				<div className="loading">Loading...</div>
			) : (
				<>
					<p>
						I currently have {howtos.length} {currentCategory}{' '}
						howtos:
					</p>

					<nav>
						<ul>
							{howtos.map((howto, index) => {
								return (
									<li key={index}>
										<NavLink to={`${howto.id}`}>
											{howto.title}
										</NavLink>
									</li>
								);
							})}
						</ul>
					</nav>
					<hr />
					<Outlet context={getCurrentHowto()} />
					<hr />
				</>
			)}
		</div>
	);
};
