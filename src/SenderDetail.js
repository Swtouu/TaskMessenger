import React from "react";
import faker from "faker";

const SenderDetail = (props) => {
  return (
    <div className="data">
      <div className="senderDetail">
        <img alt="senderAvatar" src={props.senderAvatar} />

        <div className="detail">
          <div className="sender">Sender Name: {props.senderDetail}</div>
          <div className="senderAddress">
            Sender Address: {props.senderAddress}
          </div>
          <div className="senderNumber">
            Sender Number: {props.senderNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SenderDetail;
