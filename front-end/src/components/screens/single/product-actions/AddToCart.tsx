import { Dispatch, FC, SetStateAction } from 'react'
import { SlBasketLoaded } from 'react-icons/sl'
import { useDispatch } from 'react-redux'

import { cartSlice } from '@/store/cart/cart.slice'

import { useCart } from '@/hooks/useCart'

import { IProduct, IProductOption } from '@/types/product.interface'

interface IAddToCart {
	product: IProduct
	selectedOption: IProductOption
	quantity: number
	resetSelectedOption: Dispatch<SetStateAction<void>>
	resetQuantity: Dispatch<SetStateAction<void>>
}

const AddToCart: FC<IAddToCart> = ({
	selectedOption,
	product,
	quantity,
	resetQuantity,
	resetSelectedOption
}) => {
	const dispatch = useDispatch()

	const { items } = useCart()

	const isExists = items.some(item => item.id === product.id)
	return (
		<>
			{/* 	<button onClick={() => (resetQuantity(), resetSelectedOption())}>
				asdas
			</button> */}
			<button
				className='relative flex items-center px-8 py-3 text-white bg-black rounded gap-x-4 group'
				disabled={!selectedOption.size}
				onClick={() =>
					dispatch(
						cartSlice.actions.addToCart({
							...product,
							quantity,
							selectedOption
						})
					)
				}
			>
				{isExists ? 'Səbətdən çıxart' : 'Səbətə əlavə et'}

				{/* SƏBƏTƏ ƏLAVƏ ET */}
				<span className='text-xl'>
					<SlBasketLoaded />
				</span>
				{!selectedOption.size && (
					<div className='absolute top-0 left-0 items-center justify-center hidden w-full h-full bg-black group-hover:flex'>
						<span>ÖLÇÜ SEÇİN</span>
					</div>
				)}
			</button>
		</>
	)
}

export default AddToCart
