import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {addStaff, editStaff} from "../../store/staff";

function StaffModal({
                        isOpen, toggle, id,
                        positions, degrees,
                        addStaff, editStaff
                    }) {

    const {register, handleSubmit} = useForm()

    function onSubmit(data) {
        if (id === 0) {
            addStaff({
                name: data.name,
                lastName: data.lastName,
                age: data.age,
                positionId: Number(data.position),
                degreeId: Number(data.degree)
            })
        } else {
            editStaff({
                id: id,
                name: data.name,
                lastName: data.lastName,
                age: data.age,
                positionId: Number(data.position),
                degreeId: Number(data.degree)
            })
        }
        toggle()
    }

    return <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Xodimlar Qo'shish | Tahrirlash</ModalHeader>

        <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} id={'staffForm'}>
                <input type="text" className={'form-control'} placeholder={'Ism'} {...register('name')}/>

                <input type="text" className={'form-control my-3'} placeholder={'Familiya'} {...register('lastName')}/>

                <input type="number" className={'form-control'} placeholder={'Yosh'} {...register('age')}/>

                <select className={'form-control my-3'} id={'positionId'} {...register('position')}>
                    <option value={0}>Lavozimni tanlash . . .</option>
                    {positions.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>

                <select className={'form-control'} id={'degreeId'} {...register('degree')}>
                    <option value={0}>Ilmiy darajani tanlash</option>
                    {degrees.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className={'btn btn-danger'} onClick={toggle}>Chiqish</button>
            <button className={'btn btn-success'} type={'submit'} form={'staffForm'}>Saqlash</button>
        </ModalFooter>
    </Modal>
}

export default connect(state => ({
    positions: state.positionReducer.positions,
    degrees: state.degreeReducer.degrees
}), {addStaff, editStaff})(StaffModal)