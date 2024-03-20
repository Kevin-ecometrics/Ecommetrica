import React from 'react'
import { Card, CardBody } from '@nextui-org/react'
import { Avatar } from '@nextui-org/react'
import { useTranslation } from 'react-i18next'
function Sucess() {
	const { t } = useTranslation()
	let dataSucess = [
		{
			id: 1,
			name: 'Mario Villalvazo',
			avatar: '/avatar1.webp',
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien',
			company: t('success.ceoSolarEnterprise.title'),
			description: t('success.ceoSolarEnterprise.description'),
		},
		{
			id: 2,
			name: 'Edwin & Mahler Calleros',
			avatar: '/avatar2.webp',
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien',
			company: t('success.entrepreneurs.title'),
			description: t('success.entrepreneurs.description'),
		},
		{
			id: 3,
			name: 'Joe Hefferan',
			avatar: '/avatar3.webp',
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien',
			company: t('success.ziggizWorldwide.title'),
			description: t('success.ziggizWorldwide.description'),
		},
		{
			id: 4,
			name: 'Martha Rosa Lucero',
			avatar: '/avatar4.webp',
			info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien nunc vel bibendum bibendum, enim sapien tincidunt nulla, vel lacinia sapien',
			company: t('success.luceroDentalGroup.title'),
			description: t('success.luceroDentalGroup.description'),
		},
	]

	return (
		<div id="stories" className="p-8 text-black min-h-min">
			<div className="flex items-center justify-center">
				<Card className="bg-[#7C005C] shadow-2xl">
					<CardBody className="p-8">
						<h1 className="text-4xl font-bold text-center text-white">{t('success.title')}</h1>
						<p className="text-xl text-[#FF4D4D] text-center">{t('success.subtitle')} </p>
					</CardBody>
				</Card>
			</div>

			<div className="p-12 text-center ">
				<span className="text-bold text-xl text-[#FF4D4D] uppercase">{t('success.here')}</span>
			</div>

			<div className="grid grid-cols-1 gap-16 p-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
				{dataSucess.map((data) => (
					<div key={data.id} className="flex justify-center">
						<div className="relative w-full max-w-xs sm:max-w-sm md:max-w-none">
							<Avatar
								isBordered
								color="secondary"
								src={data.avatar}
								alt="clients"
								className="shadow-2xl w-92 h-92 text-large sm:h-92 sm:w-92 md:h-92 md:w-92"
							/>
							<p className="text-sm font-bold py-4 sm:py-6 flex justify-center text-[#F52F55]">
								{data.name}
							</p>
							<p className="text-sm font-bold flex justify-center text-[#623375]">{data.company}</p>
							<div className="relative w-full max-w-xs sm:max-w-sm md:max-w-none">
								<p className="text-center">{data.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Sucess
