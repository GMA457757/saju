import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { TbCurrencyManat } from 'react-icons/tb'

import { IProductItem } from '@/types/product.interface'

import AddToCartButton from './AddToCartButton'
import FavoriteButton from './FavoriteButton'

const CatalogItem: FC<{ product: IProductItem }> = ({ product }) => {
	return (
		<article className='overflow-hidden bg-GhostWhite rounded-2xl group'>
			<Link href={`/${product.slug}`} className='flex flex-col h-full gap-y-3'>
				<picture className='relative block w-full h-80'>
					<Image
						className='object-cover w-full h-full'
						src={product.productOptions[0].images[0]}
						alt={'Pandora ME Happy Love Link Chain Bracelet Gift Set'}
						fill
					/>
					<div className='absolute top-0 flex items-center justify-between w-full p-3'>
						{product.productOptions[0].discount ? (
							<span className='px-2 py-1 text-xs font-medium rounded bg-white/90'>
								- {product.productOptions[0].discount}%
							</span>
						) : (
							<span></span>
						)}
						<FavoriteButton product={product} />
					</div>
					<AddToCartButton product={product} />
				</picture>
				<div className='flex flex-col justify-between flex-1 px-3'>
					<div>
						<h3 className='line-clamp-2'>{product.name}</h3>
						<span className='text-xs text-black/50'>
							{product.category.name}
						</span>
					</div>
					<div className='flex items-center py-3 gap-x-2'>
						<span
							className={clsx(
								'flex gap-x-0.5 items-center font-medium',
								product.productOptions[0].discount > 0 && 'text-Folly'
							)}
						>
							{product.productOptions[0].discount
								? product.productOptions[0].price -
								  (product.productOptions[0].price *
										product.productOptions[0].discount) /
										100
								: product.productOptions[0].price}
							<TbCurrencyManat />
						</span>
						{product.productOptions[0].discount !== 0 && (
							<span className='flex gap-x-0.5 items-center text-xs text-black/50 line-through'>
								{product.productOptions[0].price}
								<TbCurrencyManat />
							</span>
						)}
					</div>
				</div>
			</Link>
		</article>
	)
}

export default CatalogItem
