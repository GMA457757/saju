import { Dispatch, FC, SetStateAction } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'

interface IFancybox {
	setIsFancybox: Dispatch<SetStateAction<void>>
	activeImageIndex: number
	setActiveImageIndex: Dispatch<SetStateAction<number>>
	imagesLength: number
}
const FancyboxActions: FC<IFancybox> = ({
	setIsFancybox,
	activeImageIndex,
	setActiveImageIndex,
	imagesLength
}) => {
	const minusHandler = () => {
		if (activeImageIndex !== 0) {
			setActiveImageIndex(--activeImageIndex)
		} else {
			setActiveImageIndex(imagesLength - 1)
		}
	}
	const plusHandler = () => {
		// ? index starts at zero (0) but length 1
		if (activeImageIndex < imagesLength - 1) {
			setActiveImageIndex(++activeImageIndex)
		} else {
			setActiveImageIndex(0)
		}
	}

	return (
		<>
			<button
				onClick={() => setIsFancybox()}
				className={
					'fixed top-5 right-5 bg-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm'
				}
			>
				<GrClose />
			</button>

			<button
				className='fixed flex items-center justify-center w-12 h-12 ml-5 text-2xl bg-white rounded-full shadow-sm top-1/2'
				onClick={() => minusHandler()}
			>
				<BsChevronLeft />
			</button>
			<button
				className='fixed flex items-center justify-center w-12 h-12 text-2xl bg-white rounded-full shadow-sm right-5 top-1/2'
				onClick={() => plusHandler()}
			>
				<BsChevronRight />
			</button>
		</>
	)
}

export default FancyboxActions
