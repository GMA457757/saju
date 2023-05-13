export interface ICoupon {
	code: string
	createdAt: string
	expireAt: string
	description: string
	type: 'percent' | 'amount'
	status: string
}
