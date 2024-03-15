// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { NextUIProvider } from '@nextui-org/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n' // Asegúrate de que esta ruta apunta a tu archivo de configuración de i18n

export function Providers({ children }) {
	return (
		<CacheProvider>
			<ChakraProvider>
				<NextUIProvider>
					<I18nextProvider i18n={i18n}>{children}</I18nextProvider>
				</NextUIProvider>
			</ChakraProvider>
		</CacheProvider>
	)
}
