import logo from "./logo.png";
import Burger from "./menu.png";
import React, { useRef, useEffect, useState } from "react";
import "./header.css";
export const Header = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 1000);
  const navButton = document.getElementsByClassName("navButton");
  const navList = document.getElementsByClassName("navList");
  window.onresize = () => {
    func();
    document.getElementsByClassName("navBlock")[0].style.left = "100%";
  };
  const rotate = () => {
    document.getElementsByClassName("navBlock")[0].style.left = "";
    setRotationAngle(rotationAngle + 180);
    if (isMenuOpen == false) {
      setIsMenuOpen(true);
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    } else {
      setIsMenuOpen(false);
      document.getElementsByTagName("body")[0].style.overflow = "auto";
      window.onscroll = function () {};
    }
  };
  const func = () => {
    window.onscroll = function () {};
    if (window.innerWidth > 1000) {
      
      setIsMenuOpen(true);
      for (let i = 0; i < navList.length; i++) {
        navButton[i + 1].onmouseover = () => {
          navList[i].style.display = "flex";
        };
        navButton[i + 1].onmouseleave = () => {
          navList[i].style.display = "none";
        };
      }
    } else {
      setIsMenuOpen(false);
      for (let i = 0; i < navList.length; i++) {
        navButton[i + 1].onmouseleave = null;
        navButton[i + 1].onmouseover = null;
        navList[i].style.display = "none";
        navButton[i + 1].childNodes[0].childNodes[1].addEventListener(
          "click",
          (event) => {
            event.stopImmediatePropagation();
            console.log("e");
            if (navList[i].style.display === "none") {
              navList[i].style.display = "flex";
            } else {
              navList[i].style.display = "none";
            }
          }
        );
      }
    }
  };

  useEffect(() => {
    func();
  }, []);

  return (
    <div className="header">
      <div className="headerBlock">
        <div className="headerLogo">
          <div className="logo"></div>
        </div>
        <nav>
          <div className="navBlock" id={isMenuOpen ? "show" : "hide"}>
            <div className="navButton">
              <a href="/">Главная</a>
            </div>
            <hr id="mobileHR" />
            <div className="navButton">
              <div className="navScroll">
                <a href="">О факультете</a>
                <p>
                  <b> ⌄</b>
                </p>
              </div>
              <div className="navList" style={{ opacity: 1 }}>
                <ul>
                  <li><a href="/contacts">Контакты</a></li>
                  <hr />
                  <li>Фотогалерея</li>
                  <hr />
                  <li>Воспитательная работа</li>
                  <hr />
                  <li>Стипендии</li>
                  <hr />
                  <li>Общежитие</li>
                  <hr style={{ marginBottom: 0 }} />
                </ul>
              </div>
            </div>
            <hr id="mobileHR" />
            <div className="navButton">
              <div className="navScroll">
                <a href="w">Студентам</a>
                <p>
                  <b> ⌄</b>
                </p>
              </div>
              <div className="navList" style={{ opacity: 1 }}>
                <ul>
                  <li>Учебный процесс</li>
                  <hr />
                  <li>Образцы документов</li>
                  <hr />
                  <li>Кураторы учебных групп</li>
                  <hr />
                  <li>В помощь кураторам</li>
                  <hr />
                  <li>Советы</li>
                  <hr />
                  <li>Правовой арсенал</li>
                  <hr style={{ marginBottom: 0 }} />
                </ul>
              </div>
            </div>
            <hr id="mobileHR" />
            <div className="navButton">
              <div className="navScroll">
                <a href="">Абитуриентам</a>
                <p>
                  <b> ⌄</b>
                </p>
              </div>
              <div className="navList" style={{ opacity: 1 }}>
                <ul>
                  <li>
                    Информационные системы и технологии (профиль Информационные
                    системы)
                  </li>
                  <hr />
                  <li>
                    Информационные системы и технологии (профиль Цифровой
                    дизайн)
                  </li>
                  <hr />
                  <li>
                    Программная инженерия (профиль Программное обеспечение
                    информационных технологий)
                  </li>
                  <hr style={{ marginBottom: 0 }} />
                </ul>
              </div>
            </div>
            <hr id="mobileHR" />
            <div className="navButton">
              <a href="">Работодателю</a>
            </div>
            <hr id="mobileHR" />
            <div className="navButton">
              <a href="https://www.belstu.by">Сайт БГТУ</a>
            </div>
            <hr id="mobileHR" />
          </div>
          <div
            className="mobileBlock"
            style={{ transform: `rotate(${rotationAngle + "deg"})` }}
            onClick={rotate}
          >
            <img src={Burger} />
          </div>
        </nav>
      </div>
    </div>
  );
};
