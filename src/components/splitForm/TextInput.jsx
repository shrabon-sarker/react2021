import PropTypes from 'prop-types'


const InputTextComponent = (props) => (
    <div className="from-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            type={props.type} 
            placeholder={props.placeholder}
            name={props.name} 
            id={props.name}
            value={props.value} 
            className="form-control mb-3" 
            onChange={props.onChange}
         />

    </div>
)

InputTextComponent.propTypes = {
    name: PropTypes.string.isRequired,
    lable: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired

}

InputTextComponent.defaultProps = {
    type: 'text',
    lable: '',
    placeholder: ''
}

export default InputTextComponent