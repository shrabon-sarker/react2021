import React, {Component} from 'react';

// css import
import Classes from './handle.module.css';

class Handling extends Component {
    state = {
        name: ''
    }

    // handleButtonClick = (event) => {
    //     console.log(event)
    //     console.log("this is a  click event")
    // }

    inputHandleChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            name: event.target.value
        })
    }

    // newHandle =(event) => {
    //     console.log(event.target.value)
    // }

    handleFocus=(event)=> {
        console.log('this is a focus')
    }

    handleblur =(event) => {
        if(!this.state.name){
            alert('Enter the value.')
        }
        console.log('this is a blur ready')
    }

    render(){
        return(
            <div className={Classes.container}>
                <h2>this  is a heandlers </h2>
                <button onClick={this.handleButtonClick} type='button' className={Classes.btn__event}>Event click</button>
                <div>
                    <input onFocus={this.handleFocus} onBlur={this.handleblur} onChange={this.inputHandleChange} className={Classes.input__feild}  type="text" value={this.state.name} placeholder='Enter some text' />
                    
                </div>

                {this.state.name && <h3>The name is :  {this.state.name}</h3>}
                
                
            </div>
        ) 
    }
}

export default Handling