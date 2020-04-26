import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";
import PicCard from "./PicCard";

import { Col, Row } from "antd";

const unsplash = new Unsplash({
  accessKey: "F86NAJfdsMFR4psuA8QXO_0l5lHgZz8pmUhkIqzwsco",
  secret: "h6uVIo66IwUa7S7xgi2NBsfTfePnhjgQz07VO0zTWbg",
});

function PicCards({keyword}) {
  const [pic, setPic] = useState([]);

  useEffect(() => {
    unsplash
      .search.photos(keyword, 1, 4, { orientation: "portrait" })
      .then(toJson)
      .then((json) => {
        console.log("inside promise");
        console.log(keyword);
        console.log(json);
        const pics = json.results.map((p) => p.urls.small);
        setPic(pics);
        
      });
  }, [{keyword}]); // Only re-subscribe if props.friend.id changes

  return (
    <div>
      <Row gutter={16} style={{marginTop: 16}}>  

      {pic.map((pic, idx) => (
      <Col span={6}>
        <PicCard key={idx} pic = {pic} />
      </Col>
      ))}

      
      </Row>
    </div>
  );
}

export default PicCards;
