import React, { Component } from 'react'
import css from './counter.module.css'

export default class Steps extends Component {
  render() {
    return (
      <div className={css.divSteps}><span className={css.counterValue}>{this.props.currentStep}</span></div>
    )
  }
}
