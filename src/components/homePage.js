import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import mainBg from '../images/mainBg.webp'

export default function HomePage(){

    useEffect(()=>{
        document.body.classList.add('modal-open');
    },[])

    return(

        <div className="w-full h-[100vh] flex overflow-hidden">

            {/* left side */}
            <div className="w-[55%] h-[100vh] pl-[100px] pt-[80px] bg-[#212121]
                                xs:w-full xs:absolute xs:bg-transparent xs:pl-[40px]">
                <p className="text-[30px] text-[#FFF] font-[800] font-['Montserrat']">Shutterpics</p>

                <div className='flex flex-col gap-[30px] my-[100px] xl:my-[200px] 
                                xs:gap-[10px] xs:absolute xs:left-[40px] xs:bottom-[80px]'>

                    <h1 className="text-[96px] text-[#FFF] font-[800] font-['Montserrat'] w-[470px] leading-[80px]  
                                    xs:text-[48px] xs:w-[235px] xs:leading-[40px] xs:my-0">I Love Moments</h1>

                    <p className="text-[32px] text-[#FFF] font-[400] font-['Open Sans']
                                    xs:text-[20px]">and I’m taking awesome photos</p>
                
                    {/* buttons */}
                    <div className='flex gap-[40px] xs:gap-[20px]'>
                        <Link to='/components/gallery'>
                        <div className='bg w-[158px] h-[53px] flex justify-center items-center shadow-myShadow rounded-[10px] 
                                        hover:my-[-10px] transition-all duration-[400] ease-linear cursor-pointer
                                        xs:w-[113px] xs:h-[40px] xs:pointer-events-none'>
                                            
                            <p className="text-[24px] text-[#FFF] font-[700] font-['Montserrat']
                                             xs:text-[16px]">Gallery</p>
                        </div>
                        </Link>

                        <Link to='/components/contact'>
                        <div className='bg w-[195px] h-[53px] flex justify-center items-center shadow-myShadow rounded-[10px] 
                                        hover:my-[-10px] transition-all duration-[400] ease-linear cursor-pointer
                                        xs:w-[138px] xs:h-[40px] xs:pointer-events-none'>
                                            
                            <p className="text-[24px] text-[#FFF] font-[700] font-['Montserrat']
                                            xs:text-[16px]">Contact me</p>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="w-[45%] h-[100vh] xs:w-full">
                <img className="w-full h-[100vh] object-cover object-center" src={mainBg} alt="bg" />
            </div>
        </div>
    )
}