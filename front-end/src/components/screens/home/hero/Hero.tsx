import { FC } from 'react'

import Button from '@/components/ui/button/Button'

const Hero: FC = () => {
	return (
		<>
			<section className='py-32 -mt-16 bg-BrightGray'>
				<div className='container grid grid-cols-12 gap-x-5'>
					<div className='flex flex-col items-start justify-between col-span-7'>
						<div className='flex flex-col gap-y-5'>
							<h1 className='text-6xl font-medium'>
								<strong>Gift</strong> and <strong>Flower</strong> for
								<br />
								Your Beloved
							</h1>
							<p className='text-xl text-black/60'>
								Priding ourselves on the quality, bold colours and
								sustainability of our products, üill give you a boost of
								confidence.
							</p>
						</div>
						<Button className='!py-4 !text-xl !px-14'>Start Shopping</Button>
					</div>
					<div className='col-span-5'>
						<img
							src='./assets/images/no-image-hero.png'
							alt='Image Alt atr here'
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero
