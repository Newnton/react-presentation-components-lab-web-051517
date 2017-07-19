import React from 'react'

export default class SimpleComponent extends React.Component {
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
  }

  render(){
    return (
      <div onClick={(event) => {this.state.mood === 'happy' ? this.setState({mood:'sad'}) : this.setState({mood: 'happy'})}}>
        {this.state.mood}
      </div>
    )
  }
}
