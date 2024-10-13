import "./contacts.css"
import  None from "./undefined.png"
export const Contacts = () => {
    return <div className="main">
        <h1>Контакты</h1>
        <hr style={{height: "3px", background: "black", width: "100%", border: 0}}/>
        <div className="professors">
            <div className="professorBlock">
                <img src="https://belstu.by/images/sotrudnikam/personal-page/shiman-1.jpg"/>
                <h3>Декан факультета</h3>
                <hr/>
                <h2>Шиман Дмитрий Васильевич</h2>
            </div>
            <div className="professorBlock">
                <img src="https://belstu.by/images/sotrudnikam/personal-page/salichiz11.jpg"/>
                <h3>Зам. декана по воспитательной работе</h3>
                <hr/>
                <h2>Салычиц Ольга Игоревна</h2>
            </div>
            <div className="professorBlock">
                <img src={None}/>
                <h3>Специалист</h3>
                <hr/>
                <h2>Жавненко Анна Александровна</h2>
            </div>
            <div className="professorBlock">
                <img src={None}/>
                <h3>Секретарь</h3>
                <hr/>
                <h2>Юшкевич Екатерина Георгиевна </h2>
            </div>
        </div>
        <div class="contact">
            Время работы:
            Пн-Пт: 08:30 — 16:15, 12:00 — 12:45
            Суббота: 08:30 — 13:30
            <br/>
            Почта: <a href="mailto:it@belstu.by">it@belstu.by</a>
            <br/>
            Телефон: <a href="tel:80173993389">(017)399-3389</a>
        </div>
        <div className="contactsForm">
        <form>
            <h1>Электронное обращение</h1>
            <input type="text" placeholder="Ваше ФИО (обязательно)"></input>
            
            <input type="email" placeholder="Ваш e-mail (обязательно)"></input>
            
            <input type="text" placeholder="Ваш номер телефона"></input>
            
            <input type="text" placeholder="Тема"></input>
            
            <textarea placeholder="Сообщение (обязательно)"></textarea>
            
            <input id ="file" type="file" style={{paddingLeft: "0", height: "25px"}}></input>
            
            <button>Отправить</button>
            
        </form>
        </div>
    </div>
}