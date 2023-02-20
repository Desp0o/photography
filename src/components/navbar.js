import { Link } from 'react-router-dom'

export default function Navbar(props){
    return(
        <div className='w-full h-[80px] flex items-center justify-between pl-[50px] xs:pl-[15px] pr-[50px] xs:pr-[15px] box-border'>
            <p className="text-[30px] xs:text-[24px] text-[#FFF] font-[800] font-['Montserrat']">Shutterpics</p>

            <div className='flex gap-[30px] xs:hidden'>
                <Link to='/components/homePage'><p className="text-[16px] text-[#FFF]  font-[400] font-['Montserrat'] cursor-pointer">Home</p></Link>
                <Link to={props.directLink}><p className="text-[16px] text-[#FFF]  font-[400] font-['Montserrat'] cursor-pointer">{props.linkName}</p></Link>
            </div>

            <div className='burgerMenu hidden xs:flex'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </div>
    )
}