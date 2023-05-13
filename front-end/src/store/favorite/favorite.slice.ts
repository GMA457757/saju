import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IProductItem } from '@/types/product.interface'

import { IFavoriteInitialState } from './favorite.types'

const initialState: IFavoriteInitialState = {
	items: []
}

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		toggleFavorite(state, action: PayloadAction<IProductItem>) {
			const isExists = state.items.some(item => item.id === action.payload.id)

			if (isExists) {
				state.items = state.items.filter(item => item.id !== action.payload.id)
			} else {
				state.items.push(action.payload)
			}
		}
	}
})
