import React, { useState, useEffect } from 'react'
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Button,
	useDisclosure,
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenuItem,
	NavbarMenu,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

export default function App() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)
	const [activeSection, setActiveSection] = React.useState('Services')
	const [showPassword, setShowPassword] = useState(false)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [user, setUser] = useState(null)
	const { i18n } = useTranslation()
	const { t } = useTranslation()

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
	}

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await axios.get('http://localhost:3001/api/user', { withCredentials: true })
				if (res && res.data.user) {
					setUser(res.data.user)
				}
			} catch (error) {
				console.error('Error al obtener el usuario:', error.response.data)
			}
		}
		fetchUser()
	}, [])

	const handleDashboard = () => {
		router.push('/dashboard')
	}

	const router = useRouter()
	const handleShowPassword = () => {
		setShowPassword(!showPassword)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		try {
			const response = await axios.post(
				'http://localhost:3001/login',
				{ email, password },
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true, // Habilita el envío de cookies
				},
			)
			if (response.data.success) {
				// console.log(response.data)
				setIsLoggedIn(true)
				// router.push('/dashboard')
			} else {
				throw new Error('No se recibió ninguna respuesta del servidor')
			}
		} catch (error) {
			console.error('Error al realizar la solicitud de inicio de sesión:', error.response.data)
			setErrorMessage('Credenciales inválidas')
		}
	}

	const menuItems = [
		// { name: "Principal", href: "#principal" },
		{ name: t('services'), href: '#services' },
		{ name: t('ourConsulting'), href: '#consulting' },
		{ name: t('schema'), href: '#schema' },
		{ name: t('successStories'), href: '#stories' },
		// { name: 'Collaboration', href: '#agile' },
	]

	const handleMenuItemClick = (href) => {
		const element = document.querySelector(href)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const handleSetActiveSection = (section) => {
		setActiveSection(section)
	}

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-gray-100">
			<NavbarContent className="text-black sm:hidden" justify="start">
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
			</NavbarContent>

			<NavbarContent className="pr-3 sm:hidden" justify="center">
				<NavbarBrand>
					<Image src={'/logo.png'} width={50} height={50} alt={'logo'} />{' '}
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden gap-4 sm:flex" justify="center">
				<NavbarBrand>
					<Image src={'/logo.png'} width={50} height={50} alt={'logo'} />
				</NavbarBrand>
				{menuItems.map((item, index) => (
					<NavbarItem key={`${item.name}-${index}`}>
						<Link
							to={item.href.replace('#', '')}
							className={`text-black hover:text-red-700 ${
								activeSection === item.href.replace('#', '') ? 'font-bold text-red-700' : ''
							}`} // Agregamos la clase CSS correspondiente
							onClick={() => {
								handleMenuItemClick(item.href)
							}} // Actualizamos la sección activa al hacer clic
							onSetActive={() => {
								handleSetActiveSection(item.href.replace('#', ''))
							}} // Actualizamos la sección activa cuando llegamos a la sección
							smooth={true}
							duration={1000}
							spy={true}
						>
							{item.name}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem>
					<div className="space-x-2">
						<Link
							href="https://wa.me/526646429633?text=Im%20interested%20
          in%20create%20my%20page"
							target="_blank"
						>
							<Button color="danger">{t('contactUs')}</Button>
						</Link>
						<Link href="https://e-commetrics.com/">
							<Button color="primary">{t('login')}</Button>
						</Link>
						<Button color="warning" className="uppercase text-white" onClick={toggleLanguage}>
							{i18n.language === 'en' ? 'English' : 'Español'}
						</Button>
						{/* {isLoggedIn ? (
							<Dropdown placement="bottom-end">
								<DropdownTrigger>
									<Button color="primary">PROFILE</Button>
								</DropdownTrigger>
								<DropdownMenu aria-label="Profile Actions" variant="flat">
									<DropdownItem key="dashboard" className="text-black" onPress={handleDashboard}>
										DASHBOARD
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						) : (
							<Button onClick={onOpen} color="primary">
								LOG IN
							</Button>
						)} */}
						{/* <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
							<ModalContent>
								{(onClose) => (
									<>
										<ModalHeader className="flex flex-col gap-1 text-black">Log in</ModalHeader>
										<ModalBody>
											<form onSubmit={handleSubmit} encType="application/json">
												<div className="relative mb-4">
													<label
														htmlFor="email"
														className="block mb-2 font-bold text-gray-700"
													>
														Email{' '}
													</label>
													<div className="flex items-center">
														<AiOutlineMail className="absolute left-2" color="blue" />
														<input
															type="email"
															id="email"
															value={email}
															onChange={(e) => setEmail(e.target.value)}
															className="w-full px-4 py-2 pl-8 text-black border border-gray-400 rounded"
														/>
													</div>
												</div>
												<div className="relative mb-4">
													<label
														htmlFor="password"
														className="block mb-2 font-bold text-gray-700"
													>
														Password
													</label>
													<div className="flex items-center">
														<AiOutlineLock className="absolute left-2" color="blue" />
														<input
															type={showPassword ? 'text' : 'password'}
															id="password"
															value={password}
															onChange={(e) => setPassword(e.target.value)}
															className="w-full px-4 py-2 pl-8 text-black border border-gray-400 rounded"
														/>
														<div
															className="absolute cursor-pointer right-2"
															onClick={handleShowPassword}
														>
															{showPassword ? (
																<AiOutlineEyeInvisible color="blue" />
															) : (
																<AiOutlineEye color="blue" />
															)}
														</div>
													</div>
												</div>
												{errorMessage && <p className="mb-4 text-red-500">{errorMessage}</p>}
												<div className="flex justify-end space-x-1">
													<Button color="danger" variant="flat" onPress={onClose}>
														Close
													</Button>
													<Button onPress={onClose} type="submit" color="primary">
														Log In
													</Button>
												</div>
											</form>
										</ModalBody>
									</>
								)}
							</ModalContent>
						</Modal> */}
					</div>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item.name}-${index}`}>
						<Link
							className={`w-full text-red-800 hover:text-blue-700 ${
								activeSection === item.href.replace('#', '') ? 'font-bold' : ''
							}`}
							onClick={() => handleMenuItemClick(item.href)}
						>
							{item.name}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
}
