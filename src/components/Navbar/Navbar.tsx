import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { FaXmark } from "react-icons/fa6";

function Navbar() {
	const [activeLink, setActiveLink] = useState<string>('')
	const [modal, setModal] = useState<boolean>(false) 

	const handleLink = (link: string) => {
		setActiveLink(link)
	}

	const linkClass = (name: string) =>
		`group ${activeLink === name ? 'text-black' : ''}`

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

					<div className={`flex items-center gap-[15px] max-[570px]:fixed max-[570px]:top-0 ${modal ? 'max-[570px]:right-0' : 'max-[570px]:right-[-100%]'} max-[570px]:w-[250px] max-[570px]:h-screen max-[570px]:bg-[#EBEFF3] max-[570px]:z-50 max-[570px]:shadow max-[570px]:flex max-[570px]:items-center max-[570px]:justify-start max-[570px]:flex-col max-[570px]:pt-[40px] transition-all duration-500`}>
						<FaXmark
							onClick={() => setModal(false)}
							className='min-[570px]:hidden absolute top-[10px] left-[15px] text-[25px] cursor-pointer'
						/>
						<Link
							onClick={() => handleLink('about')}
							className={linkClass('about')}
							tabIndex={0}
							to='#'
						>
							<p className='text-[14px] font-normal text-[#545D6A] font-["Roboto"] leading-[130%]'>
								About Us
							</p>
							<div
								className={`h-[1px] ${activeLink === 'about' ? 'w-full' : 'w-0'} transition-all bg-[#545D6A]`}
							></div>
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
							<div
								className={`h-[1px] ${activeLink === 'products' ? 'w-full' : 'w-0'} transition-all bg-[#545D6A]`}
							></div>
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
							<div
								className={`h-[1px] ${activeLink === 'contacts' ? 'w-full' : 'w-0'} transition-all bg-[#545D6A]`}
							></div>
						</Link>
					</div>
				</div>

				<div className=''>
					<a
						className='text-[14px] max-[570px]:hidden font-["Roboto"] font-semibold text-[#545D6A] leading-[130%]'
						href='tel:+998711234567'
					>
						+998 (71) 123-45-67
					</a>
					<FaBars
						onClick={() => setModal(true)}
						className='text-[20px] min-[570px]:hidden cursor-pointer'
					/>
				</div>
			</div>
		</section>
	)
}

export default Navbar
