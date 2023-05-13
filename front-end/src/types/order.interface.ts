export interface IOrder {
	id: number
	createdAt: string
	orderNumber: string
	count: number
	totalPrice: number
	price: number
	option: {
		images: string[]
		name: string
		color: string
		size: string
		product: {
			name: string
		}
	}
	payment: {
		paymentType: string // Todo : ENUM
	},
	cargo: {
		address: string,
		trackingNumber: string,
		delvieredAt: string,
		status: string, // Todo : ENUM
		type: string, // Todo : ENUM
		price: number
	}
}

export interface IOrderItem {
	order_number: string
	created_at: string
	name: string
	total_price: number
}
