import React from "react";
import Table from 'react-bootstrap/Table'
const downCarrot = require("./carrotDown.png");
const upCarrot = require("./carrotUp.png")

//Reference https://react-bootstrap.github.io/components/table/

function UsersList(props) {

    console.log(props.sortState);
    
    if (props.sortState === "asc") {
        props.userResults.sort(function(a,b){
            var x = a.name.last.toLowerCase();
            var y = b.name.last.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })
    } if (props.sortState === "desc") {
        props.userResults.sort(function(a,b) {
            var x = a.name.last.toLowerCase();
            var y = b.name.last.toLowerCase();
            if (x > y) {return -1;}
            if (x < y) {return 1;}
            return 0;
        })
    }

    return (
        <div>
        
        <Table striped hover className="userTable text-center">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name
                        <input type="image" src={upCarrot.default} alt="up" className="btn btn-light btn-sm carrot" onClick={props.handleSortAsc}>
                        </input>
                        <input type="image" src={downCarrot.default} alt="down" className="btn btn-light btn-sm carrot" onClick={props.handleSortDesc}>
                        </input>
                    </th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.userResults.map(result => (
                    <tr key = {result.login.md5}>
                        <td><img className  ="employeeImg" alt="employeeImg" src={result.picture.large} /></td>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date.slice(0,10)}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </div>
    );
}

export default UsersList;

