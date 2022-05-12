import { BookGroupFantasy } from '../components/BookGroupFantasy';
import { BookGroupPolitics } from '../components/BookGroupPolitics';
import { BookGroupTechnology } from '../components/BookGroupTechnology';
import { NavLink } from 'react-router-dom';

export const PageBooks = () => {
	return (
		<div className="page_books">
			<h2>Books</h2>
			<p>This is the book page.</p>

			<ul>
				<li><NavLink to="fantasy">Fantasy</NavLink></li>
				<li><NavLink to="politics">Politics</NavLink></li>
				<li><NavLink to="technology">Technology</NavLink></li>
			</ul>

			<BookGroupFantasy />
			<BookGroupPolitics />
			<BookGroupTechnology />
		</div>
	);
};
