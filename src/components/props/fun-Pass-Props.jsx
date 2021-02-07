import React, { Component } from 'react'


class Child extends Component {
    render(){
        this.props.fun(this)
        return(
            <div>
                <h3>this is a clide function</h3>
            </div>
        )
    }
}

const ChildrenCom = (props) => (
    <div>
        <h2>this is a children</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, odio! Itaque rem nemo rerum possimus eius provident at veniam incidunt eligendi fugiat! Ut commodi hic perspiciatis minus voluptatibus ratione similique.</p>
        
        {props.children}
    </div>
)
export class FunctionPassProps extends Component {
    getContext(context){
        console.log(context)
    }

    render() {

        // this.getContext(this)
        return (
            <div>
                <h2>this is props function passing </h2>
                {/* <Child fun={this.getContext} /> */}
                <ChildrenCom>
                    <h2>thi sis hoeo gonasi </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, nisi, repudiandae incidunt facilis voluptatibus ipsa natus voluptatem, odit saepe veritatis recusandae id tempore similique deserunt distinctio autem ipsum molestias molestiae?</p>
                </ChildrenCom>
            </div>
        )
    }
}

export default FunctionPassProps
