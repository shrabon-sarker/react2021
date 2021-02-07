import React , {Component} from 'react'
// /import components 
import Bio from './Bio'
import Skills from './Skill'
import Links from './Links'
import profile from './logo192.png'
//css import
import './profile.style.css';

export class Profile extends Component {

    me = {
        name: 'Bikash sarker',
        title: 'I am  a web designer and  frontend devloper or wordPress devloper',
        skillsA: 'html',
        skillsB: 'css3/css',
        skillsC: 'javascript',
        skillsD: 'php',


    }
    render() {
        return (
            <div className="container">
            <img src={profile} alt="images"/>
            <Bio name={this.me.name} title={this.me.title} />
            <Skills skillsA={this.me.skillsA}  skillsB={this.me.skillsB}  skillsC={this.me.skillsC} skillsD={this.me.skillsD} />
            <Links />
        
            
        </div>
        )
    }
}

export default Profile




