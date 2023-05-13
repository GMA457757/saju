import { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import MyCoupons from '@/components/screens/profile/coupons/MyCoupons'

const MyCouponsPage: NextPage = () => {
	return (
		<Layout title={'Kuponlarım'}>
			<MyCoupons />
		</Layout>
	)
}

export default MyCouponsPage
