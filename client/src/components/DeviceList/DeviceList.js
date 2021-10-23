import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDevices } from "../../http/deviceAPI";
import Pages from "../Pages/Pages";
import DeviceItem from "./DeviceItem/DeviceItem";

const DeviceList = () => {
  const devices = useSelector((state) => state.device.devices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDevices());
  }, []);

  return (
    <Row className="d-flex mt-3">
      {devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}

      <Pages />
    </Row>
  );
};

export default DeviceList;
