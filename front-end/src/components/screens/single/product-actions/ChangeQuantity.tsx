import clsx from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface IChangeQuantity {
	quantity: number
	setQuantity: Dispatch<SetStateAction<number>>
}
const ChangeQuantity: FC<IChangeQuantity> = ({ quantity, setQuantity }) => {
	const minusHandler = () => {
		if (quantity > 1) setQuantity(quantity => --quantity)
	}
	return (
		<div className='flex items-center text-2xl gap-x-6'>
			<button
				onClick={() => minusHandler()}
				className={clsx(quantity <= 1 && 'text-black/20')}
				disabled={quantity <= 1}
			>
				<AiOutlineMinus />
			</button>
			<span>{quantity}</span>
			<button onClick={() => setQuantity(quantity => ++quantity)}>
				<AiOutlinePlus />
			</button>
		</div>
	)
}

export default ChangeQuantity
