import './index.scss';
import { useState } from 'react';

import { tratarNumero } from '../../utils/conversao.js';
import { calcularTotalIngresso } from '../../services/ingresso.js';

export default function VarEstado() {

    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState('Oi');
    const [opcoes, setOpcoes] = useState('Escolha um item');
    const [caixa, setCaixa] = useState(false)
    const [titulo, setTitulo] = useState('Oi');
    const [descricao, setDescricao] = useState('Oi');
    const [antigo, setAntigo] = useState('Atual')
    const [novo, setNovo] = useState();
    const [cor, setCor] = useState();


    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState(0);

    const [qtdIng, setqtdIng] = useState(0);
    const [meioIng, setmeioIng] = useState(0);
    const [cupom, setCupom] = useState('');
    const [totalIng, setTotalIng] = useState(0);

    const [novaMeta, setNovaMeta] = useState('');
    const [listaMetas, setListaMetas] = useState([]);
    const [editando, setEditando] = useState(-1);

    const [plano, setPlano] = useState('');
    const [situacao, setSituacao] = useState('');
    const [coloracao, setColoracao] = useState('');
    const [listaPlanos, setListaPlanos] = useState([]);



    function Aumentar() {
        setContador(contador + 1);
    }
    function Diminuir() {
        if (contador !== 0)
            setContador(contador - 1);
    }
    function Zerar() {
        setContador(contador - contador)
    }

    //função agora no evento: e => setNome(e.target.value)

    //função agora no evento e => setOpcoes(e.target.value)

    function soma() {
        let soma = tratarNumero(num1) + tratarNumero(num2);
        setRes(soma);
    }

    function calcualrIngresso() {
        let total = calcularTotalIngresso(qtdIng, meioIng, cupom)
        setTotalIng(total)
    }

    function adicionarMeta() {


        if (novaMeta !== '') {

            if (editando == -1) {
                setListaMetas([...listaMetas, novaMeta]);
                setNovaMeta('');
            }
            else {
                listaMetas[editando] = novaMeta;
                setListaMetas([...listaMetas]);
                setNovaMeta('');
                setEditando(-1);
            }
        }
    }

    function teclaApertada(e) {
        if (e.key == 'Enter') {
            adicionarMeta();
        }
    }

    function removerMeta(pos) {
        listaMetas.splice(pos, 1);
        setListaMetas([...listaMetas]);
    }

    function alterarMeta(pos) {
        setNovaMeta(listaMetas[pos]);
        setEditando(pos)
    }

    function adicionarPlano() {
        let novoPlano = {
            plano: plano,
            situacao: situacao,
            coloracao: coloracao
        }

        setListaPlanos([...listaPlanos, novoPlano]);

        setPlano('');
        setSituacao('');
        setColoracao('');
    }

    console.log(listaPlanos)


    return (
        <div className='pagina-varestado pagina' style={{ backgroundColor: cor }}>
            <header className='cabecalho'>
                <h1>React | Variável de Estado</h1>
            </header>

            <div className="secao planos">
                <h1>Meu planos atuais</h1>

                <div className="entrada">
                    <input type="text" placeholder='Meu plano aqui' value={plano} onChange={e => setPlano(e.target.value)} />
                    <input type="text" placeholder='Situação do plano aqui' value={situacao} onChange={e => setSituacao(e.target.value)} />
                    <input type="text" placeholder='Cor de identificação' value={coloracao} onChange={e => setColoracao(e.target.value)} />
                    <button onClick={adicionarPlano}> Adicionar plano </button>
                </div>

                <div className="lista">
                    {listaPlanos.map((item, pos) =>
                        <div className='plano' key={pos}>
                            <div className='cor' style={{ backgroundColor: item.coloracao }}>&nbsp;</div>
                            <div>
                                <h1> {item.plano} </h1>
                                <h2> {item.situacao} </h2>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <div className="secao metas">
                <h1> Metas para os próximos 5 anos </h1>

                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)} />
                    <button onClick={adicionarMeta}> Adicionar </button>
                </div>

                <ul>
                    {listaMetas.map((item, pos) =>
                        <li key={pos}>
                            <i class="fa-regular fa-pen-to-square" onClick={() => alterarMeta(pos)}></i>&nbsp;
                            <i class="fa-solid fa-trash-can" onClick={() => removerMeta(pos)}></i> &nbsp;
                            {item}
                        </li>
                    )}
                </ul>
            </div>

            <div className='secao'>
                <h1>Alterar cor</h1>
                <h2>Cor atual: {cor}</h2>

                <input type="color" onChange={(e) => setCor(e.target.value)} />
            </div>

            <div className="secao">
                <h1> {antigo} </h1>

                <input type="text" onChange={e => setNovo(e.target.value)} />

                <button onClick={() => setAntigo(novo)}>Clique aqui</button>
            </div>

            <div className='secao ingresso'>
                <h1> Venda de Ingressos </h1>
                <div className='entrada'>
                    <div>
                        <label> Quantidade: </label>
                        <input type="text" value={qtdIng} onChange={e => setqtdIng(e.target.value)} />
                    </div>
                    <div>
                        <label>Meia Entrada</label>
                        <input type="checkbox" checked={meioIng} onChange={e => setmeioIng(e.target.checked)} />
                    </div>
                    <div>
                        <label>Cupom: </label>
                        <input type="text" value={cupom} onChange={e => setCupom(e.target.value)} />
                    </div>
                    <div>
                        <label> &nbsp; </label>
                        <button onClick={calcualrIngresso}>Calcular</button>
                    </div>
                    <hr />
                    <div>
                        O total é R$ {totalIng}
                    </div>
                </div>
            </div>

            <div className='secao'>
                <h1> Calculadora </h1>
                <div className='entrada'>
                    <input type="text" value={num1} onChange={e => setNum1(e.target.value)} />
                    <input type="text" value={num2} onChange={e => setNum2(e.target.value)} />
                    <div> = </div>
                    <div className='res'> {res} </div>
                </div>
                <button onClick={soma}> Somar </button>
            </div>

            <div className='secao'>
                <h1>Contador</h1>
                <div className="botoes">
                    <button onClick={Diminuir}> - </button>
                    {contador}
                    <button onClick={Aumentar}> + </button>
                </div>
                <button onClick={Zerar}>Zerar</button>
            </div>

            <div className='secao'>
                <h1> {nome} </h1>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
            </div>

            <div className='secao'>
                <h1> {opcoes} </h1>
                <select onChange={e => setOpcoes(e.target.value)}>
                    <option>Selecione</option>
                    <option>JavaScript</option>
                    <option>HTML/CSS</option>
                    <option>ReactJS</option>
                </select>
            </div>

            <div className='secao'>
                <h1>Programar é legal? {caixa ? 'Sim' : 'Não'} </h1>
                <input type="checkbox" checked={caixa} onChange={e => setCaixa(e.target.checked)} /> Programar
            </div>

            <div className='secao'>
                <h1> {titulo} </h1>
                <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />

                <button onClick={() => setTitulo(descricao)}>Alterar</button>
            </div>
        </div>
    );
};