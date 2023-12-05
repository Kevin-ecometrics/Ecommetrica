'use client'
import Container from '../components/container'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { jsPDF } from 'jspdf'
import { toast, Toaster } from 'react-hot-toast'
import { Input } from '@nextui-org/react'

export default function Page() {
	const generatePDF = () => {
		const doc = new jsPDF()
		const nombre = document.getElementById('nombre').value
		doc.text('Ecommetrica guarda la siguiente informacion en sus bases de datos', 10, 10)
		doc.text('respaldando todo y teniendo la seguidad de todo los datos que se guarde.', 10, 20)
		doc.text('Nombre: ' + document.getElementById('nombre').value, 10, 30)
		doc.text('Apellido: ' + document.getElementById('apellido').value, 10, 40)
		doc.text('Teléfono: ' + document.getElementById('direccion').value, 10, 50)
		doc.text('Dirección: ' + document.getElementById('telefono').value, 10, 60)
		doc.text('Ciudad: ' + document.getElementById('ciudad').value, 10, 70)
		doc.text('País: ' + document.getElementById('pais').value, 10, 80)
		doc.text('Fecha de Nacimiento: ' + document.getElementById('fechaNacimiento').value, 10, 90)
		doc.text('Género: ' + document.getElementById('genero').value, 10, 100)
		doc.text('Rol: ' + document.getElementById('rol').value, 10, 110)
		doc.text('Correo: ' + document.getElementById('email').value, 10, 120)
		doc.text('Contraseña: ' + document.getElementById('password').value, 10, 130)

		doc.save(`Ecommetrica_Cliente_${nombre}.pdf`)
	}

	const [user, setUser] = useState(null)
	const router = useRouter()

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await axios.get('https://e-commetrics.com/api/user', {
					withCredentials: true,
				})
				if (res.data.user) {
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
	}, [])

	const logout = async () => {
		try {
			await axios.post('https://e-commetrics.com/logout', {}, { withCredentials: true })
			setUser(null)
			router.push('/')
		} catch (err) {
			console.error(err)
		}
	}

	if (!user) {
		return <div>Cargando...</div>
	}

	if (user.rol !== 'admin') {
		router.push('/not-found')
		return null
	}
	const handleSubmit = async (event) => {
		event.preventDefault()
		const formFields = [
			'nombre',
			'apellido',
			'telefono',
			'direccion',
			'ciudad',
			'pais',
			'fechaNacimiento',
			'genero',
			'rol',
			'email',
			'password',
		]
		const isFormValid = formFields.every((field) => event.target[field].value.trim() !== '')

		if (!isFormValid) {
			toast.error('Por favor, complete todos los campos', { duration: 3000 })
			return
		}

		const telefonoValue = event.target.telefono.value.trim()
		if (!/^\d{10}$/.test(telefonoValue)) {
			toast.error('El campo de teléfono debe contener solo números y tener entre 1 y 10 dígitos', {
				duration: 3000,
			})
			return
		}
		const nombre = event.target.nombre.value
		const fechaNacimiento = event.target.fechaNacimiento.value
		const year = fechaNacimiento.split('-')[0]
		const lastTwoDigitsOfYear = year.slice(-2)

		const username = `${nombre}${lastTwoDigitsOfYear}`

		const registerData = {
			username,
			email: event.target.email.value,
			password: event.target.password.value,
			rol: event.target.rol.value,
		}
		const informationData = {
			nombre,
			apellido: event.target.apellido.value,
			telefono: event.target.telefono.value,
			direccion: event.target.direccion.value,
			ciudad: event.target.ciudad.value,
			pais: event.target.pais.value,
			fechaNacimiento,
			genero: event.target.genero.value,
		}
		try {
			const registerRes = await axios.post('https://e-commetrics.com/register', registerData, {
				withCredentials: true,
			})
			toast.success('usuario creado exitosamente', { duration: 3000 }) // Mostrar notificación de éxito
			console.log(registerRes.data)
			event.target.reset()
			const informationRes = await axios.post('https://e-commetrics.com/information', informationData, {
				withCredentials: true,
			})
			console.log(informationRes.data)
		} catch (err) {
			console.error(err)
			toast.error('Error al registrar usuario', { duration: 3000 }) // Mostrar notificación de error
		}
	}
	return (
		<div>
			<Container title="Panel de control" />
			{/* <h1>Bienvenido usuario con el id: {user.id}</h1>
      <button className='p-4 bg-blue-500 rounded-2xl hover:bg-blue-700 ' onClick={logout}>Cerrar sesión</button> */}
			<div className="p-8 text-black bg-white">
				<h1 className="text-4xl">Agregar usuarios al sistema.</h1>
				<form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4 mt-4">
					<div className="mb-4">
						<label htmlFor="nombre" className="block">
							Nombre:
						</label>
						<Input
							placeholder="Nombre"
							type="text"
							id="nombre"
							className="px-4 py-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="apellido" className="block">
							Apellido:
						</label>
						<Input
							placeholder="Apellido"
							type="text"
							id="apellido"
							className="px-4 py-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="telefono" className="block">
							Teléfono:
						</label>
						<Input
							placeholder="Teléfono"
							type="text"
							id="telefono"
							maxLength={10}
							className="px-4 py-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="direccion" className="block">
							Dirección:
						</label>
						<Input
							placeholder="Dirección"
							type="text"
							id="direccion"
							className="px-4 py-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="ciudad" className="block">
							Ciudad:
						</label>
						<Input
							placeholder="Ciudad"
							type="text"
							id="ciudad"
							className="px-4 py-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="pais" className="block">
							País:
						</label>
						<Input
							placeholder="País"
							type="text"
							id="pais"
							className="px-4 py-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="fechaNacimiento" className="block">
							Fecha de Nacimiento:
						</label>
						<Input
							placeholder="Fecha de Nacimiento"
							type="date"
							id="fechaNacimiento"
							className="px-4 py-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="email" className="block">
							Correo electrónico:
						</label>
						<Input
							placeholder="Correo electrónico"
							type="email"
							id="email"
							className="px-4 py-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="block">
							Password:
						</label>
						<Input
							placeholder="Password"
							type="password"
							id="password"
							className="px-4 py-2 border border-gray-300 rounded-md"
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="genero" className="block">
							Género:
						</label>
						<select id="genero" className="px-4 py-2 border border-gray-300 rounded-md">
							<option value="masculino">Masculino</option>
							<option value="femenino">Femenino</option>
							<option value="otro">Otro</option>
						</select>
					</div>
					<div className="mb-4">
						<label htmlFor="rol" className="block">
							Rol:
						</label>
						<select id="rol" defaultValue="usuario" className="px-4 py-2 border border-gray-300 rounded-md">
							<option value="admin">Administrador</option>
							<option value="usuario">Usuario</option>
						</select>
					</div>
					<div className="flex gap-4 mt-4">
						<button
							type="button"
							onClick={generatePDF}
							className="w-48 h-12 text-white bg-blue-500 rounded-md hover:bg-blue-700"
						>
							Generar PDF
						</button>
						<button type="submit" className="w-48 h-12 text-white bg-blue-500 rounded-md hover:bg-blue-700">
							Registrar usuario
						</button>
					</div>{' '}
				</form>
			</div>
			<Toaster position="bottom-right" reverseOrder={false} />
		</div>
	)
}

