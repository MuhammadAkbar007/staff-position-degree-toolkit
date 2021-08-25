import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'staff',
    initialState: {
        staff: [
            {id: 1, name: 'Mark', lastName: 'Otto', age: 21, positionId: 1, degreeId: 3},
            {id: 2, name: 'Jacob', lastName: 'Thorton', age: 33, positionId: 3, degreeId: 2},
            {id: 3, name: 'Larry', lastName: 'Bird', age: 45, positionId: 2, degreeId: 1}
        ]
    },
    reducers: {
        addStaff: (state, action) => {
            state.staff.push({
                id: state.staff.length + 1,
                name: action.payload.name,
                lastName: action.payload.lastName,
                age: action.payload.age,
                positionId: action.payload.positionId,
                degreeId: action.payload.degreeId
            })
        },
        editStaff: (state, action) => {
            state.staff.map(item => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name
                    item.lastName = action.payload.lastName
                    item.age = action.payload.age
                    item.positionId = action.payload.positionId
                    item.degreeId = action.payload.degreeId
                }
                return item
            })
        },
        deleteStaff: (state, action) => {
            state.staff.map((item, index) => {
                if (item.id === action.payload) {
                    state.staff.splice(index, 1)
                }
                return item
            })
        },
        searchStaff: (state, action) => {
            state.staff.filter(item => item.name === action.payload)
        }
    }
})

export const {addStaff, editStaff, deleteStaff, searchStaff} = slice.actions

export default slice.reducer