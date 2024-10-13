import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Test from './test.jpg'

export const MySlider = () => {
    const image = require("../background22.jpeg")
    const slides = [
        { id: 1, title: "ФИТ БГТУ", content: "Выспишься в гробу!", image: "https://i.imgur.com/olIk0jP.jpeg" },
        { id: 2, title: "Slide 2", content: "Content for slide 2", image: "https://i.imgur.com/olIk0jP.jpeg" },
        { id: 3, title: "Slide 3", content: "Content for slide 3", image: "https://i.imgur.com/olIk0jP.jpeg" },
        // добавьте больше слайдов по необходимости
      ];
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          {slides.map((slide) => {

            return (
              <div className="item" key={slide.id} >
                <div class="itemImage" style={{backgroundImage: `url(${image})`, width: '100%', height: '100%'}}>
                <div className="text" >
                  <h3>{slide.title}</h3>
                  <p>{slide.content}</p>
                  </div>
                </div>
              </div>
            )
          } 
          )}
        </Slider>
      );
}