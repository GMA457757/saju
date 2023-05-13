import clsx from 'clsx'
import { FC } from 'react'

import Accordion from '@/components/ui/accordion/Accordion'

import { IProduct } from '@/types/product.interface'

import PaymentMethods from './PaymentMethods'
import ProductAbout from './ProductAbout'

const ProductAdditionalDetails: FC<{ product: IProduct }> = ({ product }) => {
	console.log('additiona details rendered')

	return (
		<div className='divide-y border-y'>
			{(product.about || product.attributes) && (
				<ProductAbout product={product} />
			)}

			{/* // Todo :  extract this section to different componenet SizeGuide.tsx and optimize code from front-end if need optimize back-end */}
			{product.category.sizeGuide && (
				<Accordion title='Ölçü məlumatları və tablosu'>
					<div className='flex flex-col gap-y-5'>
						{product.category.sizeGuide.content && (
							<div
								dangerouslySetInnerHTML={{
									__html: product.category.sizeGuide.content
								}}
							/>
						)}

						<div className='w-full'>
							{product.category.sizeGuide.columns && (
								<div className='flex items-center font-medium'>
									{product.category.sizeGuide?.columns.map(item => (
										<div className='flex-1'>{item}</div>
									))}
								</div>
							)}

							{product.category.sizeGuide.chart &&
								product.category?.sizeGuide?.chart.map((item, i) => (
									<div
										className={clsx(
											'flex items-center px-2 text-sm',
											i % 2 == 0 && 'bg-UltramarineBlue/5'
										)}
									>
										{item.map(el => (
											<div className='flex-1 py-2'>{el}</div>
										))}
									</div>
								))}
						</div>
					</div>
				</Accordion>
			)}

			<PaymentMethods />
		</div>
	)
}

export default ProductAdditionalDetails
