import Cabecalho from '../../components/cabecalho';
import Contador from '../../components/contador';
import ItemMeta from '../../components/itemMeta';
import ItemPlano from '../../components/itemPlano';
import { useState } from 'react';
import './index.scss';
import CartaoFilme from '../../components/cartaoFIlme';

export default function Comps() {

    const [novaMeta, setNovaMeta] = useState('');
    const [listaMetas, setListaMetas] = useState([]);
    const [editando, setEditando] = useState(-1);

    const [plano, setPlano] = useState('');
    const [situacao, setSituacao] = useState('');
    const [coloracao, setColoracao] = useState('');
    const [listaPlanos, setListaPlanos] = useState([]);

    const [nomeFilme, setNomeFilme] = useState('');
    const [classsificacaoFilme, setClasssificacaoFilme] = useState('');
    const [urlFilme, setUrlFilme] = useState('');
    const [listaFilmes, setListaFilmes] = useState([]);

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

    function adicionarFilme () {
        if (nomeFilme == '' || classsificacaoFilme == '' || urlFilme == '') {
            alert('Preencha todos os campos')
            return;
        }
        
        let novoFilme = {
            nome: nomeFilme,
            classificacao: classsificacaoFilme,
            url: urlFilme
        }

        setListaFilmes([...listaFilmes, novoFilme]);
        setNomeFilme('');
        setClasssificacaoFilme('');
        setUrlFilme('');
    }

    return (
        <div className='pagina-comps pagina'>
            <Cabecalho titulo='React JS | Componentes' />

            <div className="secao filmes">
                <h1>Catálogo de Filmes</h1>

                <div className="entrada">
                    <input type="text" placeholder='Nome do filme' value={nomeFilme} onChange={e => setNomeFilme(e.target.value)}/>
                    <input type="text" placeholder='Classificação' value={classsificacaoFilme} onChange={e => setClasssificacaoFilme(e.target.value)}/>
                    <input type="text" placeholder='URL da capa' value={urlFilme} onChange={e => setUrlFilme(e.target.value)}/>
                    <button onClick={adicionarFilme}> Adicionar </button>
                </div>

                <div className="lista">
                    {listaFilmes.map(item =>
                        <CartaoFilme item={item}/>
                    )}
                </div>
            </div>

            <div className='secao'>
                <Contador titulo='Passos' inicio={0} fim={20} />
                <Contador titulo='Erros' />
            </div>

            <div className="secao metas">
                <h1> Metas para os próximos 5 anos </h1>

                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)} />
                    <button onClick={adicionarMeta}> Adicionar </button>
                </div>

                <ul>
                    {listaMetas.map((item, pos) =>
                        <ItemMeta
                            item={item}
                            pos={pos}
                            alterarMeta={alterarMeta}
                            removerMeta={removerMeta}
                        />
                    )}
                </ul>
            </div>

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
                            <ItemPlano item={item} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}