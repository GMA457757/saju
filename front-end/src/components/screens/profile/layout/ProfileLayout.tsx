import { FC, PropsWithChildren } from 'react'

import ProfileSidebar from './sidebar/ProfileSidebar'

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<section className='container grid grid-cols-12 gap-x-5'>
			<ProfileSidebar />
			<div className='flex flex-col col-span-9 gap-y-8'>{children}</div>
		</section>
	)
}

export default ProfileLayout
