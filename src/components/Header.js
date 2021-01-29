import React from "react";
import FuzzySearch from "fuzzy-search";



function Header(props) {

    const employees = props.userResults;
    console.log('EMPLOYEES: ', employees);

    const searcher = new FuzzySearch(employees, ['name.first', 'name.last'], {caseSensitive: false,
    })

    const result = searcher.search('a');

    console.log('SEARCH RESULTS: ', result);

    return(
    <div className="bg-light">
        <div className="text-center header mb-2">
            <h1 className="display-4">
                Employee Directory
            </h1>
            <p className="lead">
                Click on carrots to filter by heading or use the search box to narrow your results.
            </p>
        </div>
        <div className="input-group">
            <div className="form-outline mb-2 w-15 mx-auto">
                <input type="search" className="form-control" placeholder="Search" />
            </div>
        </div>
    </div>
    )
}

export default Header;