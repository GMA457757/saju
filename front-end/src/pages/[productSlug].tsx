import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import Single from '@/components/screens/single/Single'

import { IProduct, IProductItem } from '@/types/product.interface'

interface IProductDetailsPage {
	product: IProduct
	releatedPosts: IProductItem[]
}

const ProductDetailsPage: NextPage<IProductDetailsPage> = ({
	product,
	releatedPosts
}) => {
	return (
		<Layout title={product.name}>
			<Single product={product} releatedPosts={releatedPosts} />
		</Layout>
	)
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {
	const { data } = await axios.get(
		`http://localhost:4200/api/products/product-details/${params?.productSlug}`
	)

	return {
		props: {
			product: data.product,
			releatedPosts: data.releatedProducts
		}
	}
}

export default ProductDetailsPage
