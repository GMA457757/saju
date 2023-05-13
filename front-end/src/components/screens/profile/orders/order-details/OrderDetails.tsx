import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { TbCurrencyManat } from 'react-icons/tb'

import ProfileLayout from '../../layout/ProfileLayout'

import OrderAdditionalDetails from './OrderAdditionalDetails'
import { OrderService } from '@/services/order/order.service'

const OrderDetails: NextPage = () => {
	const router = useRouter()

	const { orderNumber } = router.query

	const { data: orders, refetch } = useQuery({
		queryFn: () => OrderService.getByOrderNumber(`${orderNumber}`),
		queryKey: ['get order'],
		select: ({ data }) => data,
		enabled: false
	})

	useEffect(() => {
		if (!router.isReady) return
		refetch()
	}, [router.isReady])

	return (
		<ProfileLayout>
			<div className='flex flex-col col-span-9 gap-y-8'>
				<div>
					<span className='text-2xl font-semibold'>Sifarişim - #GM-547789</span>
					<p className='text-sm text-black/50'>
						Bütün sifarişləriniz burada görünməkdədir. Sifarişlər haqqında
						məlumat üçün ətraflı yazısına daxil olun.
					</p>
				</div>
				<ul className='flex justify-center w-full text-center progressbar text-sajuDark/70'>
					<li className="relative w-1/5 text-green-400 before:absolute before:bottom-[7px] before:left-1/2 before:-z-50 before:h-0.5 before:w-full before:bg-green-400 before:content-[''] after:mx-auto after:mt-2 after:flex after:h-4 after:w-4 after:items-center after:justify-center after:rounded-full after:bg-green-400 after:content-['']">
						Sifariş edildi
					</li>
					<li className="relative w-1/5 before:absolute before:bottom-[7px] before:left-1/2 before:-z-50 before:h-0.5 before:w-full before:bg-gray-400 before:content-[''] after:mx-auto after:mt-2 after:flex after:h-4 after:w-4 after:items-center after:justify-center after:rounded-full after:bg-gray-400 after:content-['']">
						Hazırlanır
					</li>
					<li className="relative w-1/5 before:absolute before:bottom-[7px] before:left-1/2 before:-z-50 before:h-0.5 before:w-full before:bg-gray-400 before:content-[''] after:mx-auto after:mt-2 after:flex after:h-4 after:w-4 after:items-center after:justify-center after:rounded-full after:bg-gray-400 after:content-['']">
						Göndərildi
					</li>
					<li className="relative w-1/5 after:mx-auto after:mt-2 after:flex after:h-4 after:w-4 after:items-center after:justify-center after:rounded-full after:bg-gray-400 after:content-['']">
						Çatdırıldı
					</li>
				</ul>
				<table className='overflow-hidden text-center border border-separate rounded border-spacing-0 border-black/10'>
					<thead className='rounded-3xl'>
						<tr className='text-white bg-sajuDark h-11'>
							<th className='font-normal'>Məhsul</th>
							<th className='font-normal'>Ədəd</th>
							<th className='font-normal'>Qiymət</th>
							<th className='font-normal'>Toplam qiymət</th>
						</tr>
					</thead>
					<tbody className='divide-y-2 divide-red-500'>
						{orders?.map(order => (
							<tr key={order.id} className='h-12'>
								<td className='flex items-center justify-start max-w-md text-left gap-x-3'>
									<picture className='block w-16 h-16 shrink-0'>
										<img
											className='object-cover w-full h-full'
											src={order.option.images[0]}
											alt=''
										/>
									</picture>
									<div className='flex flex-col'>
										<span className='font-medium'>
											{order.option.product.name}
										</span>
										<span className='self-start text-xs text-black/50'>
											{/* // Todo : extrac diff component */}
											{`${order.option.name ? order.option.name : ''}
												${order.option.name && order.option.size ? ' / ' : ''}
												${order.option.size ? order.option.size : ''}
												`}
										</span>
									</div>
								</td>
								<td>{order.count}</td>
								<td>
									<span className='flex gap-x-0.5 items-center justify-center text-sajuDark'>
										{order.price}
										<TbCurrencyManat />
									</span>
								</td>
								<td>
									<span className='flex gap-x-0.5 items-center justify-center text-sajuDark'>
										{order.totalPrice}
										<TbCurrencyManat />
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<OrderAdditionalDetails orders={orders || []} />
			</div>
		</ProfileLayout>
	)
}

export default OrderDetails
// !202
