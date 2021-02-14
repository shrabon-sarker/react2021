import React, { Component } from 'react';


class Inputs extends Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        agrre: false,
        skills: [],
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    checkboxhandle =(event) => {
        this.setState({
            agrre: event.target.checked
        })
    }

    handleSkillChange = (event) => {
        if(event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        }else {
            const skills = this.state.skills.filter((skill)=> skill !== event.target.value)
            this.setState({skills})
        }
          
    }
   

    render(){

        const {name, bio, birthday, country, agrre, skills} = this.state
        return(
            <div className="container">
                <h2>this is a input and forms createing</h2>
                <div className="w-75">
                    <form action="">
                        <input onChange={this.handleChange} value={name} className="form-control my-2" type='text' placeholder='name' name='name' />
                        <select value={country}  onChange={this.handleChange} className="form-control my-2" name="country" id="">
                            <option>Select country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="India">India</option>
                            <option value="Pakisthan">Pakisthan</option>
                            <option value="Botan">Botan</option>
                            <option value="China">China</option>
                            <option value="Shrilonka">Shrilonka</option>
                        </select>
                        <textarea value={bio}  onChange={this.handleChange} className="form-control my-2" placeholder="bio"  name="bio" id="" cols="30" rows="10"></textarea>
                        <input value={birthday}  onChange={this.handleChange} className="form-control my-2" type="date" name='birthday'/>
                        <div>
                            <input onChange={this.handleChange} type="radio" name='gender' value='male' /> Male
                            <input onChange={this.handleChange} className="ml-2" type="radio" name='gender' value='Female' /> Female
                            <input onChange={this.handleChange} className="ml-2" type="radio" name='gender' value='Other' /> Other
                        </div>
                        <div>
                            <input type="checkbox" name="agrre" checked={agrre} onChange={this.checkboxhandle} />
                            this is a agrre trem and condition
                        </div>
                        <div>
                            <h4 className="ym-3">
                                Skill:
                            </h4>
                            <input type="checkbox" name="skills" value='java' checked={skills.includes("java")} onChange={this.handleSkillChange} /> java
                            <input type="checkbox" name="skills" value='leravel' checked={skills.includes("leravel")} onChange={this.handleSkillChange} /> leravel
                            <input type="checkbox" name="skills" value='javascript' checked={skills.includes("javascript")} onChange={this.handleSkillChange}/> javascript
                            <input type="checkbox" name="skills" value='python' checked={skills.includes("python")} onChange={this.handleSkillChange} /> python
                        </div>
                        
                       
                        <button type="button" onClick={() => console.log(this.state)}>
                            show data
                        </button>
                        
                    </form>
                </div>
                
            </div>
        )
    }
}

export default Inputs