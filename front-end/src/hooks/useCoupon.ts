import { useQuery } from '@tanstack/react-query'

import { CouponService } from '@/services/coupon/coupon.service'

export const useCoupon = () => {
	return useQuery({
		queryFn: () => CouponService.getAll(),
		queryKey: ['get coupon'],
		select: ({ data }) => data,
		staleTime: 5000
	})
}
