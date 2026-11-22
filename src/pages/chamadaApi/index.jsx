import './index.scss';
import axios from 'axios';

import Cabecalho from '../../components/cabecalho';
import { useState } from 'react';

export default function ChamadaApi() {

    const [cep, setCep] = useState('');
    const [infoLogradouro, setInfoLogradouro] = useState('');

    async function BuscarCep() {
        let url = 'http://viacep.com.br/ws/' + cep + '/json/';

        let resp = await axios.get(url)
        let dados = resp.data;

        let mensagem = dados.logradouro + ', ' + dados.bairro + '. ' + dados.localidade + '/ ' + dados.uf;
        
        setInfoLogradouro(mensagem);
    }


    return (
        <div className='pagina-chamada-api pagina'>
            <Cabecalho titulo="React JS | Chamando APIs" />

            <div className="secao">
                <h1> API do Correio </h1>

                <div>
                    <input type="text" placeholder='Digite o CEP' value={cep} onChange={e => setCep(e.target.value)}/>
                    <button onClick={BuscarCep}> Buscar </button>
                </div>

                <p> {infoLogradouro} </p>

            </div>

        </div>


    )
}