import axios from 'axios'
import { getProfile } from '../router/requests'

export const setAuthToken = token => {
	localStorage.setItem('auth-user-token', token)
	axios.defaults.headers['Authorization'] = `Bearer ${token}`
}

export const removeAuthToken = () => {
	localStorage.removeItem('auth-user-token')
}

export const getUserProfile = async () => {
	let user = null

	const { body, code } = await getProfile()
	if (code === 200) {
		user = body
	}

	return user
}
