import React from 'react';
import SubHeading from '../shared/Text/SubHeading/SubHeading';
import { Col, Row } from 'antd';

const NavBar = () => {
  return (
    <Row>
      <Col xxl={4} xl={4} lg={4} md={0} sm={0} xs={0} className="w-full">
        <SubHeading text="adas" />
      </Col>
      <Col
        xxl={20}
        xl={20}
        lg={20}
        md={0}
        sm={0}
        xs={0}
        className="flex flex-row gap-x-2 ml-auto w-full"
      >
        <span>
          <SubHeading text="Home" />
        </span>
        <span>
          <SubHeading text="Home" />
        </span>
        <span>
          <SubHeading text="Home" />
        </span>
        <span>
          <SubHeading text="Home" />
        </span>
        <span>
          <SubHeading text="Home" />
        </span>
      </Col>
    </Row>
  );
};

export default NavBar;
