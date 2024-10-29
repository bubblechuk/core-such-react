import './main.css';
import { MySlider } from './Slider';
import { useState, useEffect } from 'react';

export const Main = () => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(window.innerWidth > 1000 ? 6 : 3); // Количество новостей на странице
    var newsJSON = require('./news.json');

    // Используй данные из newsJSON для инициализации состояния
    useEffect(() => {
        setNews(newsJSON.news); // Задай состояние новостей из загруженного JSON

        // Функция для обновления количества новостей на странице
        const handleResize = () => {
            if (window.innerWidth > 1000) {
                setNewsPerPage(6);
            } else {
                setNewsPerPage(3);
            }
            setCurrentPage(1); // Сбросить на первую страницу при изменении размера
        };

        // Добавление слушателя события resize
        window.addEventListener('resize', handleResize);

        // Удаление слушателя при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength - 3) + "...";
        }
    };

    // Рассчитываем текущие новости
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

    // Изменение страницы
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Общее количество страниц
    const totalPages = Math.ceil(news.length / newsPerPage);

    return (
        <div className='main'>
            <div className="slider">
                <MySlider />
            </div>
            <div className="content">
                <div className="contentHeader">Новости</div>
                <div className="contentNews">
                    {currentNews.map((element, index) => {
                        return (
                            <div key={index} className="newsBlock">
                                <div className="newsImage"></div>
                                <p>{element.title}</p>
                                <hr />
                                <div className="newsDesc">{shortenText(element.desc, 150)}</div>
                                <button className="newsButton">Читать дальше {'>'}</button>
                            </div>
                        );
                    })}
                </div>
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
