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
        console.log('!!! NEW INPUT CHANGE')
        console.log('this.state.result: ', this.state.result)
        console.log('this.state.rememberedresults: ', this.state.rememberedResults)
        // Reset the results to rememberedResults, as a "checkpoint" so you don't lose everything when you start searching. If this is your first time typing, it will be empty, which is fine
    
        const searcher = new FuzzySearch(this.state.result, ['name.first', 'name.last'], {caseSensitive: false,})

        const refinedResult = searcher.search(event.target.value);

        console.log('SEARCH RESULTS: ', refinedResult);

        //Now set the state of search to these results as well
        this.setState({ search: refinedResult });
        // Set the state of result to the refined results to show only those options. But now if you backspace, result only includes refinedResult... which is why we have saved remembedResult!
        this.setState({ result: refinedResult})

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