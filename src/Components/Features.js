import React from 'react';
import FeatureBox from './FeatureBox';
import { Row, Col,Button } from 'antd';

function Features() {
    return (
        // <div id='features'>
       
            <Row style={{display:'flex', marginTop:"100px"}}>
                <FeatureBox title="Customize your Linktree"  para={"Make your Linktree pop. Embody your brand through custom colors, fonts and images."}/>
                <FeatureBox title="Analytics and Insights"  para={"Gain valuable insight into your traffic and discover which content is performing with your audience.."}/>
                <FeatureBox title="Powerful Third-Party Integrations"  para={"Collect email subscribers, connect with third-party analytics and remarket to your audience."}/>
                
            </Row>
            
          
       
     )
}

export default Features
