import React, { useState } from "react";
import Accordion from "./Accordion";
import { question } from "./FakeData";

const Index = () => {
  const [data] = useState(question);
  return (
    <div>
      {data.map((element) => {
        return <Accordion key={element.id} {...element} />;
      })}
    </div>
  );
};

export default Index;
