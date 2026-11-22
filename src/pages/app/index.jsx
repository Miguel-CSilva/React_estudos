import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

export default function App() {
  return (
    <div className="pagina-app pagina">
      <Cabecalho titulo='Estudando JS'/>

      <section className='secao'>
        <h1> Temas </h1>
        <input type='text'></input>
        <Link to='/contato' className='link'>Vá para contato</Link>
        <Link to='/eventos' className='link'>Página Eventos</Link>
        <Link to='/varEstado' className='link'>Página de Variáveis de Estado</Link>
        <Link to='/componentes' className='link'>Componentes</Link>
        <Link to='/chamadaapi' className='link'>Chamada API</Link>
      </section>
      
    </div>
  );
}