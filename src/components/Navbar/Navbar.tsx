import { useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Navbar() {
	const [activeLink, setActiveLink] = useState<string>('')

	const handleLink = (link: string) => {
		setActiveLink(link)
	}

	const linkClass = (name: string) => `group ${activeLink === name ? 'text-black' : ''}`

	return (
		<section className='bg-[#EBEFF3] py-[11px]'>
			<div className='max-w-[1180px] m-auto max-[1220px]:mx-[20px] flex items-center justify-between'>
				<div className='flex items-center gap-[28px]'>
					<Link to='#' className='flex items-center gap-[12px]'>
						<GrLocation className='text-[20px]' />
						<p className='text-[14px] font-normal text-[#545D6A] font-["Roboto"] leading-[130%]'>
							Tashkent
						</p>
					</Link>
					<div className='flex items-center gap-[15px]'>
						<Link
							onClick={() => handleLink('about')}
							className={linkClass('about')}
							tabIndex={0}
							to='#'
						>
							<p className='text-[14px] font-normal text-[#545D6A] font-["Roboto"] leading-[130%]'>
								About Us
							</p>
							<div className={`h-[1px] ${activeLink === 'about' ? 'w-full' : 'w-0'} transition-all bg-[#545D6A]`}></div>
						</Link>
						<Link
							onClick={() => handleLink('products')}
							className={linkClass('products')}
							tabIndex={0}
							to='#'
						>
							<p className='text-[14px] font-normal text-[#545D6A] font-["Roboto"] leading-[130%]'>
								Products
							</p>
							<div className={`h-[1px] ${activeLink === 'products' ? 'w-full' : 'w-0'} transition-all bg-[#545D6A]`}></div>
						</Link>
						<Link
							onClick={() => handleLink('contacts')}
							className={linkClass('contacts')}
							tabIndex={0}
							to='#'
						>
							<p className='text-[14px] font-normal text-[#545D6A] font-["Roboto"] leading-[130%]'>
								Contacts
							</p>
							<div className={`h-[1px] ${activeLink === 'contacts' ? 'w-full' : 'w-0'} transition-all bg-[#545D6A]`}></div>
						</Link>
					</div>
				</div>

				<div className="">
					<a className='text-[14px] font-["Roboto"] font-semibold text-[#545D6A] leading-[130%]' href="tel:+998711234567">+998 (71) 123-45-67</a>
					<div className="">
					</div>
				</div>
			</div>
		</section>
	)
}

export default Navbar
