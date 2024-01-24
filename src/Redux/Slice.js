import { createSlice } from "@reduxjs/toolkit";

const AddMyCourse = createSlice({
    name: "Course",
    initialState: {
        course: [],
    },
    reducers: {
        addtocourse: (state, action) => {
            const existingItem = state.course.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {

                existingItem.quantity += 1;
                // existingItem.total = existingItem.price * existingItem.quantity;
            } else {

                state.course.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },

    },
});
export default AddMyCourse.reducer;
export const { addtocourse} =AddMyCourse.actions;