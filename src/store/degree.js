import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'degree',
    initialState: {
        degrees: [
            {id: 1, name: 'Junior', bonus: 10},
            {id: 2, name: 'Middle', bonus: 15},
            {id: 3, name: 'Senior', bonus: 30}
        ]
    },
    reducers: {
        addDegree: (state, action) => {
            state.degrees.push({id: state.degrees.length + 1, name: action.payload.name, bonus: action.payload.bonus})
        },
        editDegree: (state, action) => {
            state.degrees.map(item => {
                if (item.id === action.payload.id) {
                    item.name = action.payload.name
                    item.bonus = action.payload.bonus
                }
                return item
            })
        },
        deleteDegree: (state, action) => {
            state.degrees.map((item, index) => {
                if (item.id === action.payload) {
                    state.degrees.splice(index, 1)
                }
                return item
            })
        },
        searchDegree: (state, action) => {
            state.degrees.filter(item => item.name === action.payload)
        }
    }
})

export const {addDegree, editDegree, deleteDegree, searchDegree} = slice.actions
export default slice.reducer