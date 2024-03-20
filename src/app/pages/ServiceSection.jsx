'use client'
import { Image } from '@nextui-org/react'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
function Services() {
	const { t } = useTranslation()

	const data = [
		{
			id: 1,
			title: t('servicesSection.strategic'),
			subTitle: t('servicesSection.growth'),
			description: t('servicesSection.growthText'),
			imageSrc: '/imagen1.webp',
		},
		{
			id: 2,
			title: t('servicesSection.google'),
			subTitle: t('servicesSection.everyone'),
			description: t('servicesSection.everyoneText'),
			imageSrc: '/imagen2.webp',
		},
		{
			id: 3,
			title: t('servicesSection.messaging'),
			subTitle: t('servicesSection.doMore'),
			description: t('servicesSection.improveLead'),
			imageSrc: '/imagen3.webp',
		},
		{
			id: 4,
			title: t('servicesSection.leadThem'),
			subTitle: t('servicesSection.digitalize'),
			description: t('servicesSection.putYourBusiness'),
			imageSrc: '/imagen4.webp',
		},
		{
			id: 5,
			title: t('servicesSection.preciseTime'),
			subTitle: t('servicesSection.corporateAnalysis'),
			description: t('servicesSection.weAccompany'),
			imageSrc: '/imagen5.webp',
		},
		{
			id: 6,
			title: t('servicesSection.leadGeneration'),
			subTitle: t('servicesSection.avoidLooseness'),
			description: t('servicesSection.learnToCatch'),
			imageSrc: '/imagen6.webp',
		},
		{
			id: 7,
			title: t('servicesSection.trustedWebpage'),
			subTitle: t('servicesSection.ecommerceExpertise'),
			description: t('servicesSection.experiencedTeam'),
			imageSrc: '/imagen7.webp',
		},
	]

	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		setIsMobile(window.innerWidth < 640)

		const handleResize = () => {
			setIsMobile(window.innerWidth < 640)
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div id="services" className="items-center py-16 text-center min-h-min">
			<h1 className="text-[#623375] text-7xl font-bold">{t('servicesSection.title')}</h1>
			<p className="text-[#f52e55] text-4xl py-2 font-bold">{t('servicesSection.subtitle')}</p>
			<div className="grid grid-cols-1 gap-2 px-8 py-16 lg:px-24 md:px-24 sm:px-16 md:grid-cols-2">
				{data.map((service) => (
					<React.Fragment key={service.id}>
						{isMobile ? (
							<div className="flex flex-col justify-center text-black text-start">
								<div className="mt-2">
									<Image isZoomed src={service.imageSrc} width={700} height={750} alt="My Image" />
								</div>
								<h2 className="mt-2 text-3xl text-[#f52e55] font-bold md:mt-0 uppercase">
									{service.title}
								</h2>
								<h3 className="mt-2 text-xl text-[#623375] font-bold">{service.subTitle}</h3>
								<p className="mt-2 text-lg">{service.description}</p>
							</div>
						) : service.id % 2 === 0 ? (
							<>
								<div className="flex flex-col justify-center text-black text-start md:ml-4">
									<h2 className="mt-2 ml-12 text-3xl text-[#f52e55] font-bold md:mt-0">
										{service.title}
									</h2>
									<h3 className="mt-2 ml-12 text-xl text-[#623375] font-bold">{service.subTitle}</h3>
									<p className="mt-2 ml-12 text-xl">{service.description}</p>
								</div>
								<div className="flex items-center justify-center">
									<Image isZoomed src={service.imageSrc} width={700} height={750} alt="My Image" />
								</div>
							</>
						) : (
							<>
								<div className="flex items-center justify-center">
									<Image isZoomed src={service.imageSrc} width={700} height={750} alt="My Image" />
								</div>
								<div className="flex flex-col justify-center text-black text-start md:ml-4">
									<h2 className="mt-2 ml-16 text-3xl text-[#f52e55] font-bold md:mt-0">
										{service.title}
									</h2>
									<h3 className="mt-2 ml-16 text-xl text-[#623375] font-bold">{service.subTitle}</h3>
									<p className="mt-2 ml-16 text-lg">{service.description}</p>
								</div>
							</>
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	)
}

export default Services
