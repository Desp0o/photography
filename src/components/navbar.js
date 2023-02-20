import { Link } from 'react-router-dom'

export default function Navbar(props){
    return(
        <div className='w-full h-[80px] flex items-center justify-between pl-[50px] pr-[50px]'>
            <p className="text-[20px] xs:text-[14px] text-[#FFF] font-[800] font-['Montserrat']">Shutterpics</p>

            <div className='flex gap-[30px]'>
                <Link to='/components/homePage'><p className="text-[16px] text-[#FFF] xs:text-[12px] font-[400] font-['Montserrat'] cursor-pointer">Home</p></Link>
                <Link to={props.directLink}><p className="text-[16px] text-[#FFF] xs:text-[12px] font-[400] font-['Montserrat'] cursor-pointer">{props.linkName}</p></Link>
            </div>
        </div>
    )
}