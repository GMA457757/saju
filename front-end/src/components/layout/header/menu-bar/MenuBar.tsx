import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsSuitHeart } from 'react-icons/bs'
import { SlBasket } from 'react-icons/sl'

import Badge from '@/components/ui/Badge'

import { useCart } from '@/hooks/useCart'

import { siteName } from '../../meta/meta.config'

const MenuBar: FC = () => {
	const { items } = useCart()

	return (
		<nav className='border-b border-black/10 h-14'>
			<div className='container flex items-center justify-between h-full'>
				<div className='flex items-center gap-x-12'>
					<Link href={'/'}>
						<Image
							src={'/assets/images/logo.png'}
							width={154}
							height={41}
							alt={siteName}
						/>
					</Link>
					<div className='flex text-sm uppercase gap-x-9 text-black/60'>
						<Link href={'/'}>
							<span className='self-center font-semibold text-black hover:text-black'>
								Home
							</span>
						</Link>
						<Link href={'/products'}>
							<span className='self-center hover:text-black'>Products</span>
						</Link>
						<Link href={'/blog'}>
							<span className='self-center hover:text-black'>Blog</span>
						</Link>
						<Link href={'/about-us'}>
							<span className='self-center hover:text-black'>About us</span>
						</Link>
						<Link href={'/contact'}>
							<span className='self-center hover:text-black'>Contact</span>
						</Link>
					</div>
				</div>
				<div className='flex items-center text-2xl gap-x-7'>
					<button>
						<BsSuitHeart />
					</button>
					<button className='relative'>
						<SlBasket />
						<Badge variant='circle'>{items.length}</Badge>
					</button>
					<button>
						<AiOutlineUser />
					</button>
				</div>
			</div>
		</nav>
	)
}

export default MenuBar
