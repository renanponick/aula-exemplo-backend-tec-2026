import { useEffect, useState } from 'react'
import { getUsers } from '../../api/user'
import './style.css'

function User() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        let isMounted = true

        const loadUsers = async () => {
            try {
                const response = await getUsers()
                if (isMounted) {
                    setUsers(response.users)
                }
            } catch (requestError) {
                if (isMounted) {
                    setError(
                        requestError.response?.data?.message
                        || 'Não foi possível carregar a lista de usuários.'
                    )
                }
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }

        loadUsers()

        return () => {
            isMounted = false
        }
    }, [])

    return (
        <main className="user-page">
            <section className="user-card" aria-labelledby="user-title">
                <h1 id="user-title">Usuários</h1>
                {loading && <p role="status">Carregando usuários...</p>}
                {!loading && error && <p className="user-error" role="alert">{error}</p>}
                {!loading && !error && users.length > 0 && (
                    <div className="user-table-wrapper">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {!loading && !error && users.length === 0 && (
                    <p>Nenhum usuário cadastrado.</p>
                )}
            </section>
        </main>
    )
}

export default User