import { FC } from 'react'

import FirstOrderDiscount from '@/components/ui/advertising-cards/FirstOrderDiscount'
import OneDayDelivery from '@/components/ui/advertising-cards/OneDayDelivery'
import Catalog from '@/components/ui/catalog/Catalog'

import { IProductItem } from '@/types/product.interface'

import Hero from './hero/Hero'

const Home: FC<{ products: IProductItem[] }> = ({ products }) => {
	const arr = [{ color: 'Purple', size: 22, stock: 5 }]
	return (
		<>
			<Hero />

			<Catalog
				products={products}
				heading='Best Products This Month'
				description='İstifadəçilər tərəfindən çox sevilən məhsullar 💎'
			/>

			<OneDayDelivery />

			<Catalog
				products={products}
				heading='Bizim digər məhsullar'
				description='Seçdiyiniz məhsulu sifariş edərək, bir gündə əldə edin ✨'
				isSortable
			/>

			<FirstOrderDiscount />
		</>
	)
}

export default Home
