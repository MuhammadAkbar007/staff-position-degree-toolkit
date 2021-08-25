import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {editPosition, addPosition} from "../../store/position";

function PositionModal({isOpen, toggle, id, addPosition, editPosition}) {

    const {register, handleSubmit} = useForm()

    function onSubmit(data) {
        if (id === 0) {
            addPosition({
                name: data.name,
                salary: data.salary
            })
        } else {
            editPosition({
                id: id,
                name: data.name,
                salary: data.salary
            })
        }
        toggle()
    }

    return <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Lavozimlar Qo'shish | Tahrirlash</ModalHeader>

        <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} id={'positionForm'}>
                <input type="text" className={'form-control'} placeholder={'Nomi'} {...register('name')}/>

                <input type="text" className={'form-control my-3'} placeholder={'Maosh'} {...register('salary')}/>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className={'btn btn-danger'} onClick={toggle}>Chiqish</button>
            <button className={'btn btn-success'} type={'submit'} form={'positionForm'}>Saqlash</button>
        </ModalFooter>
    </Modal>
}

export default connect(null, {addPosition, editPosition})(PositionModal)