import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        
      }
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="name" value = {this.state.name} placeholder="Name" onChange={this.handleChange} />
                    <input type="Email" name="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
                    <select placeholder="Web Developer">
                        <option value="">Web Developer</option>
                        <option value="">Email</option>
                        <option value="">Html</option>
                        <option value="">Css</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Form;