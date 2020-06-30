import React, { Component } from 'react'

import css from './counter.module.css'

import DecrementButton from './DecrementButton'
import IncrementButton from './IncrementButton'
import Value from './Value'
import Steps from './Steps'

export default class Counter extends Component {
  handleButtonClick = (clickType) => {
    this.props.onCount(clickType);
  }

  render() {
    const { countValue, currentStep } = this.props;
    return (
      <div className={css.container}>

        <DecrementButton onDecrement={this.handleButtonClick} />

        <Value value={countValue} />

        <IncrementButton onIncrement={this.handleButtonClick} />

        <Steps currentStep={currentStep} />
      </div>
    )
  }
}
