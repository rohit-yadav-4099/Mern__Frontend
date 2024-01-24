import { configureStore } from "@reduxjs/toolkit";
import AddMyCourse from "./Slice"
export default configureStore({
  reducer  : {
    Course: AddMyCourse,
  },
});