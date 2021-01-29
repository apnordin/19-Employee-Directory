import React from "react";
import Table from 'react-bootstrap/Table'

function UsersList(props, bordered) {

    //Reference https://react-bootstrap.github.io/components/table/

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
                <td>placeholder</td>
                <td>Test Name</td>
                <td>919-555-5555</td>
                <td>test@gmail.com</td>
                <td>08-01-1992</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default UsersList;

