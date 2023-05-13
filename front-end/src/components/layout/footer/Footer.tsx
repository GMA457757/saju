import Image from 'next/image'
import { FC } from 'react'

import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/button/Button'

import { siteName } from '../meta/meta.config'

// Todo : Extract input and button component, Footer badge component

const Footer: FC = () => {
	return (
		<footer className='flex flex-col py-5 text-sm font-medium text-white/50 bg-sajuDark gap-y-5'>
			<div className='container grid grid-cols-4 gap-7'>
				<section className='flex flex-col gap-y-10'>
					<div className='flex flex-col gap-y-3'>
						<span className='font-semibold uppercase text-white/80'>
							Courses &amp; Products
						</span>
						<div className='flex flex-col gap-y-2'>
							<a href='#'>Ultiamte Figma Masterclass</a>
							<a href='#'>Shipfaster UI - Figma Desgin System</a>
							<a className='flex items-center gap-x-4' href='#'>
								Outline - Figma Wireframe Kit
								<Badge variant='rounded'>New</Badge>
							</a>
						</div>
					</div>
					<div className='flex flex-col gap-y-3'>
						<span className='font-semibold uppercase text-white/80'>
							Workshops
						</span>
						<div className='flex flex-col gap-y-2'>
							<a href='#'>The Primary Research Essentials Workshop</a>
						</div>
					</div>
					<div className='flex flex-col gap-y-3'>
						<span className='font-semibold uppercase text-white/80'>
							Glossary
						</span>
						<div className='flex flex-col gap-y-2'>
							<a href='#'>Shipfaster UI -All Components</a>
						</div>
					</div>
				</section>
				<section className='flex flex-col gap-y-10'>
					<div className='flex flex-col gap-y-3'>
						<span className='font-semibold uppercase text-white/80'>
							Free resources
						</span>
						<div className='flex flex-col gap-y-2'>
							<a href='#'>COMPANY</a>
							<a href='#'>Courses</a>
							<a href='#'>Products</a>
							<a className='flex items-center gap-x-4' href='#'>
								Workshop
								<Badge variant='rounded'>NEW</Badge>
							</a>
							<a href='#'>Shop</a>
							<a href='#'>Blog</a>
							<a className='flex items-center gap-x-4' href='#'>
								Affiliates
								<Badge variant='rounded'>EARN 30%</Badge>
							</a>
							<a href='#'>Community</a>
							<a href='#'>Testimonials</a>
							<a href='#'>About Us</a>
							<a href='#'>FAQs</a>
						</div>
					</div>
				</section>
				<section className='flex flex-col gap-y-10'>
					<div className='flex flex-col gap-y-3'>
						<span className='font-semibold uppercase text-white/80'>
							Free resources
						</span>
						<div className='flex flex-col gap-y-2'>
							<a href='#'>Figma Crash Course</a>
							<a href='#'>UX Case Study Presentation Template</a>
						</div>
					</div>
					<div className='flex flex-col gap-y-3'>
						<span className='font-semibold uppercase text-white/80'>
							Recommended
						</span>
						<div className='flex flex-col gap-y-2'>
							<a href='#'>Best Figma Courses</a>
							<a href='#'>Best Figma Wireframe Kits</a>
							<a href='#'>Best Free Fonts for UI Design</a>
							<a href='#'>Best Figma Design Systems &amp; UI Kits</a>
						</div>
					</div>
				</section>
				<section>
					<div className='flex flex-col gap-y-6'>
						<div className='flex flex-col gap-y-2.5'>
							<Image
								className='invert'
								src={'/assets/images/logo.png'}
								alt={siteName}
								width={112}
								height={29}
							/>
							<p className='text-sm text-white/50'>
								Get the latest updates about SajuGuju’s newfeatures and new
								product updates.
							</p>
						</div>
						<div className='flex items-center'>
							<input
								className='w-full py-3 pl-3 text-black outline-none bg-BrightGray'
								type='text'
								placeholder='Email address'
							/>
							<Button>Submit</Button>
						</div>
					</div>
				</section>
			</div>
			<hr className='h-px border-0 bg-white/20' />
			<div className='container flex items-center justify-between '>
				<span className='text-white/80'>
					© 2022 SajuGuju. All rights reserved.
				</span>
				<div className='flex gap-x-5'>
					<a className='text-white/50' href='#'>
						Terms of Service
					</a>
					<a className='text-white/50' href='#'>
						Privacy Policy
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
