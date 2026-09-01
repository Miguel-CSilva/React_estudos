import './index.scss';

export default function Eventos(){

    function Clicou(){
        alert('Oi, usuário acaba de clicar')
    }

    function MovimentouMouse(){
        alert('Oi, usuário movimentou')
    }

    function Alterou(e){
        let novoValor = e.target.value
        alert('Oi, usuário alterou para ' + novoValor);
    }

    function AlterouCheck (e){
        let novoValor = e.target.checked;
        alert('Oi, usuário alterou para ' + novoValor);
    }

    return(
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1>React JS | Eventos </h1>
            </header>

            <section className='secao'>
                <h1> Entendendo eventos </h1>

                <p onClick={Clicou} onMouseMove={MovimentouMouse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut et distinctio minus culpa officiis vitae laboriosam dignissimos, quae, officia pariatur animi exercitationem? Id ut vel exercitationem odit. Adipisci, accusantium!</p>

                <textarea >
                    
                </textarea>

                <input  type='text' placeholder='Digite algo aqui'onChange={Alterou}/>

                <select onChange={Alterou}>
                    <option> Selecione </option>
                    <option> Item A </option>
                    <option> Item B </option>
                </select>

                <div className='grupo'>
                    <input type='checkbox' onChange={AlterouCheck}/> Opção 1
                    <input type='checkbox' onChange={AlterouCheck}/> Opção 2
                </div>
                <div className='grupo'>
                    <div><input type='radio' name='gpo'/> Opção 1</div>
                    <div><input type='radio' name='gpo'/> Opção 2</div>
                </div>

                <button onClick={Clicou}> Clique aqui </button>

            </section>

            
        </div>
    );
};