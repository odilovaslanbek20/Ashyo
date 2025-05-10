import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'

function Hero() {
	const data = [
		{
			id: 1,
			image: 'HeroImg.png',
			alt: 'hero1',
			title: 'Siz kutgan Xiaomi 12 Mi Laite',
			description:
				"Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
		},
		{
			id: 2,
			image: 'HeroImg.png',
			alt: 'hero1',
			title: 'Siz kutgan Xiaomi 12 Mi Laite',
			description:
				"Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
		},
		{
			id: 3,
			image: 'HeroImg.png',
			alt: 'hero1',
			title: 'Siz kutgan Xiaomi 12 Mi Laite',
			description:
				"Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
		},
		{
			id: 4,
			image: 'HeroImg.png',
			alt: 'hero1',
			title: 'Siz kutgan Xiaomi 12 Mi Laite',
			description:
				"Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
		},
		{
			id: 5,
			image: 'HeroImg.png',
			alt: 'hero1',
			title: 'Siz kutgan Xiaomi 12 Mi Laite',
			description:
				"Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
		},
	]

	return (
		<section className='w-full bg-[#F3F0F0] py-6'>
			<div className='max-w-[1180px] mx-auto max-[1220px]:mx-[20px]'>
				<Swiper
					modules={[Pagination, Autoplay]}
					spaceBetween={20}
					slidesPerView={1}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}
				>
					{data.map(item => (
						<SwiperSlide key={item.id}>
							<div className='w-full mb-[50px] flex items-center max-[660px]:flex-col gap-6'>
								<div className='w-full min-w-[500px] max-[660px]:min-w-full max-[1055px]:min-w-[400px] max-[948px]:min-w-[300px]  max-w-[300px]'>
									<h2 className='text-[44px] max-[660px]:text-center max-[948px]:text-[30px] font-["Roboto"] font-black leading-[120%] text-[#0A1729] mb-[6px]'>
										{item.title}
									</h2>
									<p className='text-[16px] max-[660px]:text-center max-[948px]:text-[14px] font-["Roboto"] text-[#545D6A] leading-[120%]'>
										{item.description}
									</p>
									<div className='max-[660px]:flex max-[660px]:items-center max-[660px]:justify-center'>
										<Link to='#'>
											<div className='mt-[22px] w-[154px] max-[980px]:w-[130px] max-[980px]:h-[35px] h-[54px] bg-[#0F4A97] rounded-[6px] flex items-center justify-center'>
												<p className='text-[#fff] font-["Roboto"]'>Batafsil</p>
											</div>
										</Link>
									</div>

									

								</div>

								<img
									src={item.image}
									alt={item.alt}
									className='w-[600px] max-[400px]:w-full  max-[830px]:w-[400px] rounded-xl object-contain'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Hero
