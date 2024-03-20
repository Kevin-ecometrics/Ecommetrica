import { Card, CardHeader, CardBody } from '@nextui-org/react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
export default function Cards() {
	const { t } = useTranslation()
	const cards = [
		{
			id: 1,
			icon: '/logo1.webp',
			title: t('schemaSection.consultation.researchAndDevelopment.title'),
			subTitle: t('schemaSection.consultation.researchAndDevelopment.zeroTech'),
			description: t('schemaSection.consultation.researchAndDevelopment.description'),
		},
		{
			id: 2,
			icon: '/logo2.webp',
			title: t('schemaSection.consultation.businessIntelligence.title'),
			subTitle: t('schemaSection.consultation.businessIntelligence.unclearDirection'),
			description: t('schemaSection.consultation.businessIntelligence.description'),
		},
		{
			id: 3,
			icon: '/logo3.webp',
			title: t('schemaSection.consultation.enhancedAnalytics.title'),
			subTitle: t('schemaSection.consultation.enhancedAnalytics.enoughData'),
			description: t('schemaSection.consultation.enhancedAnalytics.description'),
		},
		{
			id: 4,
			icon: '/logo4.webp',
			title: t('schemaSection.consultation.accurateMarketing.title'),
			subTitle: t('schemaSection.consultation.accurateMarketing.goodCommunication'),
			description: t('schemaSection.consultation.accurateMarketing.description'),
		},
	]
	return (
		<div className="p-12 text-center text-black bg-white sm:px-32 md:px-32">
			<div className="grid grid-cols-2 gap-4 text-black">
				<Card isFooterBlurred className="w-full h-[300px] col-span-2 shadow-2xl md:col-span-1">
					<CardHeader className="absolute inset-0 z-10 flex-col items-center justify-center">
						<h1 className="text-xl font-bold text-[#201A48] uppercase">{t('schemaSection.card1.title')}</h1>
						<p className="text-base font-medium text-[#201A48]">{t('schemaSection.card1.description')}</p>
					</CardHeader>
					<Image
						removeWrapper
						alt="Relaxing app background"
						className="z-0 object-cover w-full h-full opacity-50"
						width={500}
						height={500}
						src="/background2.png"
					/>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-2 shadow-2xl sm:col-span-1">
					<CardHeader className="absolute inset-0 z-10 flex-col items-center justify-center">
						<h1 className="text-xl font-bold text-[#201A48] uppercase">{t('schemaSection.card2.title')}</h1>
						<p className="text-base font-medium text-[#201A48]">{t('schemaSection.card2.description')}</p>
					</CardHeader>
					<Image
						removeWrapper
						alt="Relaxing app background"
						className="z-0 object-cover w-full h-full opacity-50"
						width={500}
						height={500}
						src="/background1.jpg"
					/>
				</Card>
			</div>

			<div className="grid grid-cols-3 gap-8 py-12 md:grid-cols-3 lg:grid-cols-3">
				<Card isFooterBlurred className="w-full h-[300px] col-span-3 sm:col-span-1 shadow-2xl">
					<CardHeader className="absolute inset-0 z-10 flex-col items-center justify-center">
						<h1 className="text-xl font-bold text-[#201A48] uppercase">{t('schemaSection.card3.title')}</h1>
						<p className="text-base font-medium text-[#201A48]">{t('schemaSection.card3.description')}</p>
					</CardHeader>
					<Image
						removeWrapper
						alt="Relaxing app background"
						className="z-0 object-cover w-full h-full opacity-50"
						width={500}
						height={500}
						src="/Business & Technology.png"
					/>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-3 sm:col-span-1 shadow-2xl">
					<CardHeader className="absolute inset-0 z-10 flex-col items-center justify-center">
						<h1 className="text-xl font-bold text-[#201A48] uppercase">{t('schemaSection.card4.title')}</h1>
						<p className="text-base font-medium text-[#201A48]">{t('schemaSection.card4.description')}</p>
					</CardHeader>
					<Image
						removeWrapper
						alt="Relaxing app background"
						className="z-0 object-cover w-full h-full opacity-50"
						width={500}
						height={500}
						src="/Supply chain.png"
					/>
				</Card>
				<Card isFooterBlurred className="w-full h-[300px] col-span-3 sm:col-span-1 shadow-2xl">
					<CardHeader className="absolute inset-0 z-10 flex-col items-center justify-center">
						<h1 className="text-xl font-bold text-[#201A48] uppercase">{t('schemaSection.card5.title')}</h1>
						<p className="text-base font-medium text-[#201A48]">{t('schemaSection.card5.description')}</p>
					</CardHeader>
					<Image
						removeWrapper
						alt="Relaxing app background"
						className="z-0 object-cover w-full h-full opacity-50"
						width={500}
						height={500}
						src="/Digital Marketing.png"
					/>
				</Card>
			</div>
			<h1 className="text-3xl font-bold text-[#623375]">{t('schemaSection.consultation.whyEcommerce')}</h1>
			<p className="py-4 text-xl text-[#F52F55] font-semibold">
				{t('schemaSection.consultation.yourConsultantWill')}
			</p>
			<p className="py-2 text-xl font-semibold text-black">{t('schemaSection.consultation.workOnBusiness')} </p>
			<p className="py-2 text-xl font-semibold text-black">{t('schemaSection.consultation.boostRevenue')}</p>
			<p className="py-2 text-xl font-semibold text-black">{t('schemaSection.consultation.recipeOfSuccess')}</p>
			<h1 className="text-xl text-[#F52F55] font-semibold">{t('schemaSection.consultation.tryUs')}</h1>
			<p className="py-2 text-xl font-semibold text-black">{t('schemaSection.consultation.scheduleNow')} </p>
			<div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
				{cards.map((card) => (
					<Card key={card.id} className="col-span-4 py-4 shadow-2xl sm:col-span-1">
						<CardHeader className="flex-col items-start px-4 pt-2 pb-0">
							<Image height={100} width={100} src={card.icon} alt="Card icon" className="mx-auto" />
						</CardHeader>
						<CardBody className="flex items-center py-2 overflow-visible text-center">
							<h1 className="py-4 text-xl text-[#F52F55] font-semibold">{card.title}</h1>
							<p className="py-4 text-xl text-[#F52F55] font-semibold">{card.subTitle}</p>
							<h4 className="font-medium text-black">{card.description}</h4>
						</CardBody>
					</Card>
				))}
			</div>
		</div>
	)
}
