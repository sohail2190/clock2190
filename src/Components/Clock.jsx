import React, { Component } from 'react';// Assuming your CSS file is named Clock.css

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.timeId = setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    render() {
        return (
            <div className='clock'>
                <div
                    className='hour-hand'
                    style={{
                        transform: `rotateZ(${this.state.time.getHours() * 30}deg)`
                    }}
                ></div>
                <div
                    className='min-hand'
                    style={{
                        transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
                    }}
                ></div>
                <div
                    className='sec-hand'
                    style={{
                        transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
                    }}
                ></div>

                <span className='number twelve'>12</span>
                <span className='number one'>1</span>
                <span className='number two'>2</span>
                <span className='number three'>3</span>
                <span className='number four'>4</span>
                <span className='number five'>5</span>
                <span className='number six'>6</span>
                <span className='number seven'>7</span>
                <span className='number eight'>8</span>
                <span className='number nine'>9</span>
                <span className='number ten'>10</span>
                <span className='number eleven'>11</span>
            </div>
        );
    }
}

export default Clock;
