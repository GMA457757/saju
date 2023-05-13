import { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import MyOrders from '@/components/screens/profile/orders/MyOrders'

const MyCouponsPage: NextPage = () => {
	return (
		<Layout title={'Sifarişlərim'}>
			<MyOrders />
		</Layout>
	)
}

export default MyCouponsPage
