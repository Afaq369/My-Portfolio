import React from 'react';
import MainHeading from '../shared/Text/MainHeading/MainHeading';
import { Col, Row } from 'antd';
import Paragraph from '../shared/Text/Paragraph/Paragraph';

const Hero = () => {
  return (
    <Row className="w-full h-[calc(100vh-95px)]">
      <Col
        xxl={14}
        xl={14}
        lg={14}
        md={24}
        sm={24}
        xs={24}
        className="w-full h-full flex justify-center flex-col pl-8 pb-[100px]"
      >
        <MainHeading text="Heading" bold={true} />
        <Paragraph text="loremlorem lore ml oremlor emlore mlorem lorem lore mlor emlore mlo remloremlorem loremlorem lore mlo rem lor eml ore m loremlor loremem lolorem loremrem" />
      </Col>
      <Col
        xxl={10}
        xl={10}
        lg={10}
        md={24}
        sm={24}
        xs={24}
        className="w-full h-full flex justify-center flex-col pl-8 pb-[100px]"
      >
        <MainHeading text="Heading" bold={true} />
        <Paragraph text="loremlorem lore ml oremlor emlore mlorem lorem lore mlor emlore mlo remloremlorem loremlorem lore mlo rem lor eml ore m loremlor loremem lolorem loremrem" />
      </Col>
    </Row>
  );
};

export default Hero;
