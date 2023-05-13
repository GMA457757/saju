import clsx from 'clsx'
import { AllHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IBadge extends AllHTMLAttributes<HTMLSpanElement> {
	variant: 'circle' | 'rounded'
}

const Badge: FC<PropsWithChildren<IBadge>> = ({
	children,
	variant,
	className,
	...rest
}) => {
	return (
		<span
			className={clsx(
				variant === 'circle' &&
					'absolute flex items-center justify-center w-5 h-5 text-xs text-white rounded-full -top-3 -right-4 bg-sajuDark',
				variant === 'rounded' &&
					'bg-UltramarineBlue/20 text-UltramarineBlue px-3.5 py-1.5 rounded-xl text-xs font-semibold',
				className
			)}
			{...rest}
		>
			{children}
		</span>
	)
}

export default Badge
