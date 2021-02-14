
import React, { Component } from 'react'
import Form from './Form'








export class SlitForm extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleReactformChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formChange =(event)=> {
        event.preventDefault()

        console.log(this.state)
        this.setState({name: '', email:'', password: ''})
    }

    render() {

        //const {name, email, password} = this.state
        return (
            <div className="container">
                <h2>React Form createing</h2>
                <div>
                    <Form
                        values={this.state}
                        formChange={this.formChange}
                        handleReactformChange={this.handleReactformChange}

                     />
                </div>
            </div>
        )
    }
}

export default SlitForm
