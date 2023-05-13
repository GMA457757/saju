import clsx from 'clsx'
import { FC } from 'react'
import { TbCurrencyManat } from 'react-icons/tb'

import { IProduct, IProductOption } from '@/types/product.interface'

interface IProductDetails {
	product: IProduct
	selectedOption: IProductOption
}

const ProductDetails: FC<IProductDetails> = ({ product, selectedOption }) => {
	return (
		<>
			<div className='flex flex-col gap-y-1'>
				<h1 className='text-3xl font-medium'>{product.name}</h1>
				<span className='text-black/50'>{product.category.name}</span>
				{/* <span className='text-black/50'>#544577410</span> */}
				<p className='text-black/50'>{product.description}</p>
			</div>
			<div>
				{selectedOption.discount && (
					<span className='flex gap-x-0.5 items-center text-lg text-black/50 line-through'>
						{selectedOption.price}
						<TbCurrencyManat />
					</span>
				)}
				<div
					className={clsx(
						'flex items-center gap-x-4',
						selectedOption.discount && 'text-Folly'
					)}
				>
					<span className='flex gap-x-0.5 items-center font-medium text-2xl'>
						{selectedOption.discount
							? selectedOption.price -
							  (selectedOption.price * selectedOption.discount) / 100
							: selectedOption.price}
						<TbCurrencyManat />
					</span>
					{selectedOption.discount && (
						<span className='text-xl'>-{selectedOption.discount}%</span>
					)}
				</div>
			</div>
		</>
	)
}

export default ProductDetails
