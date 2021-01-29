import React from "react";
import Header from "./Header";
import UsersList from "./UsersList"
import API from "../utils/API";


class Main extends React.Component {
    state = {
        result: [],
        search: "",
    }

    //When the component mounts, get a list of 20 random employees
    componentDidMount() {
        API.getUsers()
        .then(res => {
            console.log('response: ', res);
            this.setState({ result: res.data.results });
            console.log('this.state.result: ', this.state.result);
        })
        .catch(err => console.log(err));
    }

    // handleInputChange = event => {
    //     this.setState({ search: event.target });
    //     console.log('event.target: ', event.target)
    // }

    render() {
        return(
            <div>
            <Header userResults={this.state.result}/>
            <UsersList userResults={this.state.result} />
            </div>
        )
    }
}

export default Main;