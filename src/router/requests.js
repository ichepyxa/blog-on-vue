import axios from 'axios'

const apiRequest = async (method, url, data = null) => {
	let body, code, response

	try {
		response = await axios[method](url, data)
	} catch (error) {
		response = error.response
	}

	body = response.data
	code = response.status

	return { body, code }
}

export const getPosts = async () => {
	return await apiRequest('get', '/posts')
}

export const getPost = async id => {
	return await apiRequest('get', `/posts/${id}`)
}

export const getProfile = async () => {
	return await apiRequest('get', '/profile')
}

export const sendLogin = async data => {
	return await apiRequest('post', '/auth', data)
}

export const sendRegistration = async data => {
	return await apiRequest('post', '/registration', data)
}

export const userLogout = async () => {
	return await apiRequest('delete', '/logout')
}

export const removePost = async () => {
	return await apiRequest('delete', '/logout')
}
