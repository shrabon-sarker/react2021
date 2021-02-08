import React, { Component } from 'react';

import Classes from './timer.module.css'

export class Timer extends Component {
    
    state = {
        count: 0,
    }

    inderId = null;
    puls = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    sub = () => {
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            })
        }
    }
    startTimer = () => {
        if(this.state.count){
            this.inderId = setInterval(() => {
                this.setState({count: this.state.count - 1}, ()=> {
                    if(this.state.count === 0){
                        alert('this is a finished');
                        clearInterval(this.inderId)
                        this.inderId = null
                    }
                })
            },1000)
        }
    }

    stopTimer = () => {
        if(this.inderId){
            clearInterval(this.inderId)
            this.inderId = null
        }
    }

    resetTimer = () => {
        this.setState({count : 0})
        clearInterval(this.inderId)
        this.inderId = null;
    }
    render() {
        return (
            <div>
                <h2>Simle Timer</h2>
                <div>
                    <button className={Classes.btn} onClick={this.puls}>+</button>
                    <span>{this.state.count}</span>
                    <button className={Classes.btn} onClick={this.sub}>-</button>
                </div>
                <div>
                    <button className={Classes.timer__count} onClick={this.startTimer}>start</button>
                    <button className={Classes.timer__count} onClick={this.stopTimer}>stop</button>
                    <button className={Classes.timer__count} onClick={this.resetTimer}>reset</button>
                </div>
            </div>
        )
    }
}

export default Timer
