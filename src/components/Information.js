import React from 'react'
import Notice from './Notice'
import Calendar from './Calendar'
import News from './News'

function Information() {
    return (
        <div style={{backgroundColor:'#ddd6f3 '}}>
            <div className='flex flex-wrap'>
                <div className='md:w-1/3 w-full'>
                    <Notice/>
                </div>

                <div className='md:w-1/3 w-full'>
                    <Calendar/>
                </div>

                <div className='md:w-1/3 w-full'>
                    <News/>
                </div>
            </div>
        </div>
    )
}

export default Information
