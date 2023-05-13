import { FC } from 'react'

import Button from '../button/Button'

const FirstOrderDiscount: FC = () => {
	return (
		<section className='container relative flex flex-col items-center text-center gap-y-11'>
			<div>
				<h5 className='text-6xl font-semibold leading-tight uppercase'>
					İlk sifarişə 50%’ə qədər
					<br />
					endirim
				</h5>
				<span className='text-xl text-black/70'>
					Tələsin, məhsullar tükənmək üzrədir
				</span>
			</div>
			<div>
				<span className='block text-2xl font-semibold'>
					Endirimlər 9 Yanvar 19:00 tarixindən,
					<br />
					29 Yanvar 00:00 tarixinədək keçərlidir!
				</span>
				<span className='text-black/70'>Sifarişə keç</span>
			</div>
			<Button>MƏHSULLARA BAX</Button>
			<div className='absolute w-32 h-32 rounded-full -z-10 bg-UltramarineBlue left-28 top-28 blur-3xl' />
			<div className='absolute w-32 h-32 rounded-full -z-10 bg-Folly right-32 bottom-10 blur-3xl' />
			<div className='absolute w-32 h-32 rounded-full -z-10 bg-VividYellow blur-3xl' />
		</section>
	)
}

export default FirstOrderDiscount
