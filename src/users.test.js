import users from './users';;
import * as types from '../constants/ActionTypes'

descripe('User Reducer', () => {
  it('should return the initial state, empty', () => {
    expect(user(undefined, {})).toEqual([])
  })

  it('Should handle ADD_USER and store every user', () => {
    expect(
      users([], {
        type: types.ADD_USER,
        name: 'IGO'
      })
    ).toEqual([
      {
        name: 'IGO'
      }
    ])

    expect (
      users(
        [ 
          {
            name: 'JOAUM',
          }
        ],
        {
          type: types.ADD_USER,
          name: 'JOAUM'
        }
      )
    ).toEqual([
      {
        name: 'JOAUM'
      },
      {
        name: 'JOAUM'
      }
    ])
  })
})