import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/home";
import UserCrud from "../components/user/userCrud";

export default props => 
    <Routes>
        <Route exact path="/" element={<Home />} /> {/* Sempre que for para '/', irá renderizar home */}
        <Route path="/users" element={<UserCrud />} /> 
        <Route path="*" element={<Home />}/>     {/* */}
    </Routes>




// onde o professor importar/usar o Switch, você importará/utilizará o Routes