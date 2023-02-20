import { useRef, useEffect } from "react";
import Navbar from "./navbar";
import emailjs from '@emailjs/browser'

export default function Contact(){
    const form = useRef()

    useEffect(()=>{
        document.body.classList.remove('modal-open'); 
    },[])

    const sendEmail =(e)=>{
        e.preventDefault();
    
        emailjs.sendForm('service_bpng7e7', 'template_y2xffsh', form.current, 'k5sgg72-uloGuXB_E')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return(
        <div className="w-full bg-[#212121] pb-[50px]">
            <Navbar
                linkName='Gallery'
                directLink='/components/gallery'
            />

            <div className="my-[100px]">
                <p className="text-[48px] xs:text-[36px] text-[#FFF] font-[700] font-['Montserrat'] mx-auto w-fit">Contact form</p>
                

                <form 
                    ref={form}
                    onSubmit={sendEmail} 
                    className="flex xs:flex-col gap-[60px] xs:gap-[20px] pt-[60px] w-full justify-center xs:items-center"
                >


                    <div className="left-input flex flex-col gap-[30px]">

                        <div className="relative xs:border-b-2">
                            <input 
                                    name="name"
                                    type='text' 
                                    placeholder="..."
                                    className="w-[450px] xs:w-[310px] h-[80px] xs:h-[40] gap-[30px] bg-transparent 
                                        border rounded-[2px] border-[#FFF] focus:outline-none caret-white
                                        text-[24px] text-[#FFF] font-[600] leading-[33px] pl-[15px] pt-[40px] placeholder:text-[#fff] xs:border-none"></input>
                            <span className="absolute left-[15px] top-[10px] font-[700] text-[16px] leading-[22px]
                                            text-[#FFF] font-['Open Sans']">Name</span>
                        </div>
                        
                        <div className="relative xs:border-b-2">
                            <input 
                                    name="email"
                                    type='email' 
                                    placeholder="...@example.com"
                                    className="w-[450px] xs:w-[310px] h-[80px] xs:h-[40] bg-transparent 
                                        border rounded-[2px] border-[#FFF] focus:outline-none caret-white
                                        text-[24px] text-[#FFF] font-[600] leading-[33px] pl-[15px] pt-[40px] placeholder:text-[#fff] xs:border-none"></input>
                            <span className="absolute left-[15px] top-[10px] font-[700] text-[16px] leading-[22px]
                                            text-[#FFF] font-['Open Sans']">Email</span>
                        </div>

                        <div className="relative xs:border-b-2">
                            <input 
                                    name="subject"
                                    type='text' 
                                    placeholder="..."
                                    className="w-[450px] xs:w-[310px] h-[80px] xs:h-[40] bg-transparent 
                                        border rounded-[2px] border-[#FFF] focus:outline-none caret-white
                                        text-[24px] text-[#FFF] font-[600] leading-[33px] pl-[15px] pt-[40px] placeholder:text-[#fff] xs:border-none"></input>
                            <span className="absolute left-[15px] top-[10px] font-[700] text-[16px] leading-[22px]
                                            text-[#FFF] font-['Open Sans']">Subject</span>
                        </div>

                        <button
                            type="submit" 
                            className="xs:hidden button flex bg-[#fff] justify-center items-center w-[450px] h-[80px] rounded-[2px]">
                            <span className="font-['Montserrat] font-[700] text-[24px]">Send</span>
                        </button>
                    </div>

                    {/* right input message */}
                    <div className="relative xs:flex xs:flex-col xs:gap-[20px] ">
                        <div className="xs:border-b-2">
                            <textarea
                                    name="message" 
                                    type='text' 
                                    className="resize-none bg-transparent w-[450px] xs:w-[310px] h-[410px] xs:h-[230px]
                                    border rounded-[2px] border-[#FFF] focus:outline-none caret-white
                                    text-[24px] text-[#FFF] font-[600] leading-[33px] pl-[15px] pt-[40px] placeholder:text-[#fff] xs:border-none"
                                    placeholder="..."
                            ></textarea>
                        </div>
                        <span className="absolute left-[15px] top-[10px] font-[700] text-[16px] leading-[22px]
                                            text-[#FFF] font-['Open Sans']">Meassage</span>

                        <button
                            type="submit" 
                            className="hidden xs:flex bg-[#fff] justify-center items-center w-[450px] xs:w-[310px] h-[80px] rounded-[2px]">
                            <span className="font-['Montserrat] font-[700] text-[24px]">Send</span>
                        </button>
                    </div>
                </form>
            </div>

        </div>

        
    )
}
