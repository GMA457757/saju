import { FC } from 'react'

const CouponCuts: FC = () => {
	return (
		<svg
			className='absolute left-0 dotted-border -bottom-1'
			width='100%'
			height='12px'
			preserveAspectRatio='none'
		>
			<defs>
				<pattern
					id='dots_large'
					width={26}
					height={12}
					patternUnits='userSpaceOnUse'
				>
					<circle cy={12} cx={10} r={7} fill='white' />
				</pattern>
			</defs>
			<rect width='100%' height='12px' fill='url(#dots_large)' />
		</svg>
	)
}

export default CouponCuts
