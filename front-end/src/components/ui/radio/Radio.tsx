import { FC, InputHTMLAttributes } from 'react'

import styles from './Radio.module.scss'

interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
	value: string
	label: string
	name: string
}

const Radio: FC<IRadio> = ({ label, name, value, ...rest }) => {
	return (
		<div className={styles['radio-container']}>
			<label>
				<input
					className='absolute invisible opacity-0'
					type='radio'
					name={name}
					value={value}
					{...rest}
				/>
				<span></span>
				{label}
			</label>
		</div>
	)
}

export default Radio
