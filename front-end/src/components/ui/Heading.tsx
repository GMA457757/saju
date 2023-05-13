import { FC, PropsWithChildren } from 'react'

import { IHeading } from '@/types/heading.interface'

const Heading: FC<PropsWithChildren<IHeading>> = ({
	heading,
	description,
	children
}) => {
	return (
		<div className='flex items-center justify-between'>
			<div>
				<span className='block text-2xl font-semibold'>{heading}</span>
				{description && (
					<span className='flex items-center text-sm text-black/50 gap-x-1'>
						{description}
					</span>
				)}
			</div>
			{children && <span className='text-sm font-semibold'>{children}</span>}
		</div>
	)
}

export default Heading
