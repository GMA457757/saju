import { useTypedSelector } from './useTypedSelector'

export const useCart = () => {
	const { items } = useTypedSelector(state => state.cart)

	const cartLength = items.length

	return { items }
}
