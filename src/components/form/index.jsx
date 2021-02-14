import React, { Component } from 'react'
import Form from './FormItem'






export class Formarea extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event)=> {
        event.preventDefault()

        console.log(this.state)
        this.setState({
           name: '',
           email: '',
           password: ''
        })
    }


    render() {

        ///const {name, email, password} = this.state
        return (
            <div className="container">
                <h2>React form createing</h2>
                <div>
                    <Form
                        values={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        

                     />
                </div>
            </div>
        )
    }
}

export default Formarea
