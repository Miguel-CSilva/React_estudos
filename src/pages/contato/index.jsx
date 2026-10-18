import './index.scss'
import Cabecalho from '../../components/cabecalho';

import { Link } from 'react-router-dom';

export default function Contato() {
    return (
        <div className='pagina-contato pagina'>
            <Cabecalho titulo = 'React JS | Contato'/>
            <div className='nome'>
                <h1>Contato</h1>
                <Link className='link' to='/'>Voltar para o app</Link>
            </div>
        </div>
    )
}