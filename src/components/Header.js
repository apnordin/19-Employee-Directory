import React from "react";

function Header() {
    return(
    <div class="bg-light">
        <div class="text-center header mb-2">
            <h1 class="display-4">
                Employee Directory
            </h1>
            <p class="lead">
                Click on carrots to filter by heading or use the search box to narrow your results.
            </p>
        </div>
        <div class="input-group">
            <div class="form-outline mb-2 w-15 mx-auto">
                <input type="search" class="form-control" placeholder="Search" />
            </div>
        </div>
    </div>
    )
}

export default Header;