import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import DeviceItem from './DeviceItem/DeviceItem';

const DeviceList = () => {

  const devices = useSelector((state) => state.device.devices);

  return (
    <Row className="d-flex mt-3">
        {devices.map((device)=> (
          <DeviceItem key={device.id} device={device} />
        ))}
    </Row>
  )
};

export default DeviceList;