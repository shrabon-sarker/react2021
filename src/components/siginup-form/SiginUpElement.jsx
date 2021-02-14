import React from 'react'
import PropTypes from 'prop-types'

const SiginUpElement = ({name, lable, type, placeholder, value, onChange,error}) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{lable}</label>
            <input 
                className={error ? 'form-control mb-3 is-invalid' : 'form-control mb-3'}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}

            />
            {error && <div className='invalid-feedback'>{error}</div>}
        </div>
    )
}

SiginUpElement.propTypes = {
    name: PropTypes.string.isRequired,
    lable: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

SiginUpElement.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}

export default SiginUpElement
