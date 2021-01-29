import React from "react";
import Table from 'react-bootstrap/Table'

//Reference https://react-bootstrap.github.io/components/table/

function UsersList(props) {

    console.log(props.userResults)
    
    return (
        <Table striped hover className="userTable text-center">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.userResults.map(result => (
                    <tr>
                        <td><img className="employeeImg" alt="employeeImg" src={result.picture.large} /></td>
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

