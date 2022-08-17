import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
	// use to get slice of returned output by reducer function
	// useSelector redux automatically creates subscription of this component
	const counter = useSelector(state => state.count);
	const show = useSelector(state => state.showCount);

	const dispatch = useDispatch();

	const increamentHandler = () => {
		dispatch(counterActions.increament(1));
		// { type: some unique id, payload: 1}
	};

	const decreamentHandler = () => {
		dispatch(counterActions.decreament(1));
	};

	const increament5Handler = () => {
		dispatch(counterActions.increament(5));
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}> {counter} </div>}
			<div>
				<button onClick={increamentHandler}> Increament </button>
				<button onClick={increament5Handler}> Increament by 5 </button>
				<button onClick={decreamentHandler}> Decreament </button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
