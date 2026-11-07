import api from './api'

export const getUsers = async () => {
    const response = await api.get('/v1/user/buscar')

    return response.data
}

export const getCurrentUser = async () => {
    const response = await api.get('/v1/user/detalhe')

    return response.data
}

export const createUser = async (name, email, password) => {
    const response = await api.post('/v1/user/criar', { name, email, password })

    return response.data
}

export const updateCurrentUser = async (name, email, password) => {
    const response = await api.put('/v1/user/alterar', { name, email, password })

    return response.data
}

export const deleteCurrentUser = async () => {
    const response = await api.delete('/v1/user/deletar')

    return response.data
}

export const loginUser = async (email, password) => {
    const body = { email, password }
    const response = await api.post('/v1/user/login', body, {
        headers: { 'Content-Type': 'application/json' }
    })
    
    return response.data
}