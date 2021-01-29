import React from "react";
import Header from "./Header";
import UsersList from "./UsersList"
import API from "../utils/API";


class Main extends React.Component {
    state = {
        result: [],
        search: ''
    }

    //When the component mounts, get a list of 20 random employees
    componentDidMount() {
        API.getUsers()
        .then(res => {
            this.setState({ result: res.data.results });
            console.log(this.state.result);
        })
        .catch(err => console.log(err));
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