import { v4 as uuidv4 } from 'uuid';
import * as actionType from '../redux/action'


const initialState = {
    persons: []
};

const personReducer = (state = initialState, action) => {

  // console.log('--------------------------')
  // console.log('STATE IS: ', state)
  // console.log('--------------------------')


    switch(action.type){
      case actionType.addPerson:
        const newPerson = {
          id: uuidv4(),
          name: 'Max',
          age: Math.floor(Math.random() * 40)
        }
        return{
          ...state,
          persons: [...state.persons, newPerson]
        }
      case actionType.deletePerson:
        console.log(action.payload)
        return{                                         
          ...state,
          persons: state.persons.filter((person) => person.id !== action.payload)
        }
      default:
        return state
    }
  };

export default personReducer;