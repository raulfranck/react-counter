import React, { Component } from 'react'

export default class Band extends Component {
  constructor() {
    super()

    this.state = {
      bandName: 'Rush',
      bandMembers: [
        {
          id: 1,
          name: 'Neil Peart',
          instrument: 'Drum',
        },
        {
          id: 1,
          name: 'Alex Lifeson',
          instrument: 'Guitar',
        },
        {
          id: 3,
          name: 'Geddy Lee',
          instrument: 'Baixo',
        }
      ]
    }
  }
  render() {
    const { bandName, bandMembers } = this.state
    return (
      <div>
        <h4>{bandName}</h4>

        {bandMembers.map(({ id, name, instrument }) => {
          return (
            <li key={id}>
              {name} - {instrument}
            </li>
          );
        })}
      </div>
    )
  }
}
