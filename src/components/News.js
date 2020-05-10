import React from 'react'

function News() {
    const Stop = () =>{
        document.getElementById('marquee1').stop();
    }
    const Start = () =>{
        document.getElementById('marquee1').start();
    }   
    return (
        <div className='p-4'>
            <h1 className='text-xl uppercase font-semibold font-serif text-center'>Latest News</h1>
            <ul className='border-solid border md:m-4 mt-4 bg-white p-2 rounded-md' style={{height:'460px'}}>
            <marquee direction='up' height='450' id='marquee1' onMouseEnter={Stop} onMouseLeave={Start} >
                <li>
                    <div className='flex'>
                    <div className='border-2 border-orange-400 rounded-lg h-20 leading-10 w-32 items-center'>
                    <div>
                    <h1 className='uppercase pb-2 pt-2 bg-orange-400 font-bold text-white font-serif border-b  text-center'>JAN</h1>
                    <p className='text-center text-orange-400 font-bold text-lg'>03</p>
                    </div>
                    </div>
                    <div className='flex m-2'>
                        <h4 className='text-xl flex font-semibold'>Abeer Khan won Silver Medal in 4Oth State Karate...</h4>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='flex'>
                    <div className='border-2 border-orange-400 rounded-lg h-20 leading-10 w-32 items-center'>
                    <div>
                    <h1 className='uppercase pb-2 pt-2 bg-orange-400 font-bold text-white font-serif border-b  text-center'>JAN</h1>
                    <p className='text-center text-orange-400 font-bold text-lg'>03</p>
                    </div>
                    </div>
                    <div className='flex m-2'>
                        <h4 className='text-xl flex font-semibold'>Abeer Khan won Silver Medal in 4Oth State Karate...</h4>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='flex'>
                    <div className='border-2 border-orange-400 rounded-lg h-20 leading-10 w-32 items-center'>
                    <div>
                    <h1 className='uppercase pb-2 pt-2 bg-orange-400 font-bold text-white font-serif border-b  text-center'>JAN</h1>
                    <p className='text-center text-orange-400 font-bold text-lg'>03</p>
                    </div>
                    </div>
                    <div className='flex m-2'>
                        <h4 className='text-xl flex font-semibold'>Abeer Khan won Silver Medal in 4Oth State Karate...</h4>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='flex'>
                    <div className='border-2 border-orange-400 rounded-lg h-20 leading-10 w-32 items-center'>
                    <div>
                    <h1 className='uppercase pb-2 pt-2 bg-orange-400 font-bold text-white font-serif border-b  text-center'>JAN</h1>
                    <p className='text-center text-orange-400 font-bold text-lg'>03</p>
                    </div>
                    </div>
                    <div className='flex m-2'>
                        <h4 className='text-xl flex font-semibold'>Abeer Khan won Silver Medal in 4Oth State Karate...</h4>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='flex'>
                    <div className='border-2 border-orange-400 rounded-lg h-20 leading-10 w-32 items-center'>
                    <div>
                    <h1 className='uppercase pb-2 pt-2 bg-orange-400 font-bold text-white font-serif border-b  text-center'>JAN</h1>
                    <p className='text-center text-orange-400 font-bold text-lg'>03</p>
                    </div>
                    </div>
                    <div className='flex m-2'>
                        <h4 className='text-xl flex font-semibold'>Abeer Khan won Silver Medal in 4Oth State Karate...</h4>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='flex'>
                    <div className='border-2 border-orange-400 rounded-lg h-20 leading-10 w-32 items-center'>
                    <div>
                    <h1 className='uppercase pb-2 pt-2 bg-orange-400 font-bold text-white font-serif border-b  text-center'>JAN</h1>
                    <p className='text-center text-orange-400 font-bold text-lg'>03</p>
                    </div>
                    </div>
                    <div className='flex m-2'>
                        <h4 className='text-xl flex font-semibold'>Abeer Khan won Silver Medal in 4Oth State Karate...</h4>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='flex'>
                    <div className='border-2 border-orange-400 rounded-lg h-20 leading-10 w-32 items-center'>
                    <div>
                    <h1 className='uppercase pb-2 pt-2 bg-orange-400 font-bold text-white font-serif border-b  text-center'>JAN</h1>
                    <p className='text-center text-orange-400 font-bold text-lg'>03</p>
                    </div>
                    </div>
                    <div className='flex m-2'>
                        <h4 className='text-xl flex font-semibold'>Abeer Khan won Silver Medal in 4Oth State Karate...</h4>
                    </div>
                    </div>
                </li>
                </marquee>
            </ul>
        </div>
    )
}

export default News
