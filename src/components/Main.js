import React from "react";
import Header from "./Header";
import UsersList from "./UsersList"
import API from "../utils/API";
import FuzzySearch from "fuzzy-search";


class Main extends React.Component {
    state = {
        result: [],
        search: "",
    }

    //When the component mounts, get a list of 20 random employees
    componentDidMount() {
        API.getUsers()
        .then(res => {
            this.setState({ result: res.data.results });
            // console.log('this.state.result: ', this.state.result);
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {

        const employees = this.state.result;

        // console.log('EMPLOYEES: ', employees);

        const searcher = new FuzzySearch(employees, ['name.first', 'name.last'], {caseSensitive: false,})

        const result = searcher.search(event.target.value);

        console.log('SEARCH RESULTS: ', result);

        console.log('is this being called???')
        this.setState({ search: event.target.value });
        console.log('event.target !!!!!!: ', event.target.value)
    }

    render() {
        return(
            <div>
            <Header
                userResults={this.state.result}
                handleInputChange={this.handleInputChange}
            />
            <UsersList
                userResults={this.state.result}
            />
            </div>
        )
    }
}

export default Main;