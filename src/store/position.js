import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'position',
    initialState: {
        positions: [
            {id: 1, name: 'Team Leader', salary: 2000},
            {id: 2, name: 'Manager', salary: 1500},
            {id: 3, name: 'Developer', salary: 1000}
        ]
    },
    reducers: {
        addPosition: (state, action) => {
            state.positions.push({
                id: state.positions.length + 1,
                name: action.payload.name,
                salary: action.payload.salary
            })
        },
        editPosition: (state, action) => {
            state.positions.map(item => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name
                    item.salary = action.payload.salary
                }
                return item
            })
        },
        deletePosition: (state, action) => {
            state.positions.map((item, index) => {
                if (item.id === action.payload) {
                    state.positions.splice(index, 1)
                }
                return item
            })
        },
        searchPosition: (state, action) => {
            state.positions.filter(item => item.name === action.payload)
        }
    }
})

export const {addPosition, editPosition, deletePosition, searchPosition} = slice.actions
export default slice.reducer