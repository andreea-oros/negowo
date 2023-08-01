import React, {memo} from 'react';
import {Routes, Route} from "react-router-dom";
import {Homepage} from "../Homepage/Homepage";
export const PageRouter = memo(props => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    )
})