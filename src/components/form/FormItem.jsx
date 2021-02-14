import PropTypes from 'prop-types'
import InputElement from './inputElement'

const Form =(props) => (
    <form onSubmit={props.handleSubmit}>

        <InputElement
            name='name'
            placeholder='Your name'
            lable="Enter Name"
            value={props.values.name}
            onChange={props.handleChange}
        />

        <InputElement
            name='email'
            type='email'
            placeholder=' email'
            lable="Email Address'"
            value={props.values.email}
            onChange={props.handleChange}
        />
        <InputElement
            name='password'
            type= 'password'
            placeholder='**********'
            lable='Your password'
            value={props.values.password}
            onChange={props.handleChange}
        />
        <button type="submit" className="btn btn-info">Send Date</button>

    </form>
)

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form