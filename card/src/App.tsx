import React from "react";
import CardGroup from "./components/card-swiper/CardGroup";
import CardSwiper from "./components/card-swiper";
import Card from "./components/card-swiper/Card";
import "../style/style.scss";
import cat1 from "./img/cat1.jpeg";
import cat2 from "./img/cat2.jpg";
import cat3 from "./img/cat3.jpg";
import cat4 from "./img/cat4.jpg";
import cat5 from "./img/cat5.jpeg";

const App = () => (
  <div>
    <CardSwiper>
      <CardGroup>
        <Card imageUrl={cat4} />
        <Card imageUrl={cat2} />
        <Card imageUrl={cat3} />
        <Card imageUrl={cat1} />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
      </CardGroup>

      <CardGroup>
        <Card imageUrl={cat1} />
        <Card imageUrl={cat4} />
        <Card imageUrl={cat3} />
        <Card imageUrl={cat2} />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
      </CardGroup>

      <CardGroup>
        <Card imageUrl={cat2} />
        <Card imageUrl={cat3} />
        <Card imageUrl={cat1} />
        <Card imageUrl={cat4} />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
      </CardGroup>

      <CardGroup>
        <Card imageUrl={cat4} />
        <Card imageUrl={cat2} />
        <Card imageUrl={cat1} />
        <Card imageUrl={cat3} />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
      </CardGroup>

      <CardGroup>
        <Card imageUrl={cat1} />
        <Card imageUrl={cat4} />
        <Card imageUrl={cat3} />
        <Card imageUrl={cat2} />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
      </CardGroup>

      <CardGroup>
        <Card imageUrl={cat2} />
        <Card imageUrl={cat3} />
        <Card imageUrl={cat1} />
        <Card imageUrl={cat4} />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
        <Card imageUrl={cat5} isLittle />
      </CardGroup>
    </CardSwiper>
  </div>
);

export default App;
