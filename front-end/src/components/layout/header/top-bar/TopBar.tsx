import Link from 'next/link'
import { FC } from 'react'

const TopBar: FC = () => {
	return (
		<nav className='h-8 bg-sajuDark'>
			<div className='container flex items-center justify-end h-full text-xs text-white uppercase gap-x-5'>
				<Link href={'/help'}>Yardım</Link>
				<Link href={'/unlocked'}>SajuGuju unlocked</Link>
				<Link href={'/order-status'}>Sifariş durumu</Link>
				<Link href={'/register'}>Kayıt</Link>
				<Link href={'/login'}>Giriş Yap</Link>
			</div>
		</nav>
	)
}

export default TopBar
