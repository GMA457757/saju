import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { BiFilterAlt } from 'react-icons/bi'
import { TbCurrencyManat } from 'react-icons/tb'

import Heading from '@/components/ui/Heading'
import Field from '@/components/ui/input/Field'

import { dateFormat } from '@/utils/dateFormat'

import ProfileLayout from '../layout/ProfileLayout'

import { OrderService } from '@/services/order/order.service'

const MyOrders: FC = () => {
	const [filterTerm, setFilterTerm] = useState('')
	const router = useRouter()

	const { data: orders } = useQuery({
		queryFn: () => OrderService.getAll(),
		queryKey: ['get all orders'],
		select: ({ data }) => data,
		staleTime: 5000
	})

	const includesIgnoreCase = (str: string, searchStr: string) =>
		str.toLowerCase().includes(searchStr.toLowerCase())

	return (
		<ProfileLayout>
			<Heading
				heading='Sifarişlərim'
				description='Bütün sifarişləriniz burada görünməkdədir. Sifarişlər haqqında məlumat üçün ətraflı yazısına daxil olun.'
			/>

			<div className='flex items-center justify-between'>
				<div className='flex gap-x-11 text-black/50'>
					{/* // Todo : At the moment this section does not work */}
					<button className='font-medium text-black'>
						Bütün sifarişlərim (3)
					</button>
					<button>Hazırlanır</button>
					<button>Yolda</button>
					<button>Təhvil verildi</button>
				</div>
				<div>
					<Field
						placeholder='Sürətli axtarış'
						Icon={BiFilterAlt}
						onChange={e => setFilterTerm(e.target.value)}
					/>
				</div>
			</div>
			<table className='overflow-hidden text-center border border-separate rounded border-spacing-0 border-black/10'>
				<thead className='rounded-3xl'>
					<tr className='text-white bg-sajuDark h-11'>
						<th className='font-normal'>Sifariş Kodu</th>
						<th className='font-normal'>Məhsulun adı</th>
						<th className='font-normal'>Toplam qiymət</th>
						<th className='font-normal'>Sifariş tarixi</th>
						<th className='font-normal'>Sifariş durumu</th>
					</tr>
				</thead>
				<tbody className='divide-y'>
					{orders
						?.filter(order =>
							includesIgnoreCase(order['order_number'], filterTerm)
						)
						?.map((order, i) => (
							<tr
								onClick={() =>
									router.push(`/profile/orders/${order.order_number}`)
								}
								key={order.order_number}
								className={clsx('h-12', i % 2 == 0 && 'bg-UltramarineBlue/5')}
							>
								<td>#{order.order_number}</td>
								<td className='max-w-[200px]'>
									<span className='line-clamp-2'>{order.name}</span>
								</td>
								<td>
									<span className='flex gap-x-0.5 items-center justify-center text-sajuDark'>
										{order.total_price}
										<TbCurrencyManat />
									</span>
								</td>
								<td>{dateFormat(order.created_at).date}</td>
								<td>
									<span className='px-2 py-1 text-yellow-600 bg-yellow-100 rounded'>
										{order.status}
									</span>
								</td>
							</tr>
							// Todo : In the future, this should be paginated.
						))}
				</tbody>
			</table>
		</ProfileLayout>
	)
}

export default MyOrders
// !166
