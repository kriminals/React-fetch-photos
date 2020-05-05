import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import PicCard from './PicCard';
import { Col, Row } from 'antd';

function PicCards({ keyword }) {
  const [pic, setPic] = useState([]);

  
  async function connect() {
    if (!process.env.ACCESSKEY) {
      const { config } = await import('./config');
      const unsplash = new Unsplash({
        accessKey: config.ACCESSKEY,
        secret: config.SECRET,
      });
      return unsplash;
    }
    const unsplash = new Unsplash({
      accessKey: process.env.ACCESSKEY,
      secret: process.env.SECRET,
    });
    return unsplash;
  }

  const unsplash = connect();
  useEffect(() => {
    unsplash.then((response) =>
      response.search
        .photos(keyword, 1, 4, { orientation: 'portrait' })
        .then(toJson)
        .then((json) => {
          const pics = json.results.map((p) => p.urls.small);
          setPic(pics);
        })
    );
  }, [{ keyword }]); // Only re-subscribe if props changes

  return (
    <div>
      <Row gutter={16} style={{ marginTop: 16 }}>
        {pic.map((pic, idx) => (
          <Col span={6}>
            <PicCard key={idx} pic={pic} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PicCards;
