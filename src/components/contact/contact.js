import { useRef, useEffect, useState } from "react";
import Navbar from "../navbar";
import Form from "./form";

export default function Contact(){
    return(
        <div className="w-full bg-[#212121] pb-[50px]">
            <Navbar
                linkName='Gallery'
                directLink='/components/gallery/gallery'
            />

            <div className="my-[100px]">
                <p className="text-[48px] xs:text-[36px] text-[#FFF] font-[700] font-['Montserrat'] mx-auto w-fit">Contact form</p>
                <p className="text-[15px] xs:text-[12px] text-[#FFF] font-[700] font-['Montserrat'] mx-auto w-fit capitalize">for original sizes or any question</p>
                
                <Form />
            </div>

        </div>

        
    )
}
