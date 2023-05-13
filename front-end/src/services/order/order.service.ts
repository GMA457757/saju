import { IOrder, IOrderItem } from '@/types/order.interface'

import { instance } from '@/utils/api/api.interceptor'

export const OrderService = {
	async getAll() {
		return instance<IOrderItem[]>({
			url: '/orders',
			method: 'GET'
		})
	},

	async getByOrderNumber(orderNumber: string) {
		return instance<IOrder[]>({
			url: `/orders/${orderNumber}`,
			method: 'GET'
		})
	}
}
