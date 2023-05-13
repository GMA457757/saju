import { FC } from 'react'

import Accordion from '@/components/ui/accordion/Accordion'

import { IProduct } from '@/types/product.interface'

const ProductAbout: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<>
			<Accordion title='Məhsul haqqında'>
				<div className='flex flex-col gap-y-5'>
					{product.about && <p className='text-sm'>{product.about}</p>}

					{product.attributes && (
						<ul className='flex flex-col gap-1.5'>
							{product.attributes.map(attribute => (
								<li key={attribute.key} className='flex text-sm'>
									<span className='flex-1'>{attribute.key}</span>
									<span className='flex-1 text-black/50'>
										{attribute.value}
									</span>
								</li>
							))}
						</ul>
					)}
				</div>
			</Accordion>
		</>
	)
}

export default ProductAbout
