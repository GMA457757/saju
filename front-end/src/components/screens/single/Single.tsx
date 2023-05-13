import { FC, useEffect, useState } from 'react'

import Catalog from '@/components/ui/catalog/Catalog'

import {
	IProduct,
	IProductItem,
	IProductOption
} from '@/types/product.interface'

import ProductAdditionalDetails from './additional-details/ProductAdditionalDetails'
import ProductActions from './product-actions/ProductActions'
import ProductDetails from './product-details/ProductDetails'
import ProductColors from './product-options/ProductColors'
import ProductSizes from './product-options/ProductSizes'
import ProductImages from './single-images/ProductImages'

interface ISingle {
	product: IProduct
	releatedPosts: IProductItem[]
}

const Single: FC<ISingle> = ({ product, releatedPosts }) => {
	// ? Bu işləm default olaraq productun birinci optionun seçir və sizə false olaraq dəyişilir ondan ptrü ki, istifadəçi rəngi özü seçsin. Bu zaman add to cart la bağlı problem çıxır option olmayanda productlarda default olaraq empty və ya false gəldiyi üçün carta əlavə etmək olmur və burada yoxlaş edilir əgər optionlar sayı 1 dən böyüksə false et yoxsa default oalraq seç ki add to cart işləsin
	const productFirstOption: IProductOption =
		product.productOptions.length > 1
			? { ...product.productOptions[0], size: false }
			: { ...product.productOptions[0], size: 'default' }

	const [selectedOption, setSelectedoption] = useState(productFirstOption)

	useEffect(() => {
		setSelectedoption(productFirstOption)
	}, [product])

	return (
		<>
			<section className='container grid grid-cols-7 gap-x-5'>
				<ProductImages images={selectedOption.images} />

				<div className='flex flex-col col-span-3 gap-y-7'>
					<ProductDetails product={product} selectedOption={selectedOption} />

					<ProductColors
						productOptions={product.productOptions}
						selectedOption={selectedOption}
						setSelectedoption={setSelectedoption}
					/>

					<ProductSizes
						productOptions={product.productOptions}
						selectedOption={selectedOption}
						setSelectedoption={setSelectedoption}
					/>

					<ProductActions
						product={product}
						selectedOption={selectedOption}
						setSelectedoption={() => setSelectedoption(productFirstOption)}
					/>

					<ProductAdditionalDetails product={product} />
				</div>
			</section>

			{/* // Todo : if releated post not found show last 4 post from backend */}
			{releatedPosts.length !== 0 && (
				<Catalog
					products={releatedPosts}
					heading='Bənzər məhsullar'
					description='İstifadəçilər tərəfindən çox sevilən məhsullar 💎'
				/>
			)}
		</>
	)
}

export default Single

// ! 160 Line code
