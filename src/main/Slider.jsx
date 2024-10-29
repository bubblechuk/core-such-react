import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Test from './test.jpg'

export const MySlider = () => {
    const image = require("../background22.jpeg")
    const slides = [
        { id: 1, title: "ФИТ БГТУ", content: "За нами будущее!", image: "https://i.imgur.com/olIk0jP.jpeg" },
        { id: 2, title: "Лучшие студенты", content: "Только у нас!", image: "https://neutrongroup.cachefly.net/fasttrak.mvc/content/v2/themes/tdbank/img/students.jpg" },
        { id: 3, title: "Поступи в БГТУ", content: "Лучший выбор!", image: "https://i.imgur.com/olIk0jP.jpeg" },
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