import { FC, PropsWithChildren } from 'react'

import Footer from './footer/Footer'
import Header from './header/Header'
import Meta from './meta/Meta'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title
}) => {
	return (
		<>
			<Meta title={title} />
			<Header />
			<main className='flex flex-col py-16 gap-y-16'>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
