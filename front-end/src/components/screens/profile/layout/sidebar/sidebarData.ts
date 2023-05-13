export type TypeSidebarData = {
	heading: string
	links: {
		label: string
		href: string
	}[]
}[]

export const sidebarData: TypeSidebarData = [
	{
		heading: 'Ümumi',
		links: [
			{
				label: 'Sifarişlərim',
				href: '/profile/orders'
			},
			{
				label: 'Kuponlarım',
				href: '/profile/coupons'
			},
			{
				label: 'Favorilərim',
				href: '/profile/favorites'
			}
		]
	},
	{
		heading: 'Hesab ayarları',
		links: [
			{
				label: 'Şəxsi məlumatlarım',
				href: '/profile/personal-details'
			},
			{
				label: 'Şifrəni dəyişdir',
				href: '/profile/change-password'
			}
		]
	},
	{
		// ! These data are unnecessary here
		heading: 'Dəstək və digər',
		links: [
			{
				label: 'İstifadəçi razılaşması',
				href: '/profile/user-accessing'
			},
			{
				label: 'Ödəmə üsulları',
				href: '/profile/payment-methods'
			},
			{
				label: 'Dəstək al',
				href: '/profile/help'
			}
		]
	}
]
