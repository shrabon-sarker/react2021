import React, { Component } from 'react'
import SiginUpForms from './siginUpForms'
import Classes from './siginup.module.css'
import PropTypes from 'prop-types'

const dataInfo = {
    name: '',
    email: '',
    password: '',
    birthday: '',
    gender: '',
}


export class SiginUp extends Component {

    state = {
        values: dataInfo,
        agrrement: false,
        errors: {}
    }

    handleChange = (event)=> {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
            
        })
    }

    handleAgrrment = (event) => {
        this.setState({
            agrrement: event.target.checked
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const {errors, isValid} = this.validate()

        if(isValid) {
            //console.log(this.state.values);
            this.props.createUsers(this.state.values)
            event.target.reset();
            this.setState({values: dataInfo, agrrement: false, errors: {}})
        }else {
            this.setState({errors})
        }
    }

    validate = () => {
        const errors = {}
        const {values:{name,email,password,gender,birthday}} = this.state

        if(!name) {
            errors.name = 'Please provide Your name'
        }

        if(!email) {
            errors.email = 'Please provide your email'
        }

        if(!password) {
            errors.password = 'Please Provide your password'
        }

        if(!gender) {
            errors.gender = 'please select your gender'
        }
        if(!birthday) {
            errors.birthday = 'Please input date'
        }
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }

    render() {
        return (
            <div>
                <h2 className={Classes.header__siginup}>This is a contact forms</h2>
                <div className="container">
                    <SiginUpForms 
                        values={this.state.values}
                        agrrement={this.state.agrrement}
                        errors={this.state.errors}
                        handleAgrrment={this.handleAgrrment}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                     />
                </div>
                
            </div>
        )
    }
}


SiginUp.propTypes = {
    createUsers: PropTypes.func.isRequired
}
export default SiginUp
