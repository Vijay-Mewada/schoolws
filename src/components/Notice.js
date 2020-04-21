import React from 'react'
import Pdf from '../image/pdf.png'

function Notice() {
    const Stop = () =>{
        document.getElementById('marquee').stop();
    }
    const Start = () =>{
        document.getElementById('marquee').start();
    }
    return (
        <div>
            <div className='p-4'>
                <h1 className='text-xl font-semibold font-serif uppercase text-center'>Notice</h1>
                <ul className='border-black border-solid border m-4 bg-white p-2 rounded-md' style={{height:'460px'}}>
                   <marquee direction='up' height='450' id='marquee' onMouseEnter={Stop} onMouseLeave={Start} >
                    <li className='border-b border-black border-dotted p-2'>
                        <div className='flex '>
                        <img src={Pdf} alt='pdf' className='w-8 h-8 rounded-sm' />
              <h1 className='text-lg font-serif'>SPECIAL STRATEGIES FOR GIRLS &amp; MOTIVATIONAL PLANS</h1>
              </div>
              <p className='text-xs ml-8'>For more information</p>
              <p className='text-xs text-blue-600 ml-8'>01/11/19</p>
              </li>
              <li className='border-b border-black border-dotted p-2'>
                 <div className='flex '>
                     <img src={Pdf} alt='pdf' className='w-8 h-8 rounded-sm ' />
              <h1 className='text-lg font-serif'>SPECIAL STRATEGIES FOR GIRLS &amp; MOTIVATIONAL PLANS</h1>
              </div>
              <p className='text-xs ml-8'>For more information</p>
              <p className='text-xs text-blue-600 ml-8'>01/11/19</p>
              </li>
              <li className='border-b border-black border-dotted p-2'>
                 <div className='flex '>
                     <img src={Pdf} alt='pdf' className='w-8 h-8 rounded-sm ' />
              <h1 className='text-lg font-serif'>SPECIAL STRATEGIES FOR GIRLS &amp; MOTIVATIONAL PLANS</h1>
              </div>
              <p className='text-xs ml-8'>For more information</p>
              <p className='text-xs text-blue-600 ml-8'>01/11/19</p>
              </li>
              <li className='border-b border-black border-dotted p-2'>
                 <div className='flex '>
                     <img src={Pdf} alt='pdf' className='w-8 h-8 rounded-sm ' />
              <h1 className='text-lg font-serif'>SPECIAL STRATEGIES FOR GIRLS &amp; MOTIVATIONAL PLANS</h1>
              </div>
              <p className='text-xs ml-8'>For more information</p>
              <p className='text-xs text-blue-600 ml-8'>01/11/19</p>
              </li>
              <li className='border-b border-black border-dotted p-2'>
                 <div className='flex '>
                     <img src={Pdf} alt='pdf' className='w-8 h-8 rounded-sm ' />
              <h1 className='text-lg font-serif'>SPECIAL STRATEGIES FOR GIRLS &amp; MOTIVATIONAL PLANS</h1>
              </div>
              <p className='text-xs ml-8'>For more information</p>
              <p className='text-xs text-blue-600 ml-8'>01/11/19</p>
              </li>
              </marquee>
          
                </ul>

                


            </div>
            
        </div>
    )
}

export default Notice
