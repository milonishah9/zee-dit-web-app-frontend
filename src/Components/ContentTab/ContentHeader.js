import React from "react";

const ContentHeader = (props) => {
    const { header } = props
    return (
        <div className='ilt20-header-container-1'>
            {/* <div className='ilt20-header-container-1 row align-items-center'> */}
            {/* ilt20-header-container-1  */}
            <div className='ilt20-header-subcontainer'>
                <div className='ilt20-header-div-left'>
                    {/* <div className='ilt20-header-div-left col'> */}
                    {/* ilt20-header-div-left  */}
                    <div className='ilt20-header-subdiv-left-1'>
                        <a href='/home'><img src='/static/images/logos/home-icon.svg' height={15} alt='home-icon' /></a>
                        {/* <p>Home</p> */}
                    </div>
                    <div className='ilt20-header-zee-logo-4'>
                        <img src='/static/images/logos/ZEE_LOGO.png' height={32.11} alt='Zee Logo' />
                    </div>
                    <div className='ilt20-header-subdiv-left-2'></div>
                    {/* <div className='ilt20-header-ilt20-logo-2'>
                        <img src='/static/images/logos/ILT20-logo.png' height={40} alt='ILT20 Logo' />
                    </div> */}
                        <div className='ilt20-header-subdiv-left-3'>
                            {/* <p>*illustrative data</p> */}
                        </div>
                </div>

                <div className={header === 'Executive Summary' ? ('executive-summary-header'):('ilt20-header-div-middle') }>
                    {/* <div className='ilt20-header-div-middle col'> */}
                    {/* ilt20-header-div-middle */}
                    <div className='ilt20-header-ilt20-text-3'>
                        <h1 className={header.replace(/ /g, '-')}>{header}</h1>
                    </div>
                </div>

                <div className='ilt20-header-div-right'>
                    {/* <div className='ilt20-header-div-right col'> */}
                    {/* ilt20-header-div-right */}
                    <img src='/static/images/logos/profile.svg' className="profile" height={40} alt='profile Logo' />
                    <p>Hello Deepak</p>
                    <img src='/static/images/logos/logout.svg' className="logout" height={40} alt='logoutLogo' />
                </div>
            </div>


        </div>
    )
}

export default ContentHeader;
