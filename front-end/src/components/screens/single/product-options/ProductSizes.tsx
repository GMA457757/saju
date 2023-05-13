import { Dispatch, FC, SetStateAction } from 'react'
import { BsCheckLg } from 'react-icons/bs'

import { IProductOption } from '@/types/product.interface'

// Todo : Extract interface one file this interface used at some Colors
interface IProductOptions {
	productOptions: IProductOption[]
	selectedOption: IProductOption
	setSelectedoption: Dispatch<SetStateAction<IProductOption>>
}

const ProductSizes: FC<IProductOptions> = ({
	productOptions,
	selectedOption,
	setSelectedoption
}) => {
	return (
		<>
			{productOptions[0].size && (
				<div className='flex flex-col gap-y-2'>
					<span className='font-semibold'>Ölçülər :</span>
					<div className='flex flex-wrap gap-2'>
						{productOptions
							.filter(el => el.color === selectedOption.color)
							.map((option, i) => (
								<button
									key={i}
									className='relative flex items-center px-3 py-1 text-base border border-black rounded gap-x-1'
									onClick={() => setSelectedoption(option)}
								>
									{option.size}
									{selectedOption.size === option.size && (
										<div className=''>
											<BsCheckLg className='text-2xl' />
										</div>
									)}
								</button>
							))}
					</div>
				</div>
			)}
		</>
	)
}

export default ProductSizes
