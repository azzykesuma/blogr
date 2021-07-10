import React,{useState} from 'react'
import './MobileTab.css'
import arrow from '../images/icon-arrow-dark.svg'
import arrowUp from '../images/icon-arrow-light.svg'

function MobileTab() {
    const [clickedTop,setClickedTop] = useState(false)
    const [clickedMid,setClickedMid] = useState(false)
    const [clickedBottom,setClickedBottom] = useState(false)

    const handleClickedTop = () => {
        setClickedTop(!clickedTop)
    }
    const handleClickedMid = () => {
        setClickedMid(!clickedMid)
    }
    const handleClickedBottom = () => {
        setClickedBottom(!clickedBottom)
    }
    return (
        <div className='TabContainer'>
            <span>{clickedTop ? <p className='clickedP'>Product</p> : <p>Product</p>}
                {clickedTop ? <img src={arrowUp} className='arrowUp' alt='arrow-up' onClick={handleClickedTop} /> 
                : <img src={arrow} className='arrow' alt='arrow-up' onClick={handleClickedTop}/>}
            </span>
            {clickedTop ? (
                <div className='subNavContainer'>
                    <ul>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integration</li>
                    </ul>
                </div>
            ) : null}

           <span>{clickedMid ? <p className='clickedP'>Company</p> : <p>Company</p>}
                {clickedMid ? <img src={arrowUp} className='arrowUp' alt='arrow-up' onClick={handleClickedMid} /> 
                : <img src={arrow} className='arrow' alt='arrow-up' onClick={handleClickedMid}/>}
            </span>
            {clickedMid ? (
                <div className='subNavContainer'>
                    <ul>
                        <li>About</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
            ) : null}

            <span>{clickedBottom ? <p className='clickedP'>Connect</p> : <p>Connect</p>}
                {clickedBottom ? <img src={arrowUp} className='arrowUp' alt='arrow-up' onClick={handleClickedBottom} /> 
                : <img src={arrow} className='arrow' alt='arrow-up' onClick={handleClickedBottom}/>}
            </span>
            {clickedBottom ? (
                <div className='subNavContainer'>
                    <ul>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>Blog</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            ) : null}
            <hr />
            <div className='NavButtonContainer'>
                <button className='login'>Login</button>
                <button className='signUp'>Sign Up</button>
            </div>
        </div>
    )
}

export default MobileTab
