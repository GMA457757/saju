import { FC } from 'react'
import { BsPercent } from 'react-icons/bs'
import { TbCurrencyManat } from 'react-icons/tb'

import { ICoupon } from '@/types/coupon.interface'

import { dateFormat } from '@/utils/dateFormat'

import CouponCuts from './CouponCuts'

const CouponItem: FC<{ coupon: ICoupon }> = ({ coupon }) => {
	const createdAt = dateFormat(coupon.createdAt)
	const expireAt = dateFormat(coupon.expireAt)
	return (
		<div className='flex flex-col h-40 border border-black rounded-lg'>
			<div className='relative flex items-center justify-between p-4 text-white bg-sajuDark'>
				<span className='text-2xl font-semibold'>{coupon.code}</span>
				<span className='flex items-center text-3xl font-semibold'>
					50{coupon.type === 'percent' ? <BsPercent /> : <TbCurrencyManat />}
				</span>
				<CouponCuts />
			</div>
			<div className='flex flex-col justify-between flex-1 px-4 py-2'>
				<span className='text-xs text-VampireBlack/70'>
					{coupon.description}
				</span>
				<span className='text-xs text-VampireBlack/70'>
					{`${createdAt.date} ${createdAt.time} - ${expireAt.date} ${expireAt.time}`}
				</span>
			</div>
		</div>
	)
}

export default CouponItem
