import React, { Component } from 'react'
import css from './counter.module.css'

export default class DecrementButton extends Component {
  handleButtonClick = () => {
    this.props.onDecrement('-')
  }

  render() {
    return (
      <div>
        <button
          onClick={this.handleButtonClick}
          className={css.buttonMenos}
        >
          -
        </button>
      </div>
    )
  }
}
