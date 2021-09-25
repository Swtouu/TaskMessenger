import React from "react";
import faker from "faker";

const DatabaseDetail = (props) => {
  return (
    <div className="dataDetail">
      <div className="weight">Weight: {props.weight}</div>
      <div className="size">Size: {props.size}</div>
      <div className="locate">Location from: {props.initial}</div>
      <div className="destination">Destination: {props.destination}</div>
      <div className="dateSend">Date send: {props.tsend}</div>
      <div className="dateExpect">Date expect: {props.texpect}</div>
      <div className="dateReceive">Date receive: {props.tget}</div>
      <div className="price">Price: {props.price}</div>
      <div className="messenger">Messenger Name: {props.messenger}</div>
      <div className="note">Note: {props.note}</div>
    </div>
  );
};

export default DatabaseDetail;
