import { FC, useState } from 'react'

import Fancybox from './fancybox/Fancybox'

const ProductImages: FC<{ images: string[] }> = ({ images }) => {
	const [isFancybox, setIsFancybox] = useState<boolean>(false)

	// ! When get releated post image nt shown activeImageIndex doesn't reseting
	const [activeImageIndex, setActiveImageIndex] = useState<number>(0)
	console.log('ProductImages Rendered')
	// Todo : Change img tags with Next Image component
	return (
		<>
			<div className='sticky top-0 flex self-start col-span-4 gap-x-4'>
				<div className='flex flex-col gap-y-4'>
					{images.map((image, i) => (
						<picture
							key={i}
							className='block w-16 h-16'
							onClick={() => setActiveImageIndex(i)}
						>
							<img className='object-cover w-full h-full' src={image} alt='' />
						</picture>
					))}
				</div>
				<div className='h-[580px] w-full cursor-zoom-in'>
					<picture className='block h-full' onClick={() => setIsFancybox(true)}>
						<img
							className='object-cover w-full h-full'
							src={images[activeImageIndex]}
							alt=''
						/>
					</picture>
				</div>
			</div>
			{isFancybox && (
				<Fancybox
					setIsFancybox={() => setIsFancybox(false)}
					activeImageIndex={activeImageIndex}
					setActiveImageIndex={setActiveImageIndex}
					images={images}
				/>
			)}
		</>
	)
}

export default ProductImages
