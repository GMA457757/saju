import { FC } from 'react'
import { TbCurrencyManat } from 'react-icons/tb'

import { IOrder } from '@/types/order.interface'

const OrderAdditionalDetails: FC<{ orders: IOrder[] }> = ({ orders }) => {
	return (
		<div className='flex p-6 text-white rounded-lg gap-x-16 bg-sajuDark'>
			<div className='flex flex-col flex-1 gap-y-4'>
				<div className='flex gap-x-4'>
					<span className='font-medium'>Sifariş tarixi :</span>
					<time className='text-white/80'>09.01.2023</time>
				</div>
				<div className='flex gap-x-4'>
					<span className='font-medium'>Ödəmə tipi :</span>
					<time className='text-white/80'>Kartla ödəmə</time>
				</div>
				<div className='flex gap-x-4'>
					<span className='font-medium'>Sifariş durumu :</span>
					<time className='text-white/80'>Sifariş edildi</time>
				</div>
				<p className='text-white/80'>
					{/* Roma Asgerov Bakı şəhəri, Nizami rayonu, Q.Qarayev prospekti, bina 126
					mənzil 777 <br /> (+994) 50-616-68-94 */}
					{orders[0]?.cargo?.address}
					<br />
					{/* {orders[0].cargo.} */}
				</p>
			</div>
			<div className='flex flex-col flex-1 gap-y-2'>
				<div className='flex justify-between gap-x-4'>
					<span className='font-medium'>Çatdırılma məbləği :</span>
					<span className='text-white/80'>Pulsuz</span>
				</div>
				<div className='flex justify-between gap-x-4'>
					<span className='font-medium'>Ara cəm :</span>
					<span className='flex items-center gap-x-1 text-white/80'>
						315.98 <TbCurrencyManat />
					</span>
				</div>
				<div className='flex justify-between gap-x-4'>
					<span className='font-medium'>Endirim :</span>
					<span className='flex items-center gap-x-1 text-Folly'>
						315.98 <TbCurrencyManat />
					</span>
				</div>
				<hr />
				<div className='flex items-center justify-between text-xl'>
					<span className='font-semibold'>Toplam ödənən tutar</span>
					<span className='flex items-center font-medium gap-x-1'>
						241.98 <TbCurrencyManat />
					</span>
				</div>
			</div>
		</div>
	)
}

export default OrderAdditionalDetails
