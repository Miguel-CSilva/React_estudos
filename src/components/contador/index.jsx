import './index.scss';
import { useState } from 'react';

export default function Contador(props) {

    const [contador, setContador] = useState(0);

    function Aumentar() {
        setContador(contador < (props.fim ?? 10));
    }
    function Diminuir() {
        if (contador !== 0)
            setContador(contador > (props.inicio ?? 0));
    }
    function Zerar() {
        setContador(contador - contador)
    }

    return (
        <div className='comp-contador'>
            <h1> {props.titulo} </h1>
            <div className="botoes">
                <button onClick={Diminuir}> - </button>
                {contador}
                <button onClick={Aumentar}> + </button>
            </div>
            <button onClick={Zerar}>Zerar</button>
        </div>
    )
}