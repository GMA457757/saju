import clsx from 'clsx'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { IconType } from 'react-icons'
import { BiShow } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import { MdOutlineClose } from 'react-icons/md'

interface IField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	Icon?: IconType
	error?: string
	label?: string
	verified?: string
}

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{
			placeholder,
			error,
			className,
			type = 'text',
			style,
			Icon,
			label,
			verified,
			...rest
		},
		ref
	) => {
		const [showPassword, setShowPassword] = useState(false)
		return (
			<div className='flex flex-col flex-1 gap-y-1'>
				<label className='flex flex-col gap-y-2'>
					{label && <span>{label}</span>}
					<div
						className={clsx(
							'flex items-center h-10 border rounded px-2.5 gap-x-2.5 focus-within:outline',
							error
								? 'border-Folly outline-Folly outline-1'
								: 'border-black/50 outline-1',
							!error && verified && 'border-green-500'
						)}
					>
						{Icon && <Icon className='text-xl' />}
						<input
							className={clsx(
								'flex-1 text-sm outline-none appearance-none m-0'
							)}
							type={showPassword ? 'string' : type}
							placeholder={placeholder}
							ref={ref}
							{...rest}
						/>
						{error && <MdOutlineClose className='text-2xl text-Folly' />}
						{!error && verified && (
							<BsCheck className='text-2xl text-green-500' />
						)}
						{type === 'password' && (
							<button onClick={() => setShowPassword(state => !state)}>
								<BiShow className='text-xl' />
							</button>
						)}
					</div>
				</label>
				{error && <span className='text-xs text-Folly'>{error}</span>}
				{!error && verified && (
					<span className='text-xs text-green-500'>{verified}</span>
				)}
			</div>
		)
	}
)
export default Field
