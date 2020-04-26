import React from "react";
import { Card } from "antd";

const PicCard = ({ pic }) => {
  return (
    <div className="wrapper-pic">
      <Card
        hoverable
        cover={<img alt="example" src={pic} />}
      ></Card>
    </div>
  );
};

export default PicCard;
