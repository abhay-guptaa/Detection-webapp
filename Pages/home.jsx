import React from 'react'
import { Link } from 'react-router-dom';
import bg from "../src/assets/subtle-prism.svg"
import Button from '../components/explorebutton'

const home = () => {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center flex-column" style={{backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "72vh",
                }}>
            <div className=''>
                <h1 className='display-2'>Detection Machine</h1>
                <h4 className='display-6 text-wrap'>Real Time Detection Machine Using Machine Learning Model</h4>
                <p>The Detection Web App leverages machine learning to identify objects in images or live feeds, providing real-time results with a user-friendly interface.</p>
            </div>
            <Link to="/mask"><Button/></Link>
        </div>
    )
}

export default home
