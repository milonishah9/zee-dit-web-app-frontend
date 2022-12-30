import { useCallback, useEffect, useState } from 'react';
import React from 'react';

import './ILTTdataTowersHeader.css';
// import logo from 'ZEE_LOGO.jpg'


const ILTTdataTowersHeader = (props) => {

    return (

        <div className="head">
            <img src='/static/images/logos/Branding.png' height={100} alt='Viewers Logo' className='header-image' />
            <div className="logo">
                <img src='/static/images/logos/zee-logo.png' alt='Viewers Logo' className='logo-image' />

            </div>

            <div className='loginUser'>
                <p>Hello Deepak,</p>
            </div>
        </div>


    )
}

export default ILTTdataTowersHeader;