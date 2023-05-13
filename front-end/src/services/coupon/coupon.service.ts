import { ICoupon } from '@/types/coupon.interface'

import { instance } from '@/utils/api/api.interceptor'

export const CouponService = {
	async getAll() {
		return instance<ICoupon[]>({
			url: '/coupons',
			method: 'GET'
		})
	}
}
