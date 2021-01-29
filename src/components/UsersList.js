import React from "react";
import Table from 'react-bootstrap/Table'

//Reference https://react-bootstrap.github.io/components/table/

function UsersList(props) {

    const employee = props.userResults[0];
    console.log('employee: ', employee);
    
    return (
        <Table striped bordered hover className="userTable">
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
                <tr>
                    <td><img className="employeeImg" alt="employeeimg" src={employee.picture.large} /></td>
                    <td>{employee.name.first} {employee.name.last}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{employee.dob.date.slice(0,10)}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default UsersList;

