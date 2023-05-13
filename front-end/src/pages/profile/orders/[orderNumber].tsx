import { useRouter } from 'next/router'
import { FC } from 'react'

import Layout from '@/components/layout/Layout'
import OrderDetails from '@/components/screens/profile/orders/order-details/OrderDetails'

const OrderDetailsPage: FC = () => {
	const router = useRouter()
	const { orderNumber } = router.query
	return (
		<Layout title={`#${orderNumber}`}>
			<OrderDetails />
		</Layout>
	)
}

export default OrderDetailsPage
