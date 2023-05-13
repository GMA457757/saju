import { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'

import Layout from '@/components/layout/Layout'
import Home from '@/components/screens/home/Home'

import { IProductItem } from '@/types/product.interface'

import { instance } from '@/utils/api/api.interceptor'

import { ProductService } from '@/services/product/product.service'

const HomePage: NextPage<{ products: IProductItem[] }> = ({ products }) => {
	useEffect(() => {
		const requestt = async () => {
			const res = await instance({
				url: '/products'
			})
		}
		requestt()
	}, [])
	return (
		<>
			<Layout title={'Test Title'}>
				<Home products={products} />
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps<{
	products: IProductItem[]
}> = async () => {
	const { data: products } = await ProductService.getAll()

	return {
		props: { products },
		revalidate: 30
	}
}

export default HomePage
