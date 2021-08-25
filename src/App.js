import {Link, Route, Switch} from "react-router-dom";
import Staff from "./pages/Staff";
import Position from "./pages/Position";
import Degree from "./pages/Degree";

function App() {
    return (
        <div className="container mt-5">
            <h1 className={'text-warning'}>Quyidagi bo'limlardan birini tanlang 👇 </h1>
            <Link to={'/staff'}>
                <button className={'btn btn-dark'}>Xodimlar bo'limi</button>
            </Link>
            <Link to={'/position'}>
                <button className={'btn btn-dark mx-5'}>Lavozimlar bo'limi</button>
            </Link>
            <Link to={'/degree'}>
                <button className={'btn btn-dark'}>Ilmiy darajalar bo'limi</button>
            </Link>

            <Switch>
                <Route path={'/staff'} component={Staff}/>
                <Route path={'/position'} component={Position}/>
                <Route path={'/degree'} component={Degree}/>
            </Switch>
        </div>
    );
}

export default App;
