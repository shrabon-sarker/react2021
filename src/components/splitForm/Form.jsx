import PropTypes from 'prop-types'

import InputTextComponent from './TextInput'


const Form =(props) => (
    <form onSubmit={props.formChange}>

    <InputTextComponent 
        name='name'
        placeholder='Your name'
        label='Enter Name'
        value={props.values.name}
        onChange={props.handleReactformChange}
    />

    <InputTextComponent 
        name='email'
        placeholder='Your email'
        label='Enter Email'
        value={props.values.email}
        type='email'
        onChange={props.handleReactformChange}
    />
    <InputTextComponent 
        name='password'
        placeholder='**********'
        label='Enter password'
        value={props.values.password}
        type='password'
        onChange={props.handleReactformChange}
    />
    <button className="btn btn-info" type="submit">send form</button>
</form>
)


Form.propTypes = {
values: PropTypes.object.isRequired,
handleReactformChange: PropTypes.func.isRequired,
formChange: PropTypes.func.isRequired
}

export default Form