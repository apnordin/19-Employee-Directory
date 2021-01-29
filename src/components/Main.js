import React from "react";
import Header from "./Header";
import UsersList from "./UsersList"
import API from "../utils/API";


class Main extends React.Component {
    state = {
        result: [],
        search: ''
    }

   

    render() {
        return(
            <div>
            <Header />
            <UsersList />
            </div>
        )
    }
}

export default Main;