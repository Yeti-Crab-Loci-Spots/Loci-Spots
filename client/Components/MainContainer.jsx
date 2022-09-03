import React, { useState } from "react";
import DropDownList from "./DropDownList";

const MainContainer = () => {
    //main container will store the state of the drop down list and the state of the restaurant container which contains a list of the restaurants
  return (
    <div>
    <div>MainContainer</div>
      <div className="citySearch">
        <DropDownList />
    </div>
    <div className="restaurantContainer"></div>
    </div>

  )
}

export default MainContainer