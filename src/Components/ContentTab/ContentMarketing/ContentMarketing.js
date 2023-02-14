import { useState } from 'react';
import './ContentMarketing.css';
import ContentMarketingLinear from './ContentMarketingLinear/ContentMarketingLinear';
import ContentMarketingOTT from './ContentMarketingOTT/ContentMarketingOTT';

const ContentMarketing = (props) => {

    const [activeTab, setActiveTab] = useState('ott');

    return (
        <div className='content-marketing-container'>
            <div className='content-marketing-navigation-tabs'>
                <div className={activeTab === 'linear' ? 'content-marketing-navigation-tab-active' : 'content-marketing-navigation-tab-inactive'}
                    onClick={(event) => setActiveTab('linear')}
                >
                    Linear
                </div>
                <div className={activeTab === 'ott' ? 'content-marketing-navigation-tab-active' : 'content-marketing-navigation-tab-inactive'}
                    onClick={(event) => setActiveTab('ott')}
                >
                    OTT</div>
            </div>
            <div className='content-marketing-tabs-content'>
                {activeTab === 'linear' ? <ContentMarketingLinear /> : <ContentMarketingOTT />}
            </div>
        </div>
    )
}

export default ContentMarketing;