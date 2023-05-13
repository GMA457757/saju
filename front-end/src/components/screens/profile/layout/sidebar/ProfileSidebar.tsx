import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { sidebarData } from './sidebarData'

const ProfileSidebar: FC = () => {
	const { pathname } = useRouter()

	return (
		<aside className='sticky top-0 flex flex-col self-start col-span-3 gap-y-5'>
			{sidebarData.map((item, i) => (
				<div key={i} className='flex flex-col gap-y-1 text-black/70'>
					<span className='text-xl font-semibold'>{item.heading}</span>
					{item.links.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className={clsx(
								pathname.includes(link.href) && 'font-medium text-black'
							)}
						>
							{link.label}
						</Link>
					))}
				</div>
			))}
		</aside>
	)
}

export default ProfileSidebar
