import React from 'react';
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts";
import '../css/style.css'

const DeviceItem = ({ device }) => {
    const navigate = useNavigate()
    return (
        <Col md={4} className={"mt-2"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 250, cursor: 'pointer', border: 'none' }} >
                <Image width={250} height={200} src={process.env.REACT_APP_API_URL + device.img} />
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;