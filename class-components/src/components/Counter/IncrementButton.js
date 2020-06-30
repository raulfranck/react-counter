import React, { Component } from 'react'
import css from './counter.module.css'

export default class IncrementButton extends Component {
  handleButtonClick = () => {
    this.props.onIncrement('+')
  }

  render() {

    console.log(this.props)
    return (

      < div >
        <button
          onClick={this.handleButtonClick}
          className={css.buttonMais}
        >
          +
        </button>
      </div >
    )
  }
}
