import { Dispatch, FC, SetStateAction } from 'react'
import { BsCheckLg } from 'react-icons/bs'

import { IProductOption } from '@/types/product.interface'

// Todo : Extract interface one file this interface used at some Sizes
interface IProductOptions {
	productOptions: IProductOption[]
	selectedOption: IProductOption
	setSelectedoption: Dispatch<SetStateAction<IProductOption>>
}

const ProductColors: FC<IProductOptions> = ({
	productOptions,
	selectedOption,
	setSelectedoption
}) => {
	const unique = [
		...new Map(productOptions.map(item => [item.color, item])).values()
	]
	return (
		<>
			{productOptions[0].color && (
				<div className='flex flex-col gap-y-2'>
					<span className='font-semibold'>Rənglər :</span>
					<div className='flex flex-wrap gap-2'>
						{unique.map(option => (
							<button
								key={option.color}
								className='relative border rounded w-11 h-11 border-black/10'
								style={{ backgroundColor: option.color }}
								// ? Size : false rəng seçilərkən size ni sıfırlamağa yarayır əks halda rəng dəyişəndə size seçili gəlir və qalır
								onClick={() => setSelectedoption({ ...option, size: false })}
								title={option.name}
							>
								{selectedOption.color === option.color && (
									<div className='absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/5'>
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

export default ProductColors
