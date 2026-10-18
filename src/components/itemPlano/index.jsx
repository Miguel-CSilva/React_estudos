import './index.scss';

export default function ItemPlano(props) {
    return (
        <div className='comp-item-plano'>
            <div className='cor' style={{ backgroundColor: props.item.coloracao }}>&nbsp;</div>
            <div>
                <h1> {props.item.plano} </h1>
                <h2> {props.item.situacao} </h2>
            </div>
        </div>
    )
}