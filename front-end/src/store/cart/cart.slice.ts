import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Todo extract interface to different file and add count and check if items is exits if exists add count ++
interface ICartInitialState {
	items: any
}

const initialState: ICartInitialState = {
	items: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<any>) => {
			state.items.push(action.payload)
		}
	}
})
