import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';
import BrandList from '../components/BrandList/BrandList';

const Admin = () => {

  const [showBrandCreator, setShowBrandCreator] = useState(false);
  const [showTypeCreator, setShowTypeCreator] = useState(false);
  const [showDeviceCreator, setShowDeviceCreator] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={()=>setShowTypeCreator(true)}> Добавить тип </Button>
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={()=>setShowBrandCreator(true)}> Добавить бренд </Button>
      <Button variant={"outline-dark"} className="mt-4 p-2" onClick={()=>setShowDeviceCreator(true)}> Добавить устройство </Button>

      <BrandList />
      <CreateBrand show={showBrandCreator} onHide={()=>{setShowBrandCreator(false)}}/>
      <CreateType show={showTypeCreator} onHide={()=>{setShowTypeCreator(false)}}/>
      <CreateDevice show={showDeviceCreator} onHide={()=>{setShowDeviceCreator(false)}}/>
    </Container>
  )
};

export default Admin;