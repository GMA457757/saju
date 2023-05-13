import { FC, PropsWithChildren, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Accordion: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title
}) => {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	return (
		<div>
			<button
				onClick={() => setIsVisible(state => !state)}
				className='flex items-center justify-between w-full px-1 py-4 font-medium cursor-pointer text-black/60'
			>
				{title}
				{isVisible ? (
					<AiOutlineMinus className='text-xl' />
				) : (
					<AiOutlinePlus className='text-xl' />
				)}
			</button>
			{isVisible && <div className='pb-4'>{children}</div>}
		</div>
	)
}

export default Accordion
