import './index.scss'

import { Link }  from 'react-router-dom';

export default function Contato(){
    return(
        <div className='pagina-contato'>
            <h1>Contato</h1>
            <Link className='link' to='/'>Voltar para o app</Link>
        </div>
    )
}