import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button
			className={clsx(className, 'px-8 py-3 text-white bg-black rounded')}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
