import { useOutletContext } from 'react-router-dom';

export const Howto = () => {
	const howto = useOutletContext();
	return (
		<div className="howto">
			<div className="title">
				<a
					target="_blank"
					href={`https://edwardtanguay.netlify.app/howtos?id=${howto.id}`}
				>
					{howto.title} ({howto.id})
				</a>
			</div>
			<pre className="body">{howto.body}</pre>
		</div>
	);
};
