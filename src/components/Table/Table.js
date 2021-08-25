import StaffTable from "./StaffTable";
import PositionTable from "./PositionTable";
import DegreeTable from "./DegreeTable";

function Table({page}) {
    return <div>
        <div className="row mt-5 text-center">
            {page === 'staff' ? <StaffTable/> : page === 'position' ? <PositionTable/> : <DegreeTable/>}
        </div>
    </div>
}

export default Table