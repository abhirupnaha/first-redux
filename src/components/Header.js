import { useSelector, useDispatch } from 'react-redux';

import classes from './Header.module.css';
import { authActions } from '../store/auth-slice';

const Header = () => {
	const isLogIn = useSelector((state) => state.auth.authenticated);
	const dispatch = useDispatch();
	
	const logoutHandler = () => {
		dispatch(authActions.logOut());
	}
	
	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			{isLogIn &&
				<nav>
					<ul>
						<li>
							<a href='/'>My Products</a>
						</li>
						<li>
							<a href='/'>My Sales</a>
						</li>
						<li>
							<button onClick={logoutHandler}>Logout</button>
						</li>
					</ul>
				</nav>
			}
		</header>
	);
};

export default Header;
