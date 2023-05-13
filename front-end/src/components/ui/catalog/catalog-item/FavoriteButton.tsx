import { FC } from 'react'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

import { favoriteSlice } from '@/store/favorite/favorite.slice'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import { IProductItem } from '@/types/product.interface'

const FavoriteButton: FC<{ product: IProductItem }> = ({ product }) => {
	const dispatch = useDispatch()
	const { items } = useTypedSelector(state => state.favorite)

	const isExists = items.some(item => item.id === product.id)

	return (
		<button
			onClick={() => dispatch(favoriteSlice.actions.toggleFavorite(product))}
			className='text-xl'
			type='button'
		>
			{isExists ? <BsSuitHeartFill className='text-Folly' /> : <BsSuitHeart />}
		</button>
	)
}

export default FavoriteButton
