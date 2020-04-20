import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';


class Cal extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <div className='p-4'>
                    <h1 className=' uppercase text-xl font-semibold font-serif text-center'>School Calendar</h1>
                </div>
                <div className='flex mx-auto justify-center' style={{marginBottom:'10px'}}>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date} />
                    </div>
            </div>
        );
    }
}

export default Cal




