import React from "react";
import faker from "faker";

const RecipientDetail = (props) => {
  return (
    <div className="data">
      <img alt="senderAvatar" src={props.recipientAvatar} />
      <div className="recipientDetail">
        <div className="recipient">Recipient Name: {props.recipientDetail}</div>
        <div className="recipientAddress">
          Recipient Address: {props.recipientAddress}
        </div>
        <div className="recipientNumber">
          Recipient Number: {props.recipientNumber}
        </div>
      </div>
    </div>
  );
};

export default RecipientDetail;
