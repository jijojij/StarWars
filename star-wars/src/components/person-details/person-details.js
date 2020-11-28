import React, { Component } from 'react';

import './person-details.css';
import SwapiService         from "../../services/swapi-service";
import Spinner              from "../spinner";

export default class PersonDetails extends Component {
    swapiService = new SwapiService();
    state = {
        person: null
    };

    componentDidMount(){
        this.updatePerson();
    }

    componentDidUpdate(prevProps){
        if (this.props.personId !== prevProps.personId){
            this.updatePerson();
        }
    }

    updatePerson(){
        this.setState({ person: null });
        const { personId } = this.props;
        if (!personId){
            return;
        }
        this.swapiService.getPerson(personId)
            .then(person => {
                this.setState({ person });
                console.log(person);
            });
    }

    render(){
        if (!this.props.personId){
            return (<span>Select person from list</span>)
        }

        const content = this.state.person ? this.getDetailPerson() : <Spinner/>;
        return (
            <div className="person-details card">
                {content}
            </div>
        )
    }

    getDetailPerson(){
        const {
            id, name, gender,
            birthYear, eyeColor
        } = this.state.person;

        return (<React.Fragment>
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>)
    }
}
