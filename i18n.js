// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Importa los archivos de traducción
import translationEN from './locales/en.json'
import translationES from './locales/es.json'

// Configuración de i18n
i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: translationEN,
		},
		es: {
			translation: translationES,
		},
	},
	lng: 'en', // Establece el idioma por defecto
	fallbackLng: 'es', // Establece el idioma de respaldo
	interpolation: {
		escapeValue: false, // No escapar HTML en las cadenas traducidas
	},
})

export default i18n
