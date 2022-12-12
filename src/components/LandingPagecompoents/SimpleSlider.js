// import Carousel from 'react-bootstrap/Carousel';

import Carousel from 'better-react-carousel'
// import { Carousel } from '@trendyol-js/react-carousel';

function SimpleSlider(props) {
  return (
    <>
      <Carousel cols={5} rows={1} gap={20} loop>
      <Carousel.Item>
        <img width="100%" src={props.img1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={props.img2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={props.img3} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={props.img4} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={props.img5} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={props.img6} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={props.img7} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={props.img8} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={props.img9} />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src={props.img10} />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default SimpleSlider;