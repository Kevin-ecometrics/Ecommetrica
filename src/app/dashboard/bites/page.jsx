'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { usePathname } from 'next/navigation'
import { Button, Link, Avatar, Divider } from '@nextui-org/react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { FaCheck, FaXmark, FaPowerOff, FaBars, FaComments, FaWhatsapp } from 'react-icons/fa6'
import Image from 'next/image'

function Dashboard() {
	let avatarURl
	const [titleProject, setTitleProject] = useState('')
	const [timeout, setTimeoutState] = useState(false)
	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeoutState(true)
		}, 5000)

		return () => clearTimeout(timer)
	}, [])

	const [user, setUser] = useState(null)
	const router = useRouter()
	const [selectedItem, setSelectedItem] = useState(0) // Estado para el elemento seleccionado
	const pathname = usePathname()
	const parts = pathname.split('/') // Esto devuelve ["", "dashboard", "project1"]
	const projectName = parts[2] // Esto selecciona "project1"
	const [projectInformation, setProjectInformation] = useState(null) // Añade esta línea

	useEffect(() => {
		const fetchProjectInformation = async () => {
			if (projectName) {
				try {
					const res1 = await axios.get(
						`http://localhost:3001/api/businessAndClientObjectives?projectName=${projectName}`,
					)
					const res2 = await axios.get(
						`http://localhost:3001/api/onboardingPackage?projectName=${projectName}`,
					)
					const res3 = await axios.get(`http://localhost:3001/api/mvpAndIdea?projectName=${projectName}`)
					const res4 = await axios.get(
						`http://localhost:3001/api/naStrategyGrowthhacking?projectName=${projectName}`,
					)
					setProjectInformation({ bco: res1.data, op: res2.data, mvp: res3.data, strat: res4.data }) // Guarda las respuestas de la API en el estado
					console.log('Información del proyecto:', res1.data, res2.data, res3.data, res4.data)
				} catch (error) {
					console.error('Error al obtener la información del proyecto:', error)
				}
			}
		}

		fetchProjectInformation()
	})

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await axios.get('http://localhost:3001/api/user', { withCredentials: true })
				if (res && res.data.user) {
					setUser(res.data.user)
				} else {
					router.push('/')
				}
			} catch (err) {
				console.error(err)
				router.push('/not-found')
			}
		}

		fetchUser()
	})

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const res = await fetch('http://localhost:3001/api/projects?userId=' + user.id, {
					credentials: 'include',
				})

				if (res.ok) {
					const data = await res.json()
					if (data && data.length > 0) {
						setTitleProject(data[0].title)
					}
				}
			} catch (err) {
				console.error(err)
			}
		}

		fetchProjects()
	}) // Dependencia vacía para que se ejecute el useEffect sólo una vez

	const logout = async () => {
		try {
			await axios.post('http://localhost:3001/logout', {}, { withCredentials: true })
			setUser(null)
			router.push('/')
		} catch (err) {
			console.error(err)
		}
	}

	if (!user) {
		return (
			<div className="flex items-center justify-center h-screen bg-slate-700">
				<div className="flex flex-col items-center justify-center w-full gap-4">
					<div className="flex items-center justify-center text-4xl text-blue-400 border-8 border-gray-300 rounded-full w-28 h-28 animate-spin border-t-blue-400">
						<Image alt="loading" src="/logo.png" width={100} height={100} />
					</div>
					<div className="mt-4 text-2xl text-white">Loading...</div>
				</div>
			</div>
		)
	}

	if (user.email === 'admin@gmail.com') {
		avatarURl = '/reforma logo.png' // Reemplaza esto con la ruta a la imagen del administrador
	} else {
		avatarURl = '/logo.png' // Reemplaza esto con la ruta a la imagen del usuario
	}

	return (
		<section>
			<div className="flex bg-[#21233A]">
				<aside className="hidden h-screen px-8 py-12 sm:block md:w-1/5">
					<div className="flex flex-col items-center gap-4">
						<Avatar src={avatarURl} className="h-24 w-24" />
						<h1 className="flex items-center justify-start text-2xl animate-jump-in">
							{user.rol === 'usuario' ? titleProject : 'Admin'}
						</h1>
					</div>
					<Divider className="my-4 bg-white" />
					<div className="relative py-8">
						<ul>
							<li className="flex flex-col gap-y-4">
								<span
									className={`flex items-center gap-4 ${
										selectedItem === 0 ? 'selected text-pink-500' : ''
									}`}
									onClick={() => setSelectedItem(0)}
								>
									<FaBars />
									<span>ALL CONTENT</span>
								</span>
								<span
									className={`flex items-center gap-4 ${
										selectedItem === 1 ? 'selected text-pink-500' : ''
									}`}
									onClick={() => setSelectedItem(1)}
								>
									<FaBars /> <span>Name of BUSINESS and Client objectives</span>
								</span>
								<span
									className={`flex items-center gap-4 ${
										selectedItem === 2 ? 'selected text-pink-500' : ''
									}`}
									onClick={() => setSelectedItem(2)}
								>
									<FaBars />
									<span> Onboarding Package</span>
								</span>
								<span
									className={`flex items-center gap-4 ${
										selectedItem === 3 ? 'selected text-pink-500' : ''
									}`}
									onClick={() => setSelectedItem(3)}
								>
									<FaBars />
									<span> MVP + IDEA</span>
								</span>
								<span
									className={`flex items-center gap-4 ${
										selectedItem === 4 ? 'selected text-pink-500' : ''
									}`}
									onClick={() => setSelectedItem(4)}
								>
									<FaBars />
									<span>N/A Strategy + GrowthHacking</span>
								</span>
							</li>
						</ul>
					</div>
					<div className="flex justify-center">
						<Button className="text-white bg-blue-500 w-96 hover:bg-blue-700" onClick={logout}>
							<FaPowerOff className="mr-2" />
							LOG OUT
						</Button>
					</div>
				</aside>
				<div className="flex flex-col w-screen md:w-4/5 bg-[#151A28]">
					<div className="px-12 py-4">
						{selectedItem === 0 ? (
							<div>
								{projectInformation &&
									projectInformation.bco &&
									projectInformation.bco.length > 0 &&
									projectInformation.bco.map((project, index) => (
										<div
											key={index}
											className="w-full md:w-3/4 animate-fade-left animate-once animate-delay-200"
										>
											<Accordion>
												<AccordionItem
													key="anchor"
													aria-label="Anchor"
													selec
													indicator={({ isOpen }) => (isOpen ? <FaXmark /> : <FaCheck />)}
													title={<span className="text-white">{project.content_1}</span>}
													subtitle={<span className="text-white">{project.content_2}</span>}
													className="px-4 my-4 border rounded-lg "
												>
													{project.content_3 ? <p>{project.content_3} </p> : <p></p>}
													{project.image ? <img src={project.image} /> : <p></p>}

													<Link
														target="_blank"
														className="text-white underline outline-b"
														href={project.href}
													>
														{project.link}
													</Link>
												</AccordionItem>
											</Accordion>
										</div>
									))}
								{projectInformation &&
									projectInformation.op &&
									projectInformation.op.length > 0 &&
									projectInformation.op.map((project, index) => (
										<div
											key={index}
											className="w-full md:w-3/4 animate-fade-left animate-once animate-delay-200"
										>
											<Accordion>
												<AccordionItem
													key="anchor"
													aria-label="Anchor"
													selec
													indicator={({ isOpen }) => (isOpen ? <FaXmark /> : <FaCheck />)}
													title={<span className="text-white">{project.content_1}</span>}
													subtitle={<span className="text-white">{project.content_2}</span>}
													className="px-4 my-4 border rounded-lg "
												>
													{project.content_3 ? <p>{project.content_3} </p> : <p></p>}
													{project.image ? <img src={project.image} /> : <p></p>}
													<Link
														target="_blank"
														className="text-white underline outline-b"
														href={project.href}
													>
														{project.link}
													</Link>{' '}
												</AccordionItem>
											</Accordion>
										</div>
									))}
								{projectInformation &&
									projectInformation.mvp &&
									projectInformation.mvp.length > 0 &&
									projectInformation.mvp.map((project, index) => (
										<div
											key={index}
											className="w-full md:w-3/4 animate-fade-left animate-once animate-delay-200"
										>
											<Accordion>
												<AccordionItem
													key="anchor"
													aria-label="Anchor"
													selec
													indicator={({ isOpen }) => (isOpen ? <FaXmark /> : <FaCheck />)}
													title={<span className="text-white">{project.content_1}</span>}
													subtitle={<span className="text-white">{project.content_2}</span>}
													className="px-4 my-4 border rounded-lg "
												>
													{project.content_3 ? <p>{project.content_3} </p> : <p></p>}
													{project.image ? <img src={project.image} /> : <p></p>}
													<Link
														target="_blank"
														className="text-white underline outline-b"
														href={project.href}
													>
														{project.link}
													</Link>{' '}
												</AccordionItem>
											</Accordion>
										</div>
									))}
								{projectInformation &&
									projectInformation.strat &&
									projectInformation.strat.length > 0 &&
									projectInformation.strat.map((project, index) => (
										<div
											key={index}
											className="w-full md:w-3/4 animate-fade-left animate-once animate-delay-200"
										>
											<Accordion>
												<AccordionItem
													key="anchor"
													aria-label="Anchor"
													selec
													indicator={({ isOpen }) => (isOpen ? <FaXmark /> : <FaCheck />)}
													title={<span className="text-white">{project.content_1}</span>}
													subtitle={<span className="text-white">{project.content_2}</span>}
													className="px-4 my-4 border rounded-lg "
												>
													{project.content_3 ? <p>{project.content_3} </p> : <p></p>}
													{project.image ? <img src={project.image} /> : <p></p>}
													<Link
														target="_blank"
														className="text-white underline outline-b"
														href={project.href}
													>
														{project.link}
													</Link>{' '}
												</AccordionItem>
											</Accordion>
										</div>
									))}
							</div>
						) : selectedItem === 1 &&
						  projectInformation &&
						  projectInformation.bco &&
						  projectInformation.bco.length > 0 ? (
							projectInformation.bco.map((project, index) => (
								<div
									key={index}
									className="w-full md:w-3/4 animate-fade-left animate-once animate-delay-200"
								>
									<Accordion>
										<AccordionItem
											key="anchor"
											aria-label="Anchor"
											selec
											indicator={({ isOpen }) => (isOpen ? <FaXmark /> : <FaCheck />)}
											title={<span className="text-white">{project.content_1}</span>}
											subtitle={<span className="text-white">{project.content_2}</span>}
											className="px-4 my-4 border rounded-lg "
										>
											{project.content_3 ? <p>{project.content_3} </p> : <p></p>}
											{project.image ? <img src={project.image} /> : <p></p>}
											<Link
												target="_blank"
												className="text-white underline outline-b"
												href={project.href}
											>
												{project.link}
											</Link>
										</AccordionItem>
									</Accordion>
								</div>
							))
						) : selectedItem === 2 &&
						  projectInformation &&
						  projectInformation.op &&
						  projectInformation.op.length > 0 ? (
							projectInformation.op.map((project, index) => (
								<div
									key={index}
									className="w-full md:w-3/4 animate-fade-left animate-once animate-delay-200"
								>
									<Accordion>
										<AccordionItem
											key="anchor"
											aria-label="Anchor"
											selec
											indicator={({ isOpen }) => (isOpen ? <FaXmark /> : <FaCheck />)}
											title={<span className="text-white">{project.content_1}</span>}
											subtitle={<span className="text-white">{project.content_2}</span>}
											className="px-4 my-4 border rounded-lg "
										>
											{project.content_3 ? <p>{project.content_3} </p> : <p></p>}
											{project.image ? <img src={project.image} /> : <p></p>}
											<Link
												target="_blank"
												className="text-white underline outline-b"
												href={project.href}
											>
												{project.link}
											</Link>{' '}
										</AccordionItem>
									</Accordion>
								</div>
							))
						) : selectedItem === 3 &&
						  projectInformation &&
						  projectInformation.mvp &&
						  projectInformation.mvp.length > 0 ? (
							projectInformation.mvp.map((project, index) => (
								<div
									key={index}
									className="w-full md:w-3/4 animate-fade-left animate-once animate-delay-200"
								>
									<Accordion>
										<AccordionItem
											key="anchor"
											aria-label="Anchor"
											selec
											indicator={({ isOpen }) => (isOpen ? <FaXmark /> : <FaCheck />)}
											title={<span className="text-white">{project.content_1}</span>}
											subtitle={<span className="text-white">{project.content_2}</span>}
											className="px-4 my-4 border rounded-lg "
										>
											{project.content_3 ? <p>{project.content_3} </p> : <p></p>}
											{project.image ? <img src={project.image} /> : <p></p>}
											<Link
												target="_blank"
												className="text-white underline outline-b"
												href={project.href}
											>
												{project.link}
											</Link>{' '}
										</AccordionItem>
									</Accordion>
								</div>
							))
						) : selectedItem === 4 &&
						  projectInformation &&
						  projectInformation.strat &&
						  projectInformation.strat.length > 0 ? (
							projectInformation.strat.map((project, index) => (
								<div
									key={index}
									className="w-full md:w-3/4 animate-fade-left animate-once animate-delay-200"
								>
									<Accordion>
										<AccordionItem
											key="anchor"
											aria-label="Anchor"
											selec
											indicator={({ isOpen }) => (isOpen ? <FaXmark /> : <FaCheck />)}
											title={<span className="text-white">{project.content_1}</span>}
											subtitle={<span className="text-white">{project.content_2}</span>}
											className="px-4 my-4 border rounded-lg "
										>
											{project.content_3 ? <p>{project.content_3} </p> : <p></p>}
											{project.image ? <img src={project.image} /> : <p></p>}
											<Link
												target="_blank"
												className="text-white underline outline-b"
												href={project.href}
											>
												{project.link}
											</Link>{' '}
										</AccordionItem>
									</Accordion>
								</div>
							))
						) : timeout ? (
							<div className="flex items-center justify-center h-screen text-2xl">
								No hay información por mostrar.
							</div>
						) : (
							<div className="flex items-center justify-center h-screen">
								<div class="flex-col gap-4 w-full flex items-center justify-center">
									<div class="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
										<Image src="/logo.png" width={100} height={100} />
									</div>
									<div className="mt-4 text-2xl text-white">Loading...</div>{' '}
								</div>{' '}
							</div>
						)}
						<div className="flex items-center justify-center">
							<Button
								className="block text-white bg-blue-500 sm:hidden hover:bg-blue-700 w-80"
								onClick={logout}
							>
								LOG OUT
							</Button>
						</div>
					</div>
					<section className="flex flex-col justify-between sm:flex-row">
						<div className="hidden md:block ">
							{' '}
							<h1 className="text-center text-3xl justify-center items-center rounded-2xl w-[600px] mt-8 mx-16 py-12 bg-[#21233A]">
								Comercial
							</h1>
						</div>
						<div className="flex justify-center items-center px-24">
							<FaComments className="w-12 h-24" />
							<FaWhatsapp className="text-green-500 h-12 w-24" />
						</div>
					</section>
				</div>
			</div>
			<footer>
				<div className="flex items-center justify-center py-4 text-white border-t bg-[#21233A]">
					© 2023 All rights reserved
				</div>
			</footer>
		</section>
	)
}

export default Dashboard
