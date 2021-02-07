import React from 'react'

function Skill(props) {
    return (
        <div className="skills">
            <h3>skills:</h3>
            <ul>
                <li>{props.skillsA}</li>
                <li>{props.skillsB}</li>
                <li>{props.skillsC}</li>
                <li>{props.skillsD}</li>
            </ul>
        </div>
    )
}

export default Skill
