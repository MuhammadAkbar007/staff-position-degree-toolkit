import {useState} from "react";
import MyModal from "./Modal/MyModal";

function Header({title}) {

    const [modal, setModal] = useState(false)

    function toggleModal() {
        setModal(prev => !prev)
    }

    return <div className="row mt-5 align-items-center">
        <div className="col-md-3">
            <input type="text" placeholder={'🔎 nomi bilan qidirish'} className={'form-control rounded-pill'}/>
        </div>
        <div className="col-md-3 offset-2">
            <h1>{title}</h1>
        </div>
        <div className="col-md-4">
            <button className={'btn btn-dark py-3 px-4 float-end'} onClick={() => setModal(true)}>➕ Add</button>
        </div>
        {modal ? <MyModal page={title} isOpen={modal} toggleModal={toggleModal} id={0}/> : ''}
    </div>
}

export default Header