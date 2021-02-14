import React, { Component } from 'react'

export class ReactForm extends Component {

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

        const {name, email, password} = this.state
        return (
            <div className="container">
                <h2>React Form createing</h2>
                <div>
                    <form onSubmit={this.formChange}>
                        <input type="text" placeholder="Your Name" name='name' value={name} className="form-control" onChange={this.handleReactformChange} />
                        <input onChange={this.handleReactformChange} type="email" placeholder="Your Email" name='email' value={email} className="form-control my-3" />
                        <input onChange={this.handleReactformChange} type="password" placeholder="*********" name='password' value={password} className="form-control my-3" />
                        <button className="btn btn-info" type="submit">send form</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReactForm
