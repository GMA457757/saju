import { FC } from 'react'

const Sorting: FC = () => {
	return (
		<div className='flex text-black/50 gap-x-11'>
			<button className='font-medium text-black'>Bütün məhsullar (133)</button>
			<button>Populyar</button>
			<button>Yeni</button>
			<button>Endirimli</button>
		</div>
	)
}

export default Sorting
