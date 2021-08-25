import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {editDegree, addDegree} from "../../store/degree";

function DegreeModal({isOpen, toggle, id, addDegree, editDegree}) {

    const {register, handleSubmit} = useForm()

    function onSubmit(data) {
        if (id === 0) {
            addDegree({
                name: data.name,
                bonus: data.bonus
            })
        } else {
            editDegree({
                id: id,
                name: data.name,
                bonus: data.bonus
            })
        }
        toggle()
    }

    return <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Ilmiy daraja Qo'shish | Tahrirlash</ModalHeader>

        <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)} id={'degreeForm'}>
                <input type="text" className={'form-control'} placeholder={'Nomi'} {...register('name')}/>

                <input type="text" className={'form-control my-3'} placeholder={'Bonus'} {...register('bonus')}/>
            </form>
        </ModalBody>
        <ModalFooter>
            <button className={'btn btn-danger'} onClick={toggle}>Chiqish</button>
            <button className={'btn btn-success'} type={'submit'} form={'degreeForm'}>Saqlash</button>
        </ModalFooter>
    </Modal>
}

export default connect(null, {addDegree, editDegree})(DegreeModal)