import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router';
import star from '../../../assets/images/star.svg';
import { DEVICE_PAGE_ROUTE } from '../../../utils/consts';

const DeviceItem = ({device}) => {

  const history = useHistory();

  return (
    <Col md={3} className="ms-2" style={{width: 'auto'}} onClick={()=>history.push(DEVICE_PAGE_ROUTE + '/' + device.id)}>
      <Card style={{width: 150, cursor: 'pointer'}} border={'light'} className="mt-4">
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
        
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