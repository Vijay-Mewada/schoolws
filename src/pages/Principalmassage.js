import React from 'react'

function Principalmassage() {
    return (
        <div className='relative  '>
            <img src={require('../image/uppertop.png')} alt='upper' className='w-full mt-12' />
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 p-2'>
                <h1 className='text-center font-bold text-xl font-serif my-4'>Principal Message</h1>
                    
                    <p className='inline-block ml-6 text-lg font-serif'>xyz School is one of the oldest schools for both girls and boys managed by xyz Group. xyz Group is run by Mr Devendra Singh Ji. Our institution is recogniged by the Madhya Pradesh Board of education.We, xyz School, understand that each child is a distinct individual who needs to be nurtured in order to grow into a mature and responsible citizen. Our academic infrastructure along with a wide range of co-curricular activities help our students in the all round personality development. We have a strong team of motivated teachers who are always ready to accept challenges of developing the potential of each and every student. Keeping in view the ideas of democracy and our ancient culture, xyz strives to provide a system of education most suited to the needs of our society today. Stress on innovative methods of teaching , opportunities for shouldering responsibilities during school life, constant participation in sports and co-curricular activities lend meaning to the school life. Thus, the end product is the harmonious, all round developed personality of our students poised on the threshold of life.</p>
                </div>
                <div className='w-full md:w-1/2 p-4'>
                
                <img src={require('../image/principal.jpg')} alt='upper' className='p-1 mt-3 rounded-full flex mx-auto' style={{height:'450px',width:'450px'}}  />
                <h1 className='text-center font-bold text-2xl font-serif '>Principal : Aman</h1>
                <img src={require('../image/devider.png')} alt='upper' className='mb-4 flex mx-auto'/>
                </div>

            </div>
            <img src={require('../image/lower.png')} alt='upper' className='w-full mt-12' />
        </div>
    )
}

export default Principalmassage
