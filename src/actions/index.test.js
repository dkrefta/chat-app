import {addMessage, addUser} from '../actions';
import * as types from '../constants/ActionsTypes';


describe('adding a message', () => {
  it('should create an action to add a message with id 0', () => {
    const message = 'Something'
    const action = {
      type: types.ADD_MESSAGE,
      message: message,
      author: 'Me',
      id: 0
    }
    expect(addMessage(message)).toEqual(action)
  })
})

describe('adding a second message', () => {
  it('should create an action to add a message with id 1', () => {
    const message = 'Something'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 0
    }
    expect(adduser(user)).toEqual(action)
  })
})

describe ('adding a user', () => {
  it('should create an action to add a user with id 0', () => {
    const user = 'IGO'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 0
    }
    expect(adduser(user)).toEqual(action)
  })
})
describe ('adding a user', () => {
  it('should create an action to add a user with id 1', () => {
    const user = 'JUAUM'
    const action = {
      type: types.ADD_USER,
      name: user,
      id: 1
    }
    expect(adduser(user)).toEqual(action)
  })
})