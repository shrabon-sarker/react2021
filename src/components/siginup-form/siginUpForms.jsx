import React from 'react'
import PropTypes from 'prop-types'
import SiginUpElement from './SiginUpElement'


function SiginUpForms({values, handleChange, handleSubmit, handleAgrrment, agrrement, errors, gender}) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <SiginUpElement
                    name='name'
                    placeholder='Your name'
                    lable= 'Enter Name:'
                    value={values.name}
                    error={errors.name}
                    onChange={handleChange}
                 />
                 <SiginUpElement
                    name='email'
                    type='email'
                    placeholder='Your email'
                    lable= 'Enter email:'
                    value={values.email}
                    error={errors.email}
                    onChange={handleChange}
                 />
                 <SiginUpElement
                    name='password'
                    type='password'
                    placeholder='Your password'
                    lable= 'Enter password:'
                    value={values.password}
                    error={errors.password}
                    onChange={handleChange}
                 />
                 <SiginUpElement
                    name='birthday'
                    type='date'
                    lable= 'Date:'
                    value={values.birthday}
                    error={errors.birthday}
                    onChange={handleChange}
                 />

                 <div className="form-group">
                     <label className="mr-4">
                         <input className="mr-2" type="radio" name='gender' value='male' onChange={handleChange} />
                         Male
                     </label>
                     <label className="mr-4">
                         <input className="mr-2"  type="radio" name='gender' value='female' onChange={handleChange} />
                         Female
                     </label>
                     <label className="mr-4">
                         <input className="mr-2" type="radio" name='gender' value='Others' onChange={handleChange} />
                         Others
                     </label>
                     {errors.gender && <div className='invalid-feedback'>{gender}</div>}
                 </div>
                 <div>
                     <label>
                         <input className="mr-2" type="checkbox" name='agrrment' checked={agrrement} onChange= {handleAgrrment} />
                         This is a agrre for any requirement.
                     </label>
                 </div>
                 <button className="btn btn-info " type="submit" disabled={!agrrement} >Create User</button>
            </form>
        </div>
    )
}

SiginUpForms.propTypes = {
    values: PropTypes.object.isRequired,
    agrrement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgrrment: PropTypes.func.isRequired
}

export default SiginUpForms
