import {connect} from "react-redux";
import {deleteStaff} from "../../store/staff";
import {useState} from "react";
import MyModal from "../Modal/MyModal";

function StaffTable({staff, position, degree, deleteStaff}) {

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

        {modal ? <MyModal page={'Xodimlar'} isOpen={modal} toggleModal={toggle} id={id}/> : ''}

        <table className={'table table-dark table-hover table-striped table-bordered'}>
            <thead>
            <tr>
                <th>#</th>
                <th>Ism</th>
                <th>Familiya</th>
                <th>Yoshi</th>
                <th>Lavozim</th>
                <th>Ilmiy daraja</th>
                <th>Tahrirlash | O'chirish</th>
            </tr>
            </thead>
            <tbody>
            {staff.map(item => <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                    {position.map(positionEl => {
                        if (positionEl.id === item.positionId) {
                            return positionEl.name
                        }
                        return ''
                    })}
                </td>
                <td>
                    {degree.map(degreeEl => {
                        if (degreeEl.id === item.degreeId) {
                            return degreeEl.name
                        }
                        return ''
                    })}
                </td>
                <td>
                    <button className={'btn btn-warning mx-1'} onClick={() => onEdit(item.id)}> ✏️</button>
                    <button className={'btn btn-danger mx-1'} onClick={() => deleteStaff(item.id)}> ❌</button>
                </td>
            </tr>)}
            </tbody>
        </table>
    </div>
}

export default connect(state => ({
    staff: state.staffReducer.staff,
    position: state.positionReducer.positions,
    degree: state.degreeReducer.degrees
}), {deleteStaff})(StaffTable)