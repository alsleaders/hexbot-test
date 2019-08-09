import React, { Component } from 'react'
import axios from 'axios'

class HelloWorld extends Component {
  state = {
    boxColor: '',
    borderColor: ''
  }

  componentDidMount() {
    axios.get('https://api.noopschallenge.com/hexbot?count=2').then(resp => {
      console.log(resp.data)
      console.log(resp.data.colors)
      console.log(resp.data.colors[0].value)
      this.setState({
        boxColor: resp.data.colors[0].value,
        borderColor: resp.data.colors[1].value
      })
    })
  }

  render() {
    return (
      <>
        <section
          className="hex-color"
          style={{ background: this.state.borderColor }}
        >
          <div className="boxShape" style={{ background: this.state.boxColor }}>
            <p>
              This is {this.state.boxColor} <br /> with a{' '}
              {this.state.borderColor} border
            </p>
          </div>
        </section>
      </>
    )
  }
}

export default HelloWorld
