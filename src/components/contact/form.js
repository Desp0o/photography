import { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser'

export default function Form(){
    const form          = useRef()
    const nameRef       = useRef()
    const nameDivRef    = useRef()    
    const emailRef      = useRef()
    const emailDivRef   = useRef()
    const subjecRef     = useRef()
    const subjectDivRef = useRef()
    const messageRef    = useRef()   
    const messageDivRef = useRef()
    
    const [name, setName]     = useState('')
    const [isName, setIsName] = useState(false)

    const [email, setEmail]     = useState('')
    const [isEmail, setIsEmail] = useState(true)

    const [subject, setSubject]     = useState('')
    const [isSubject, setIsSubject] = useState(false)

    const [message, setMessage]     = useState('')
    const [isMessage, setIsMessage] = useState(false)

    const [isCorrect, setIsCorrect] = useState('hidden')

    useEffect(()=>{
        document.body.classList.remove('modal-open'); 
    },[])

    //if input values is correct
    function greenText(){
        setIsCorrect('block')

        const greenTimeOut = setTimeout(()=>{
            setIsCorrect('hidden')
        },10000)
    }

    //email send function
    const sendEmail =(e)=>{
        e.preventDefault();

        if(isName && isEmail && isSubject && isMessage){
            emailjs.sendForm('service_bpng7e7', 'template_y2xffsh', form.current, 'k5sgg72-uloGuXB_E')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            greenText()
            e.target.reset()
        }else{
            valueCheck()
        }
    
        

    }

    //checking if values are correct
    function valueCheck(){
        if(window.innerWidth > 769){
            
            if(nameRef.current.value === ''){
                nameRef.current.style.border = '1px solid red'
            }
    
            if(subjecRef.current.value === ''){
                subjecRef.current.style.border = '1px solid red'
            }
    
            if(!email.includes('@')){
                emailRef.current.style.border = '1px solid red'
                setIsEmail(false)
            }
    
            if(messageRef.current.value === ''){
                messageRef.current.style.border = '1px solid red'
            }
        }else{

            if(nameRef.current.value === ''){
                nameDivRef.current.style.borderBottom = '2px solid red'
            }

            if(subjecRef.current.value === ''){
                subjectDivRef.current.style.borderBottom = '2px solid red'
            }
    
            if(!email.includes('@')){
                emailDivRef.current.style.borderBottom = '2px solid red'
                setIsEmail(false)
            }
    
            if(messageRef.current.value === ''){
                messageDivRef.current.style.borderBottom = '2px solid red'
            }
        }

        
    }

    function nameHandler(event){
        setName(event.target.value)
    }

    function emailHandler(event){
        setEmail(event.target.value)
    }
    
    function subjectHandler(event){
        setSubject(event.target.value)
    }

    function messageHandler(event){
        setMessage(event.target.value)
    }

    //changing border colors if values gets correct
    useEffect(()=>{
        
        if(window.innerWidth > 769){
            if(name.length > 1){
                nameRef.current.style.border = '1px solid #FFF'
                setIsName(true)
            }

            if(!isEmail){
                if(email.includes('@') && email.length > 5){
                    emailRef.current.style.border = '1px solid #fff'
                    setIsEmail(true)
                }else{
                    emailRef.current.style.border = '1px solid red'
                }
            }
    
            if(subject.length > 2){
                subjecRef.current.style.border = '1px solid #FFF'
                setIsSubject(true)
            }
    
            if(message.length > 2){
                messageRef.current.style.border = '1px solid #FFF'
                setIsMessage(true)
            }
        }else{
            if(name.length > 1){
                nameDivRef.current.style.borderBottom = '2px solid #FFF'
                setIsName(true)
            }

            
            if(!isEmail){
                if(email.includes('@') && email.length > 5){
                    emailDivRef.current.style.borderBottom = '1px solid #fff'
                    setIsEmail(true)
                }else{
                    emailDivRef.current.style.borderBottom = '1px solid red'
                }
            }
            
    
            if(subject.length > 2){
                subjectDivRef.current.style.borderBottom = '2px solid #FFF'
                setIsSubject(true)
            }
    
            if(message.length > 2){
                messageDivRef.current.style.borderBottom = '2px solid #FFF'
                setIsMessage(true)
            }
        }

    },[name, message, email, subject])



    return(
        <>
                <form 
                    ref={form}
                    onSubmit={sendEmail} 
                    className="flex xs:flex-col gap-[60px] xs:gap-[20px] pt-[60px] w-full justify-center xs:items-center"
                >


                    <div className="left-input flex flex-col gap-[30px]">

                        <div ref={nameDivRef} className="relative xs:border-b-2">
                            <input 
                                    ref={nameRef}
                                    onChange={nameHandler}
                                    name="name"
                                    type='text' 
                                    placeholder="..."
                                    className="w-[450px] xs:w-[310px] h-[80px] xs:h-[40] gap-[30px] bg-transparent 
                                        border rounded-[2px] border-[#FFF] focus:outline-none caret-white
                                        text-[24px] text-[#FFF] font-[600] leading-[33px] pl-[15px] pt-[40px] placeholder:text-[#fff] xs:border-none"></input>
                            <span className="absolute left-[15px] top-[10px] font-[700] text-[16px] leading-[22px]
                                            text-[#FFF] font-['Open Sans']">Name</span>
                        </div>
                        
                        <div ref={emailDivRef} className="relative xs:border-b-2">
                            <input 
                                    ref={emailRef}
                                    onChange={emailHandler}
                                    name="email"
                                    type='text' 
                                    placeholder="...@example.com"
                                    className="w-[450px] xs:w-[310px] h-[80px] xs:h-[40] bg-transparent 
                                        border rounded-[2px] border-[#FFF] focus:outline-none caret-white
                                        text-[24px] text-[#FFF] font-[600] leading-[33px] pl-[15px] pt-[40px] placeholder:text-[#fff] 
                                        xs:border-none xs:placeholder:text-[16px]"></input>
                            <span className="absolute left-[15px] top-[10px] font-[700] text-[16px] leading-[22px]
                                            text-[#FFF] font-['Open Sans']">Email</span>
                        </div>

                        <div ref={subjectDivRef} className="relative xs:border-b-2">
                            <input 
                                    ref={subjecRef}
                                    onChange={subjectHandler}
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
                            onClick={valueCheck}
                            type="submit" 
                            className="xs:hidden button flex bg-[#fff] justify-center items-center w-[450px] h-[80px] rounded-[2px]">
                            <span className="font-['Montserrat] font-[700] text-[24px]">Send</span>
                        </button>
                    </div>

                    {/* right input message */}
                    <div className="relative xs:flex xs:flex-col xs:gap-[20px] ">
                        <div ref={messageDivRef} className="xs:border-b-2">
                            <textarea
                                    ref={messageRef}
                                    onChange={messageHandler}
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
                            onClick={valueCheck}
                            type="submit" 
                            className="hidden xs:flex bg-[#fff] justify-center items-center w-[450px] xs:w-[310px] h-[42px] rounded-[2px] xs:rounded-[5px]">
                            <span className="font-['Montserrat] font-[700] text-[24px] xs:text-[16px]">Send</span>
                        </button>
                    </div>

                </form>

                <p className={`text-[15px] xs:text-[12px] text-[green] 
                              font-[700] font-['Montserrat'] mx-auto w-fit capitalize
                              my-[20px] ${isCorrect}`}>Thank you for message, will answer ASAP!</p>
            
        </>
    )
}
