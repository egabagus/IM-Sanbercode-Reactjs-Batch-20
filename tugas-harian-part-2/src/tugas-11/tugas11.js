import React, { Component } from "react";


class Timer extends Component{
    constructor(props){
        super(props)
        var today = new Date(),
        date = today.getHours() + ':' + (today.getMinutes() + 1) + ':' + today.getSeconds();
        this.state = {
            time: 100,
            text: null,
            showTimer: true,
            date: date
        }
        this.hideTimer = this.hideTimer.bind(this)
    }

    componentDidMount(){
        if (this.props.start !== undefined){
            this.setState({time : this.props.start})
        }
        this.timerID = setInterval(
            () => this.tick(),
            10
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    componentDidUpdate(){
        if (this.state.time == 0 && this.state.text === null){
            this.setState({text : "Hello"})
        }
    }

    tick(){
        this.setState({
            time: this.state.time - 1
        });
    }

    hideTimer(){
        this.setState({showTimer: !this.state.showTimer})
    }

    // showDate(){
    //     var today = new Date(),
    //         date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    //     this.state = {
    //         date: date
    //     };
    // }


    render(){
        if (this.state.time == 0){
            return null;
        } else{
        return(
            <div>
                {this.state.showTimer && (
                    <>
                    <h1>
                        Sekarang Jam {this.state.date}
                    </h1>
                    <h1>
                        {this.state.time}
                    </h1>
                    </>
                )}
            </div>
        )
                }
    }
}

export default Timer;