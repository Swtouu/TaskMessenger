import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import DatabaseDetail from "./DatabaseDetail";
import RecipientDetail from "./RecipientDetail";
import SenderDetail from "./SenderDetail";
import Card from "./Card";

const App = () => {
  return (
    <div className="ui container database">
      <Card>
        <SenderDetail
          senderDetail="Ouu"
          senderAddress="Nonthaburi"
          senderNumber="000-0000000"
          senderAvatar={faker.image.avatar()}
        />
      </Card>
      <Card>
        <RecipientDetail
          recipientDetail="Abc"
          recipientAddress="Bangkok"
          recipientNumber="111-1111111"
          recipientAvatar={faker.image.avatar()}
        />
      </Card>
      <Card>
        <DatabaseDetail
          weight="1.5"
          size="1cm*1cm*1cm"
          initial="Bang Yai"
          destination="Sathorn"
          tsend="Mon at 5:00PM"
          texpect="Thu at 2:00PM"
          tget="Wed at 4:00PM"
          price="100 Baht"
          messenger="Sam"
          note="Good service"
        />
      </Card>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
