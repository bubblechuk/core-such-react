import "./footer.css"
import Emblem from "./bstu.png" 
import vk from "./vk.png"
import insta from "./insta.png"
import yt from "./yt.png"
export const Footer = () => {
return (
    <div className="footer">
        <div className="footerBlock">
            <div className="list">
                <h3>Полезные ресурсы</h3>
                <ul>
                    <a href="#"><li>Специальности</li></a>
                    <a href="#"><li>Кафедры</li></a>
                    <a href="#"><li>Абитуриент БГТУ</li></a>
                    <a href="#"><li>Система дистанционного обучения БГТУ</li></a>
                    <a href="#"><li>Почта университета</li></a>
                </ul>
                
            </div>
            <div className="links">
            <h3>Колледжи</h3>
            <ul>
                    <a href="#"><li>Гомельский государственный политехнический колледж</li></a>
                    <a href="#"><li>Бобруйский государственный лесотехнический колледж</li></a>
                    <a href="#"><li>Витебский государственный технологический колледж</li></a>
                    <a href="#"><li>Полоцкий государственный лесной колледж</li></a>
                    <a href="#"><li>Белорусский государственный колледж промышленности строительных материалов</li></a>
                </ul>
            </div>
            <div className="contacts">
                <h3>Контакты</h3>
                <h2>(8-017) 399 33 89</h2>
                <p>Тел./Факс</p>
                <h2>(8-017) 327 63 75</h2>
                <p>Приемная комиссия</p>
                <h3>Адрес</h3>
                <p>220006, г. Минск, ул. Свердлова, 13а</p>
                
            </div>
            <div className="emblem">
                <img src={Emblem}/>
                <button>Написать нам</button>
                <div className="social">
                <a href="#" ><img  src={vk}></img></a>
                <a href="#" ><img  src={insta}></img></a>
                <a href="#" ><img  src={yt}></img></a>
                </div>
            </div>
        </div>
        <div className="copyright">
        © БГТУ 2013 - 2024
        </div>
    </div>
)
}