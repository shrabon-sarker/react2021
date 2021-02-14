import PropTypes from 'prop-types'

const InputElement = (props) => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.lable}</label>
        <input 
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            id={props.name}
            value={props.value}
            className="form-control mb-3"
            onChange={props.onChange}
        />
    </div>
)

InputElement.propTypes = {
    name: PropTypes.string.isRequired,
    lable: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
}

InputElement.defaultProps = {
    type:'text',
    lable: '',
    placeholder: ''
}

export default InputElement
