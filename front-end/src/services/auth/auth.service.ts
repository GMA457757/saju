import Cookies from 'js-cookie'

import { axiosClassic } from '@/utils/api/api.interceptor'

import { saveToStorage } from './auth.helper'

export const AuthService = {
	async login(data: any) {
		try {
			const response = await axiosClassic({
				url: '/auth/login',
				method: 'POST',
				data
			})
			if (response.data.accessToken) saveToStorage(response.data)
			return response
		} catch (error) {
			console.log(error)
		}
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')

		const response = await axiosClassic.post<string, { data: any }>(
			'/auth/login/access-token',
			{ refreshToken }
		)

		if (response.data.accessToken) saveToStorage(response.data)
		return response
	}
}
