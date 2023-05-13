export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	category: {
		id: number
		name: string
		slug: string
		sizeGuide?: {
			columns?: string[]
			chart?: [[]]
			content?: string
		}
	}
	productOptions: IProductOption[]
	about?: string
	attributes?: [{ key: string; value: string }]
}

export interface IProductItem {
	id: number
	name: string
	slug: string
	category: { name: string; slug: string }
	productOptions: IProductOption[]
}

export interface IProductOption {
	name: string
	color: string
	size: string | boolean
	count: number
	discount: number
	images: string[]
	price: number
}
