import { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import MyPersonalDetails from '@/components/screens/profile/personal-details/MyPersonalDetails'

const PersonalDetailsPage: NextPage = () => {
	return (
		<Layout title={'Şəxsi məlumatlarım'}>
			<MyPersonalDetails />
		</Layout>
	)
}

export default PersonalDetailsPage
