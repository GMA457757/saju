import { axiosClassic } from '@/utils/api/api.interceptor'

export const ProductService = {
	async getAll() {
		return axiosClassic({
			url: '/products',
			method: 'GET'
		})
	}
}
