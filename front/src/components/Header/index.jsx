import './style.css'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        return navigate('/')
    }

    return (
        <>
            Header
            {/* Se tu for bom mesmo, tu faz esse 
            botão aparece só se tive logado */}
            <button 
                onClick={handleLogout}
            >Sair</button>
        </>
    )
}

export default Header