import {connect} from "react-redux";
import {deleteDegree} from "../../store/degree";
import {useState} from "react";
import MyModal from "../Modal/MyModal";

function DegreeTable({degrees, deleteDegree}) {

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
        {modal && <MyModal page={'Ilmiy'} isOpen={modal} toggleModal={toggle} id={id}/>}
        <table className={'table table-dark table-hover table-striped table-bordered'}>
            <thead>
            <tr>
                <th>#</th>
                <th>Nomi</th>
                <th>Bonusi</th>
                <th>Tahrirlash | O'chirish</th>
            </tr>
            </thead>
            <tbody>
            {degrees.map(item => <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.bonus + ' $'}</td>
                <td>
                    <button className={'btn btn-warning mx-1'} onClick={() => onEdit(item.id)}> ✏️</button>
                    <button className={'btn btn-danger mx-1'} onClick={() => deleteDegree(item.id)}> ❌</button>
                </td>
            </tr>)}
            </tbody>
        </table>
    </div>
}

export default connect(state => ({degrees: state.degreeReducer.degrees}), {deleteDegree})(DegreeTable)