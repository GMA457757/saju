import { FC } from 'react'

import MenuBar from './menu-bar/MenuBar'
import TopBar from './top-bar/TopBar'

const Header: FC = () => {
	return (
		<header>
			<TopBar />
			<MenuBar />
		</header>
	)
}

export default Header
