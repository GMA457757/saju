import { FC } from 'react'
import { useDispatch } from 'react-redux'

import { cartSlice } from '@/store/cart/cart.slice'

import { useCart } from '@/hooks/useCart'

import { IProductItem } from '@/types/product.interface'

import Button from '../../button/Button'

const AddToCartButton: FC<{ product: IProductItem }> = ({ product }) => {
	// Todo  : Merge file with AddToCart.tsx
	const dispatch = useDispatch()

	const { items } = useCart()

	const isExists = items.some(item => item.id === product.id)
	return (
		<div className='absolute bottom-0 justify-center hidden w-full py-4 group-hover:flex bg-white/80'>
			<Button onClick={() => dispatch(cartSlice.actions.addToCart(product))}>
				{isExists ? 'Səbətdən çıxart' : 'Səbətə əlavə et'}
			</Button>
		</div>
	)
}

export default AddToCartButton
