import React from 'react'

function Managementmessage() {
    return (
        <div className='relative  '>
            <img src={require('../image/uppertop.png')} alt='upper' className='w-full mt-12' />
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 p-2'>
                <h1 className='text-center font-bold text-xl font-serif my-4'>Management Message</h1>
                    
                    <p className='inline-block ml-6 text-lg font-serif'>Dear Parent & Students, It gives me great pleasure to welcome you to xyz School. The school is committed to inculcating in all our students; strong ethical valued of integrity, respect and discipline as well as clarity in thought and decision-making ability, as a life-long process. In order to achieve all this, We follow a rigorous programme that is based upon the best educational practices, highly progressive and recognized world-wide; and one that creates conditions for students to maximize their potential at an internationally competitive level. Our state-of-the-art infrastructure, coupled with highly qualified and well-trained teachers, ensures that the students at xyz should be able to gain an enriching experience. Furthermore, it has been one of my quests in life to make high quality education available; accessible through the latest educational technology. The mission of the school is to develop responsible global citizens and leaders through academic excellence, We will be the foundation for a new generation of leaders and innovators, who will continue to pave the way for a better and brighter future for our world. The greatest strength of xyz is the high quality programmes and transparency in its system. We are fortunate to have a school community which includes talented teachers and supportive parents who work together to make xyz , an ideal place for our motivated students to learn and grow. We are always open to new ideas, inquiries and feedback, from all. Over the past 26 years, xyz has lived up to its mission statement and established itself as one of the top educational institutions for students and parents in Bhopal. I welcome you to be a part of xyz family!</p>
                </div>
                <div className='w-full md:w-1/2 p-4'>
                
                <img src={require('../image/management.jpg')} alt='upper' className='p-1 mt-3 rounded-full flex mx-auto' style={{height:'450px',width:'450px'}}  />
                <h1 className='text-center font-bold text-2xl font-serif '>Aman</h1>
                <img src={require('../image/devider.png')} alt='upper' className='mb-4 flex mx-auto'/>
                </div>

            </div>
            <img src={require('../image/lower.png')} alt='upper' className='w-full mt-12' />
        </div>
    )
}

export default Managementmessage
