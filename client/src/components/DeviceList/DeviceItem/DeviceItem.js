import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../../../assets/images/star.svg';

const DeviceItem = ({device}) => {

  return (
    <Col md={3} className="ms-2" style={{width: 'auto'}}>
      <Card style={{width: 150, cursor: 'pointer'}} border={'light'} className="mt-4">
        <Image width={150} height={150} src={'http://' + device.img} />
        
        <div className="d-flex mt-1 justify-content-between align-items-center">
          <div style={{fontSize: '14px', fontWeight: 600}}>{device.name}</div>
          <div className="d-flex">
            <div>{device.rating}</div>
            <Image style={{width: 20, height: 20}} className="align-self-center" src={star} />
          </div>
        </div>
        <div className="text-black-50">Samsung</div>
      </Card>
    </Col>
  )
};

export default DeviceItem;