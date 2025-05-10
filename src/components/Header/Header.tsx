import { Link } from 'react-router-dom'
import useGetData from '../../hooks/getDataHooks'
import { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'

function Header() {
	const url = import.meta.env.VITE_API_URL
	const { data, isLoading, error } = useGetData(`${url}/categories/all`)
	const [isOpen, setIsOpen] = useState(false)

	console.log(data);
	

	if (isLoading) return <p>Loading...</p>
	if (error) return <p>Error: {error.message}</p>

	return (
		<header className='max-w-[1180px] m-auto max-[1220px]:mx-[20px] py-4 flex justify-between items-center'>
			<Link to='/' className='flex items-center gap-0'>
				<img className='w-[70px] h-auto' src='favicons.svg' alt='web logo' />
				<p className='ml-[-15px] text-[36px] font-["Roboto"] font-black text-[#134E9B] leading-[100%]'>
					Ashyo
				</p>
			</Link>

			<div className='flex items-center gap-[10px]'>
				<div className='relative'>
					<button
						onClick={() => setIsOpen(prev => !prev)}
						className='px-5 h-[48px] flex items-center gap-2 bg-[#134E9B] text-white rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out'
					>
						Kategoriyalar
						<ChevronDown
							className={`w-4 h-4 transform transition-transform ${
								isOpen ? 'rotate-180' : ''
							}`}
						/>
					</button>

					{isOpen && (
						<div className='absolute right-0 mt-3 w-60 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden animate-fadeIn z-20'>
							<ul className='divide-y divide-gray-100'>
								{data?.map((category: any) => (
									<li key={category?.id}>
										<div
											onClick={() => setIsOpen(false)}
											className='block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium'
										>
											{category?.name}
										</div>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<form className='bg-[#EBEFF3] w-[518px] h-[48px] rounded-[6px] flex'>
					<input
						className='w-full h-full outline-none pl-[26px] text-[14px] font-["Roboto"] font-normal text-[#000000ae]'
						type='text'
						placeholder='What are you looking for?'
					/>
					<div className='w-[60px] h-full bg-[#134E9B] rounded-[6px] flex items-center justify-center'>
						<Search className='text-[20px] text-[#fff]' />
					</div>
				</form>
			</div>

			<div className="">
				<div className="">

				</div>
			</div>
		</header>
	)
}

export default Header
