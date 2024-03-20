import React, { Fragment, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
export default function Stepper() {
	const { t } = useTranslation()
	const [selectedSection, setSelectedSection] = useState(null)

	const toggleSection = (section) => {
		if (selectedSection === section) {
			setSelectedSection(null)
		} else {
			setSelectedSection(section)
		}
	}

	const sectionTitles = [
		t('schemaSection.choose'),
		t('schemaSection.meet'),
		t('schemaSection.method'),
		t('schemaSection.project'),
	]

	return (
		<article>
			<div className="py-12 text-center text-white bg-[#7C005C] sm:px-8 md:px-32 lg:px-72">
				<h1 className="text-4xl font-bold">{t('schemaSection.title')}</h1>
				<p className="text-lg text-white">{t('schemaSection.subtitle')}</p>

				<div className="flex flex-col items-center justify-between px-12 mt-8 sm:px-0 sm:gap-2 sm:flex-row">
					{[1, 2, 3, 4].map((section, index) => (
						<Fragment key={section}>
							<div
								className="w-full mb-8 font-bold text-center sm:w-1/4 sm:mb-0"
								onClick={() => toggleSection(section)}
							>
								<div className="flex items-center justify-center w-12 h-12 mx-auto border border-white rounded-md cursor-pointer hover:text-white hover:bg-red-500">
									{section}
								</div>
								<h3 className="mt-4 text-2xl font-semibold">{sectionTitles[section - 1]}</h3>
								<AnimatePresence>
									{selectedSection === section && (
										<motion.p
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											className="mt-2"
										>
											{section === 1
												? t('schemaSection.chooseText')
												: section === 2
												  ? t('schemaSection.meetText')
												  : section === 3
												    ? t('schemaSection.methodText')
												    : t('schemaSection.projectText')}
										</motion.p>
									)}
								</AnimatePresence>
							</div>
							{index < 3 && selectedSection !== 4 && (
								<div className="hidden w-24 h-px bg-white sm:block"></div> // Línea vertical para diseño en columna
							)}
							{index < 3 && (
								<div className="w-px h-8 my-4 bg-white sm:hidden"></div> // Línea horizontal para diseño en fila
							)}
						</Fragment>
					))}
				</div>
			</div>
		</article>
	)
}
