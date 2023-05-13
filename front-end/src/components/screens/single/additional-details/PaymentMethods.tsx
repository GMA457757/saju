import { FC } from 'react'
import { BsArrowLeftRight, BsTruck } from 'react-icons/bs'

import Accordion from '@/components/ui/accordion/Accordion'

const PaymentMethods: FC = () => {
	return (
		<Accordion title='Çatdırılma və Qaytarma'>
			<div className='flex flex-col gap-y-5'>
				<div className='flex gap-x-5'>
					<span className='text-2xl'>
						<BsTruck />
					</span>
					<div className='flex flex-col gap-y-3'>
						<span className='ml-1 text-base font-bold'>Ship to Home</span>
						<div className='flex flex-col gap-y-1'>
							<span className='text-sm font-medium'>Standard Shipping</span>
							<ul className='text-xs list-disc list-inside text-black/80'>
								<li>Free on orders $75+.</li>
								<li>Arrives in 2-4 business days.</li>
							</ul>
						</div>
						<div className='flex flex-col gap-y-1'>
							<span className='text-sm font-medium'>Next Day Shipping</span>
							<ul className='text-xs list-disc list-inside text-black/80'>
								<li>Free on all Lab-Created Diamonds by Pandora purchases</li>
								<li>Arrives the next business day if ordered by 1pm ET.</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='flex gap-x-5'>
					<span className='text-2xl'>
						<BsArrowLeftRight />
					</span>
					<div className='flex flex-col gap-y-3'>
						<span className='ml-1 text-base font-bold'>Returns</span>
						<div className='flex flex-col gap-y-1'>
							<span className='text-sm font-medium'>Standard Shipping</span>
							<ul className='text-xs list-disc list-inside text-black/80'>
								<li>
									Free and easy returns within 30 days, online or in-store.
								</li>
								<li>Prepaid return label included.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Accordion>
	)
}

export default PaymentMethods
