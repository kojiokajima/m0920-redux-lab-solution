import React, { Component } from 'react'
import { connect } from 'react-redux'

import Person from '../components/Person/Person'
import AddPerson from '../components/AddPerson/AddPerson'
import * as actionType from '../redux/action'
class Persons extends Component {

  render() {
    console.log('I am being called')
    return (
      <div>
        <AddPerson
          personAdded={() => this.props.addPerson()}
        />
        {this.props.prs.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.deletePerson(person.id)}
          />
        ))}
      </div>
    )
  }
}

//selectors
const mapStateToProps = (state) => {
  return {
    prs: state.people.persons,
  }
}


//dispatch
const mapDispatchToProps = (dispatch) => {
  return{
    addPerson: () => dispatch({ type: actionType.addPerson }),
    deletePerson: (id) => dispatch({ type: actionType.deletePerson, payload: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
