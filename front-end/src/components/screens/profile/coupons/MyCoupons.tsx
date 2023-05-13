import { FC } from 'react'

import Heading from '@/components/ui/Heading'

import { useCoupon } from '@/hooks/useCoupon'

import ProfileLayout from '../layout/ProfileLayout'

import CouponItem from './coupon-item/CouponItem'

const MyCoupons: FC = () => {
	const { data: coupons } = useCoupon()
	return (
		<ProfileLayout>
			<Heading
				heading='Kuponlarım'
				description='Hesabınızda aktiv olan kuponlardan istifadə edərək endirimlərdən
					yararlana bilərsiniz.'
			/>
			<div className='grid grid-cols-3 gap-5'>
				{coupons?.map(coupon => (
					<CouponItem key={coupon.code} coupon={coupon} />
				))}
			</div>
		</ProfileLayout>
	)
}

export default MyCoupons
