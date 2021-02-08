import React, { Component } from 'react';

export class StateManeages extends Component {

   state = {
       count : 0,
   }

   
    render() {

        //console.log(this.state.count)
        return (
            <div>
                <h2>this is a learing for react state</h2>
                <h3>count={this.state.count}</h3>
                <button onClick={() => {
                    //this.count++;
                    //this.setState({count: this.state.count + 1})
                    this.setState((value) => {
                        return {
                            count: value.count + 1
                        }
                    }, () => {
                        console.log('clicked..', this.state.count)
                    })
                    
                }} >add + 1</button>
            </div>
        )
    }
}

export default StateManeages
