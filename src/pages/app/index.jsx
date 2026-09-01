import './index.scss';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app pagina">
      <header className='cabecalho'>
        <h1 className='titulo1'>
          Miguel
          <i class="fa-solid fa-face-smile"></i>
        </h1>
      </header>

      <section className='secao'>
        <h1>Estudando</h1>
        <input type='text'></input>
        <Link to='/contato' className='link'>Vá para contato</Link>
        <Link to='/eventos' className='link'>Página Eventos</Link>
      </section>
      
    </div>
  );
}