import { Component } from 'react';


class UncontrolledForm extends Component {

    uncontrolForm = (event) => {
        event.preventDefault();
        //console.dir(event.target)
        const data = {}
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;

        console.log(data)
        event.target.reset();
    }

    render(){
        return(
            <div className="container">
                <h2>UncontrolledForm</h2>
                <div>
                    <form onSubmit={this.uncontrolForm}>
                        <input type="text" placeholder="Your Name" name='name' className="form-control" />
                        <input type="email" placeholder="Your Email" name='email' className="form-control my-3" />
                        <input type="password" placeholder="*************" name='password' className="form-control my-2" />
                        <button className="btn btn-primary" type="submit">submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UncontrolledForm