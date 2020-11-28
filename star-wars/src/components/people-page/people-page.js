import React, { Component } from 'react'
import ItemList             from "../item-list";
import PersonDetails        from "../person-details";
import ErrorButton          from "../error-button";
import ErrorIndicator       from "../error-indicator";

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 3,
        hasError: false
    };

    componentDidCatch(error, errorInfo){
        this.setState(x => {
            return { ...x, hasError: true };
        });
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    }

    render(){
        if (this.state.hasError){
            return <ErrorIndicator/>
        }
        return (
            <div className="row mb3">
                <div className="col-md-1">
                    <ErrorButton/>
                </div>
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-5">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}