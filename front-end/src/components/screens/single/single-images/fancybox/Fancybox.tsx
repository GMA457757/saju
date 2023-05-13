import clsx from 'clsx'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'

import FancyboxActions from './FancyboxActions'

interface IFancybox {
	setIsFancybox: Dispatch<SetStateAction<void>>
	images: string[]
	activeImageIndex: number
	setActiveImageIndex: Dispatch<SetStateAction<number>>
}
const Fancybox: FC<IFancybox> = ({
	setIsFancybox,
	images,
	activeImageIndex,
	setActiveImageIndex
}) => {
	console.log('Fancybox rendered')

	useEffect((): (() => void) => {
		document.body.style.overflow = 'hidden'
		return () => (document.body.style.overflow = 'auto')
	}, [])

	return (
		<>
			<div className='fixed top-0 left-0 z-20 w-screen h-screen bg-white '>
				<div className='flex items-center justify-center w-full h-full'>
					<div className='flex flex-col px-5 gap-y-4'>
						{images.map((image, i) => (
							<picture
								key={i}
								className={clsx(
									'block w-16 h-16',
									activeImageIndex === i && 'border-2 border-black'
								)}
								onClick={() => setActiveImageIndex(i)}
							>
								<img
									className='object-cover w-full h-full'
									src={image}
									alt=''
								/>
							</picture>
						))}
					</div>

					<div className='relative flex-1 h-full overflow-auto cursor-zoom-out scrollbar-hide'>
						<picture onClick={() => setIsFancybox()}>
							<img
								className='object-cover w-full h-auto'
								src={images[activeImageIndex]}
								alt=''
							/>
						</picture>

						<FancyboxActions
							activeImageIndex={activeImageIndex}
							setActiveImageIndex={e => setActiveImageIndex(e)}
							setIsFancybox={setIsFancybox}
							imagesLength={images.length}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Fancybox

// ! 82
