import { useRef, useEffect, useState } from "react";
import Navbar from "../navbar";
import Form from "./form";

// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
// const paypalStyle = {
//   layout: 'vertical',
//   color: 'black',
//   shape: 'rect',
//   label: 'paypal',
//   with: 50,
//   height: 30
// };

export default function Contact(){
    // const createOrder = (data, actions) => {
    //     return actions.order.create({
    //       purchase_units: [
    //         {
    //           amount: {
    //             value: "5.00",
    //           },
    //         },
    //       ],
    //     });
    //   };

    //   const onApprove = (data, actions) => {
    //     return actions.order.capture().then(function (details) {
    //       alert("Transaction completed by " + details.payer.name.given_name);
    //     });
    //   };


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


            {/* <PayPalScriptProvider options={{ "client-id": "AYTGR-FwzgVBLTU7THhgvrj6thwxhwx1DKnPl-sIlLntzXs7q4rTqfbSm0Yoq2x737SSLsQkVCdur8fc" }}>
                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    style={paypalStyle}
                />
            </PayPalScriptProvider> */}
        </div>

        
    )
}
