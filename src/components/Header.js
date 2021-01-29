import React from "react";

function Header(props) {
 
    return(
    <div className="bg-light">
        <div className="text-center header mb-2">
            <h1 className="display-4 mb-4">
                Employee Directory
            </h1>
            <p className="lead mt-3 mb-1">
                Click on the arrows to sort by last name. Up sorts alphabetically, down sorts reverse alphabetically.
            </p>
            <p className="lead"
                >Use the search box to find employees by name.
            </p>
        </div>
        <div className="input-group">
            <div className="form-outline mb-2 w-15 mx-auto">
                <input
                value={props.search}
                onChange={props.handleInputChange}
                type="search"
                className="form-control"
                placeholder="Search"
                id="employeeName"
                />
               
            </div>
        </div>
    </div>
    )
}


export default Header;