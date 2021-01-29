import React from "react";
import Header from "./Header";
import UsersList from "./UsersList"
import API from "../utils/API";
import FuzzySearch from "fuzzy-search";


class Main extends React.Component {
    state = {
        result: [],
        search: "",
        refinedResult: [],
        rememberedResults: []
    }

    //When the component mounts, get a list of 20 random employees
    componentDidMount() {
        API.getUsers()
        .then(res => {
            this.setState({ result: res.data.results });
            this.setState({ rememberedResults: res.data.results })
            // console.log('this.state.result: ', this.state.result);
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {

        const searcher = new FuzzySearch(this.state.rememberedResults, ['name.first', 'name.last'], {caseSensitive: false,})

        const refinedResult = searcher.search(event.target.value);

        console.log('SEARCH RESULTS: ', refinedResult);

        //Now set the state of search to these results as well
        this.setState({ search: refinedResult });
        // Set the state of result to the refined results to show only those options
        this.setState({ result: refinedResult})
    }

    render() {
        return(
            <div>
            <Header
                // userResults={this.state.result}
                handleInputChange={this.handleInputChange}
                // remembered={this.state.rememberedResults}
            />
            <UsersList
                userResults={this.state.result}
            />
            </div>
        )
    }
}

export default Main;