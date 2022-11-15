import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../features/cart/cartSlice';
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
						<div className="book" key={book.id}>
							<img src={`images/${book.idCode}.jpg`} />
						</div>
					);
				})}
			</div>
		</div>
	);
};
