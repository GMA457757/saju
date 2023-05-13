import { Dispatch, FC, SetStateAction, useState } from 'react'

import { IProduct, IProductOption } from '@/types/product.interface'

import AddToCart from './AddToCart'
import ChangeQuantity from './ChangeQuantity'
import ProductToggleFavorite from './ProductToggleFavorite'

interface IProductActions {
	product: IProduct
	selectedOption: IProductOption
	setSelectedoption: Dispatch<SetStateAction<void>>
}

const ProductActions: FC<IProductActions> = ({
	product,
	selectedOption,
	setSelectedoption
}) => {
	const [quantity, setQuantity] = useState(1)

	return (
		<>
			<ChangeQuantity quantity={quantity} setQuantity={setQuantity} />

			<div className='flex gap-x-9'>
				<AddToCart
					product={product}
					selectedOption={selectedOption}
					quantity={quantity}
					resetSelectedOption={() => setSelectedoption()}
					resetQuantity={() => setQuantity(1)}
				/>
				<ProductToggleFavorite product={product} />
			</div>
		</>
	)
}

export default ProductActions
