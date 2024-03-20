import { AiFillLinkedin } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
function Footer() {
	const { t } = useTranslation()
	const [isHovered, setIsHovered] = useState(false)
	const imageVariants = {
		hover: {
			scale: 1.2,
			transition: {
				duration: 0.3,
			},
		},
		initial: {
			scale: 1,
		},
	}
	const iconsTab = [
		{ icon: <AiFillLinkedin />, link: 'https://www.linkedin.com/in/onlyjuan/' },
		{ icon: <FaXTwitter />, link: 'https://twitter.com/SrGenial' },
	]
	return (
		<>
			<footer className="bg-white border-t border-black">
				<div className="container p-4 mx-auto">
					<div className="flex justify-between flex-col md:flex-row  items-center md:gap-[5rem] text-left">
						<div className="flex flex-col gap-2 sm:items-center md:items-center lg:items-center">
							<motion.div
								onHoverStart={() => setIsHovered(true)}
								onHoverEnd={() => setIsHovered(false)}
								variants={imageVariants}
								whileHover="hover"
								initial="initial"
							>
								<Image
									src={isHovered ? '/logo.png' : '/logo_loading.svg'}
									alt="footer_logo"
									width={250}
									height={200}
								/>
							</motion.div>
							{/* socials */}
							<div className="flex text-[18px] gap-4 text-[#646464] justify-center py-4">
								{iconsTab.map(({ icon, link }, index) => {
									return (
										<div
											key={index}
											className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
											style={{ transition: 'all 0.3s' }}
										>
											<a href={link} target="_blank" rel="noreferrer">
												{icon}
											</a>
										</div>
									)
								})}
							</div>
						</div>

						{/* middle div */}
						<div className="relative flex flex-col gap-8">
							<p className="text-[22px] text-black font-bold footer-main">{t('footer.ourSections')}</p>

							<span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

							<p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
								<Link to="services" smooth={true} duration={1000} spy={true}>
									{t('footer.services')}
								</Link>
							</p>
							<p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
								<Link to="consulting" smooth={true} duration={1000} spy={true}>
									{t('footer.ourConsulting')}{' '}
								</Link>
							</p>
							<p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
								<Link to="schema" smooth={true} duration={1000} spy={true}>
									{t('footer.schema')}
								</Link>
							</p>
							<p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
								<Link to="stories" smooth={true} duration={1000} spy={true}>
									{t('footer.successStories')}{' '}
								</Link>
							</p>
							<p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
								<Link to="agile" smooth={true} duration={1000} spy={true}>
									{t('footer.collaboration')}{' '}
								</Link>
							</p>
						</div>

						{/* right div */}
						<div className="relative flex flex-col gap-12">
							<p className="text-[22px] text-black font-bold footer-main">
								{t('footer.workingHours.title')}
							</p>

							<span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

							<p className="text-[16px]  text-[#646464] font-bold">{t('footer.workingHours.weekdays')}</p>
							<p className="text-[16px] text-[#ff0366] font-medium">{t('footer.workingHours.hours')}</p>
							<p className="text-[16px] text-[#646464] font-bold">{t('footer.workingHours.saturday')}</p>
							<p className="text-[16px] text-[#646464] font-bold ">{t('footer.workingHours.sunday')}</p>
						</div>

						{/* middle div */}
						<span></span>
					</div>
				</div>
				<div className="flex justify-center py-8 mx-auto border-t border-black">
					<p className="text-[16px] flex font-medium text-[#646464]">
						{t('footer.copyright')}{' '}
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.ecommetrica.com/"
							className="transition-all hover:text-red-500 hover:underline"
						>
							&nbsp;
							{t('footer.Ecommetrica')}
						</a>
					</p>
				</div>
			</footer>
		</>
	)
}

export default Footer
