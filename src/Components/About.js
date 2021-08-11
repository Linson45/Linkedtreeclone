import React from 'react'
import { Row, Col } from 'antd';


function About(props) {
    return (
        <>
    <Row style={{  marginTop:"240px" ,display:'flex', alignItems:'center'}} span={24}>
      <Col  className='about-image' span={12} lg={12}>
      <video src={props.image} height={"556.8px"} autoPlay={true} loop={true} controls={false}>
      </video>
      </Col>
      <Col span={12} className='about-text'>
      <h2>{props.title}</h2>
        <p >{props.para}</p>
        {/* <button>{props.button}</button> */}
      </Col>
    </Row>
        </>
    )
}

export default About
