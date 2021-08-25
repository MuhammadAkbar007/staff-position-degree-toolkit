import StaffModal from "./StaffModal";
import PositionModal from "./PositionModal";
import DegreeModal from "./DegreeModal";

function MyModal({page, isOpen, toggleModal, id}) {

    return <div>
        {
            page === 'Xodimlar' ? <StaffModal isOpen={isOpen} toggle={toggleModal} id={id}/>
                : page === 'Lavozimlar' ? <PositionModal isOpen={isOpen} toggle={toggleModal} id={id}/>
                    : <DegreeModal isOpen={isOpen} toggle={toggleModal} id={id}/>
        }
    </div>
}

export default MyModal