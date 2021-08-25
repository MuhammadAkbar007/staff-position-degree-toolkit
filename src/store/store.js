import {configureStore} from "@reduxjs/toolkit";
import staffReducer from "./staff";
import positionReducer from "./position";
import degreeReducer from "./degree";

export default configureStore({reducer: {staffReducer, degreeReducer, positionReducer}})