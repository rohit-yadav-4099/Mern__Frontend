import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './MyCouse.css';

const AddMyCourse = () => {
    // const dispatch = useDispatch();
    // const data = useSelector((state) => state.Course.course);

    return (
        <>
            <div className="MyDashboard">
                <div className="sidebar">
                    sidebar
                </div>

                <div className="Mycourse">
                    <div className="mycourse-heading">
                        <span>Courses()</span>

                    </div>
                </div>
            </div>
        </>
    );
};
export default AddMyCourse;