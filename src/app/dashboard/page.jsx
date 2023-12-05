'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Container from '../components/container'
function Dashboard() {
	const [user, setUser] = useState(null)
	const router = useRouter()

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const res = await axios.get('https://e-commetrics.com/api/user', { withCredentials: true })
				if (res && res.data.user) {
					setUser(res.data.user)
				} else {
					router.push('/')
				}
			} catch (err) {
				console.error(err)
				router.push('/not-found');
			}
		}

		fetchUser()
	}, [])

	const logout = async () => {
		try {
			await axios.post('https://e-commetrics.com/logout', {}, { withCredentials: true })
			setUser(null)
			router.push('/');
		} catch (err) {
			console.error(err)
		}
	}

	if (!user) {
	  return <div>Cargando...</div>;
	}

	return (
		<section>
			<Container title="Dashboard" />
			<div className="flex items-center justify-center h-screen bg-gray-400">
					<h1>
						Bienvenido usuario con el siguiente nombre:
						{user.username}
					</h1>
					<button className='p-4 bg-blue-500 rounded-2xl hover:bg-blue-700 ' onClick={logout}>Cerrar sesión</button>
				</div>
		</section>
	)
}

export default Dashboard
