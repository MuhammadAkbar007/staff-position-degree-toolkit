import {connect} from "react-redux";
import {deletePosition} from "../../store/position";
import {useState} from "react";
import MyModal from "../Modal/MyModal";

function PositionTable({position, deletePosition}) {

    const [modal, setModal] = useState(false)
    const [id, setId] = useState(0)

    function toggle() {
        setModal(prev => !prev)
    }

    function onEdit(id) {
        setId(id)
        toggle()
    }

    return <div>

        {modal && <MyModal page={'Lavozimlar'} isOpen={modal} toggleModal={toggle} id={id}/>}

        <table className={'table table-dark table-hover table-striped table-bordered'}>
            <thead>
            <tr>
                <th>#</th>
                <th>Nomi</th>
                <th>Maoshi</th>
                <th>Tahrirlash | O'chirish</th>
            </tr>
            </thead>
            <tbody>
            {position.map(item => <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.salary + ' $'}</td>
                <td>
                    <button className={'btn btn-warning mx-1'} onClick={() => onEdit(item.id)}> ✏️</button>
                    <button className={'btn btn-danger mx-1'} onClick={() => deletePosition(item.id)}> ❌</button>
                </td>
            </tr>)}
            </tbody>
        </table>
    </div>
}

export default connect(state => ({position: state.positionReducer.positions}), {deletePosition})(PositionTable)