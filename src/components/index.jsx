import { Component } from 'react';


const Myfun = () => {
    return(
        <div>
            <h3>this is a </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, perspiciatis!</p>
        </div>
       
    )
}
class Com extends Component {
    render(){
        const ob = {
            title: "this is a test tile",
            id: 2,
        }

        const yourName = "shrabon sarker";
        const bio = (
            <div>
                <h4>this is name : {yourName}</h4>
                <p>web designer and frontend devloper</p>
            </div>
        )

        return(
            <div>
                <h2 {...ob}>this is a first react app runing</h2>
                <Myfun />
                <p>{new Date().toDateString()}</p>
                {bio}
            </div>  
        );
    }
}

export default Com;