import React, { useState,useEffect } from 'react';
import './gallery.css'
import truck from '../images/truck.gif'

import axios from "axios"

import arrow from '../images/dirArrow.png'
import close from '../images/closeBtn.png'


export default function Galler1y(){
    const [data, setData] = useState([]);
    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const [num, setnum] = useState(0)
    const [load, setLoad] = useState(false)
    const [observer, setObserver] = useState(null);

    useEffect(() => {

        axios.get('https://desp0o.github.io/dataBase/dataBase.json').then(res => {
            setData(res.data[num].list);
            setLoad(true);
          });

          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove('lazy');
                observer.unobserve(lazyImage);
              }
            });
          });
      
          setObserver(observer);
          
    }, [num]);

    
    //open modal
    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    //open modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    //previous slide
    const prevSlide  = () => {
        if(slideNumber === 0){
            setSlideNumber(data.length - 1)
        }else{
            setSlideNumber(slideNumber - 1)
        }
    }

    //next slide
    const nextSlide = () => {
        if(slideNumber === data.length - 1){
            setSlideNumber(0)
        }else{
            setSlideNumber(slideNumber + 1)
        }
    }

    // on arrow key donw changing slides
    useEffect(()=>{
        window.onkeydown = (e) =>{
            if (e.keyCode === 37) {
                prevSlide()
              } else if(e.keyCode === 39){
                nextSlide()
              }
        }
    },[slideNumber])

    
    function filter(number){
        setnum(number)
    }


    return(
        <>
        <h1 className='galleryTitle'>Gallery</h1>
        <div className='filter'>
            <p onClick={()=>filter('0')}>All</p>
            <p onClick={()=>filter('1')}>B&W</p>
        </div>

        {
            openModal &&
                <div className='sliderWrap'>

                {/* bg overlay */}
                

                    {/* button container */}
                    <div className='buttonHandler'>
                        <div className='overlay' onClick={handleCloseModal} />
                        <img src={close} alt='close btn'  className='closeBtn' onClick={handleCloseModal} />
                        <img src={arrow} alt='left arrow' className='arrowLeft' onClick={prevSlide} />
                        <img src={arrow} alt='left arrow' className='arrowRight' onClick={nextSlide} /> 
                    </div>
                    

                    {/* full screen image */}
                    <div className='fullScreenImage'>
                        <img src={data[slideNumber].image} alt='full' />
                    </div>

                </div>
        }
       
        <div className='gallery-wrap'>
        

                {
                    load ? data.map((slide, index) => {

                        return(
                           
                            <div 
                                className='thumbnail' 
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img  
                                    src={truck} 
                                    data-src={slide.image} 
                                    alt='slide'
                                    className="lazy"
                                    ref={el => {
                                        if (el && observer) {
                                          observer.observe(el);
                                        }
                                      }}
                                />            
                            </div>
                        )
                    })
                    : <img src={truck}/>
                }        
        </div>

        </>
    )
}
                
        




