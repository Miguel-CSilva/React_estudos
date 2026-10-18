import './index.scss';

export default function ItemMeta(props) {

    return (
        <li className="comp-item-meta">
            <i class="fa-regular fa-pen-to-square" onClick={() => props.alterarMeta(props.pos)}></i>&nbsp;
            <i class="fa-solid fa-trash-can" onClick={() => props.removerMeta(props.pos)}></i> &nbsp;
            {props.item}
        </li>
    )
};