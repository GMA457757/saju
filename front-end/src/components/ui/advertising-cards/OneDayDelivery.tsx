import Image from 'next/image'
import { FC } from 'react'

import Button from '../button/Button'

const OneDayDelivery: FC = () => {
	return (
		<section className='container grid grid-cols-12 p-16 gap-x-5 padding rounded-3xl bg-GhostWhite'>
			<div className='flex flex-col items-start col-span-7 gap-y-8'>
				<div className='flex flex-col gap-y-2'>
					<h5 className='text-4xl font-semibold'>
						Sifarişinizi bir gündə çatdıraq 🎉
					</h5>
					<p className='text-black/50'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page. Rreader will be distractedge.
					</p>
				</div>
				<Button>Start Shopping</Button>
			</div>
			<div className='col-span-3 col-start-10'>
				<Image
					src={'/assets/images/no-image-hero.png'}
					alt='One day delivery'
					width={265}
					height={167}
				/>
			</div>
		</section>
	)
}

export default OneDayDelivery
