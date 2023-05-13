import Link from 'next/link'
import { FC } from 'react'

import { IHeading } from '@/types/heading.interface'
import { IProductItem } from '@/types/product.interface'

import Heading from '../Heading'

import CatalogItem from './catalog-item/CatalogItem'
import Sorting from './sorting/Sorting'

interface ICatalog extends IHeading {
	products: IProductItem[]
	isSortable?: boolean
}

const Catalog: FC<ICatalog> = ({
	isSortable,
	products,
	heading,
	description
}) => {
	return (
		<>
			<section className='container flex flex-col gap-y-8'>
				<Heading heading={heading} description={description}>
					<Link href={'/'}>Hamısını göstər</Link>
				</Heading>
				{isSortable && <Sorting />}
				<div className='grid grid-cols-4 gap-5'>
					{products &&
						products.map(product => (
							<CatalogItem product={product} key={product.id} />
						))}
				</div>
			</section>
		</>
	)
}

export default Catalog
