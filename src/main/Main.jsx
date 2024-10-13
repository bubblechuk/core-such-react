import './main.css'
import { MySlider } from './Slider'
import {useState, useEffect} from 'react'
export const Main = () => {
    const [news, setNews] = useState([])
    var newsJSON = require('./news.json')
    const getNews = async () => {
        const response = await fetch('./news.json').then((response) => response.json())
        setNews(response)
    }
    const shortenText = (text, maxLength) => {
        if (text.length <= maxLength) {
          return text;
        } else {
          return text.slice(0, maxLength - 3) + "...";
        }
      }
    useEffect(() => {
    }, []);
    return (
    <div className='main'>
        <div className="slider">
        <MySlider/>
        </div>
        <div className="content">
        <div className="contentHeader">Новости</div>
        <div className="contentNews">
        {newsJSON.news.map((element) => {
            return (
                <div className="newsBlock">
                    <div className="newsImage"></div>
                    <p>{element.title}</p>
                    <hr/>
                    <div className="newsDesc">{shortenText(element.desc, 150)}</div>
                    <button className="newsButton">Читать дальше {'>'}</button>
                </div>
            )
        })}
        </div>
        </div>
        </div>
    )
}
