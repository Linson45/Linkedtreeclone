import React from 'react'
import { Row, Col } from 'antd';
function FeatureBox(props) {
    return (
            <Col span={8} sm={24} xs={24} xs={24}xs={24}>
            <h2>{props.title}</h2>
            <p>Make your Linktree pop. Embody your brand through custom colors, fonts and images.</p>

            </Col>
           
       
    )
}

export default FeatureBox
