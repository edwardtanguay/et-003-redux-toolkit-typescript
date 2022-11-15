import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const PageBooks = () => {
	const dispatch = useDispatch();
	const selectCart = (state: RootState) => state.cart;
	const { books, cartItems } = useSelector(selectCart);

	return (
		<div className="pageBooks">
			<div className="books">
				{books.map((book) => {
					return (
						<div onClick={() => dispatch({type: 'cart/addCartItem', payload: {book}})} className="book" key={book.id}>
							<img src={`images/${book.idCode}.jpg`} />
						</div>
					);
				})}
			</div>
			<p className="message">You have {cartItems.length} items in your cart.</p>
		</div>
	);
};
