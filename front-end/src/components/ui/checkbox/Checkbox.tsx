import { FC, InputHTMLAttributes } from 'react'
import { BsCheckLg } from 'react-icons/bs'

import styles from './Checkbox.module.scss'

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
	value?: string
	label: string
	name?: string
}

const Checkbox: FC<ICheckbox> = ({ label, name, value, ...rest }) => {
	return (
		<div className={styles['checkbox-container']}>
			<label>
				<input
					className='absolute invisible opacity-0'
					type='checkbox'
					name={name}
					value={value}
					{...rest}
				/>
				<span>
					<BsCheckLg className='hidden' color='white' />
				</span>
				{label}
			</label>
		</div>
	)
}

export default Checkbox
