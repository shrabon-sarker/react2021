import { Component } from 'react';


class ControlledForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
    }

    handleChange =(event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
     
    }

    controlForm = (event) => {
        event.preventDefault();
        //console.dir(event.target)
        console.log(this.state)
        event.target.reset();
        this.setState({name: '', email: '', password: ''})
    }

    render(){

        const {name, email, password} = this.state
        return(
            <div className="container">
                <h2>UncontrolledForm</h2>
                <div>
                    <form onSubmit={this.controlForm}>
                        <input type="text" placeholder="Your Name" name='name' value={name}  className="form-control" onChange={this.handleChange} />
                        <input type="email" placeholder="Your Email" name='email' value={email} className="form-control my-3" onChange={this.handleChange} />
                        <input type="password" placeholder="*************" name='password' value={password} className="form-control my-2" onChange={this.handleChange} />
                        <button className="btn btn-primary" type="submit">submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ControlledForm