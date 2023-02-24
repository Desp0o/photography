import React, { useState,useEffect } from 'react';
import './gallery.css'
import spinner from '../../images/spinner.gif'

import axios from "axios"

import arrow from '../../images/dirArrow.png'
import close from '../../images/closeBtn.png'
import Navbar from '../navbar';


export default function Galler1y(){
    const [data, setData] = useState([]); //storing data from API
    const [slideNumber, setSlideNumber] = useState(0) // active slidenumber in open modal
    const [openModal, setOpenModal] = useState(false) // modal state
    const [num, setnum] = useState(0) // num for json file 
    const [observer, setObserver] = useState(null); 

    // state to keep track of touch events
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    //remove scroll disable on page load
    useEffect(()=>{
        document.body.classList.remove('modal-open'); 
    },[])

    useEffect(() => {

        axios.get('https://desp0o.github.io/dataBase/dataBase.json').then(res => {
            
            setData(res.data[num].list)
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
          }, { once: true });
          
          setObserver(observer);

         
          
    }, [num]);


    // handle touch start event
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }

    // handle touch move event
    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    }

    // handle touch end event
    const handleTouchEnd = () => {
        // calculate distance
        const touchDistance = touchEnd - touchStart;
        // check direction
        if (touchDistance > 0) {
            prevSlide();
        } else if (touchDistance < 0) {
            nextSlide();
        }
    }

    //open modal
    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
        document.body.classList.add('modal-open'); //prevent scroll while modal is open
    }

    //close modal
    const handleCloseModal = () => {
        setOpenModal(false)
        document.body.classList.remove('modal-open'); //remove scroll disable on page load
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
        setData('')
        setnum(number)
    }


    return(
        <>
        <Navbar 
            linkName='Contact'
            directLink='/components/contact/contact'
        />

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
                        <img src={data[slideNumber].image} alt='full' 
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}/>
                    </div>
                    <p className='sliderNUmber'>{slideNumber + 1} / {data.length}</p>
                </div>
        }
       
        <div className='gallery-wrap'>
                
                {
                    data ? data.map((slide, index) => {
    
                        return(
                           
                            <div 
                                className='thumbnail' 
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <img  
                                    src={spinner} 
                                    data-src={slide.image} 
                                    alt='slide'
                                    
                                    ref={el => {
                                        if (el && observer) {
                                          observer.observe(el);
                                        }
                                      }}
                                />            
                            </div>
                        )
                    })
                     : <div className='loader'><div className="custom-loader"></div></div>
                }        
        </div>
        
        
        </>
    )
}
                
        




