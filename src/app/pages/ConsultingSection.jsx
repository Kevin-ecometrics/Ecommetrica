import React from 'react'
import { Card, Button } from '@nextui-org/react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
function ConsultingSection() {
	const { t } = useTranslation()
	const datos = [
		{
			id: 1,
			logo: '/starter_plan_logo.png',
			title: t('consultingSection.plans.starter.title'),
			subtitle: t('consultingSection.plans.starter.description'),
			price: t('consultingSection.plans.starter.price'),
			month: t('consultingSection.plans.starter.duration'),
			description: t('consultingSection.plans.starter.features'),
			width: 100,
			height: 100,
		},
		{
			id: 2,
			logo: '/pro_logo.png',
			title: t('consultingSection.plans.pro.title'),
			subtitle: t('consultingSection.plans.pro.description'),
			price: t('consultingSection.plans.pro.price'),
			month: t('consultingSection.plans.pro.duration'),
			description: t('consultingSection.plans.pro.features'),
			width: 100,
			height: 100,
		},
		{
			id: 3,
			logo: '/enterptrise_logo.png',
			title: t('consultingSection.plans.enterprise.title'),
			subtitle: t('consultingSection.plans.enterprise.description'),
			price: t('consultingSection.plans.enterprise.price'),
			month: t('consultingSection.plans.enterprise.duration'),
			description: t('consultingSection.plans.enterprise.features'),
			width: 100,
			height: 100,
		},
		{
			id: 4,
			logo: '/custom_logo.webp',
			title: t('consultingSection.plans.custom.title'),
			subtitle: t('consultingSection.plans.custom.description'),
			price: t('consultingSection.plans.custom.price'),
			month: t('consultingSection.plans.custom.duration'),
			description: t('consultingSection.plans.custom.features'),
			width: 40,
			height: 40,
		},
	]

	const handleMouseOver = (event) => {
		event.currentTarget.classList.add('shadow-red-800')
	}

	const handleMouseOut = (event) => {
		event.currentTarget.classList.remove('shadow-red-800')
	}

	return (
		<div id="consulting" className="items-center py-16 text-center min-h-min">
			<h1 className="text-[#623375] text-5xl font-bold">{t('consultingSection.title')}</h1>
			<p className="text-[#f52e55] text-xl py-8 font-bold"> {t('consultingSection.subtitle')}</p>
			<div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-8">
				{datos.map((dato) => (
					<Card
						key={dato.id}
						className="border border-gray-300 shadow-2xl rounded-2xl"
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						{dato.id === 2 && (
							<div className="absolute top-0 w-full text-center text-white bg-red-500">
								<h1 className="text-lg font-bold">POPULAR</h1>
							</div>
						)}
						<div className="w-full overflow-hidden bg-white rounded-md max-w-330">
							<div className="items-center py-8 text-center text-gray-800">
								<Image
									src={dato.logo}
									width={dato.width}
									height={dato.height}
									alt="starter plan logo"
									className="mx-auto rounded-full"
								/>
								<h1 className="py-2">{dato.title}</h1>
								<h1 className="py-2">{dato.subtitle}</h1>
								<div className="flex flex-row items-center justify-center">
									<div className="text-6xl font-bold">{dato.price}</div>
								</div>
								<div className="py-2 text-gray-500">{dato.month}</div>
								<Button className="w-48 mt-10 text-white bg-red-500 hover:bg-red-700 rounded-2xl">
									{t('consultingSection.button')}
								</Button>
							</div>
							<div className="p-8 mx-auto">
								<h1>{dato.description}</h1>
							</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	)
}

export default ConsultingSection
