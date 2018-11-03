import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonDeleted(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(`mapStateToProps: ${JSON.stringify(state)}`)
    console.log(`mapStateToProps: ${JSON.stringify(state.persons)}`)
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPersonAdded: (name, age) => dispatch({type: actionTypes.PERSON_ADDED, personData: {name: name, age: age}}),
        onPersonDeleted: (id) => dispatch({type: actionTypes.PERSON_DELETED, personId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);