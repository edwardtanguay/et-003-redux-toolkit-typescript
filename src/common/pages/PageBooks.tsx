import { useDispatch, useSelector } from 'react-redux';
import { add, subtract } from '../../features/cart/cartSlice';
import { RootState } from '../../app/store';

export const PageBooks = () => {
	const dispatch = useDispatch();
	const selectCart = (state: RootState) => state.cart;
	const { count } = useSelector(selectCart);

	return (
		<div className="pageBooks">
			<button onClick={() => dispatch(subtract())}>Subtract One</button>
			<button onClick={() => dispatch(add())}>Add One</button>
			<hr />
			<div>count: {count}</div>
		</div>
	);
};
