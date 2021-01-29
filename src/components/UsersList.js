import React from "react";
import Table from 'react-bootstrap/Table'

//Reference https://react-bootstrap.github.io/components/table/

function UsersList(props) {

    props.userResults.sort(function(a,b){
        var x = a.name.last.toLowerCase();
        var y = b.name.last.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    })

    return (
        <Table striped hover className="userTable text-center">
            <thead>
                <tr>
                    <th>Image</th>
                    <th><button variant="primary">Down</button>Name<button variant="primary">Up</button></th>
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
    );
}

export default UsersList;

