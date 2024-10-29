import "./contacts.css";
import nopic from "./undefined.png";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setName, setEmail, setTelephone, setTheme, setMessage, setFile } from "../slices/listsSlice";

export const Contacts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onBlur" });
    const dispatch = useDispatch();
    const feedback = useSelector(state => state.feedback.feedback);

    const onSubmit = (data) => {
        console.log(data);
        alert("Спасибо! Ваше обращение было успешно отправлено!")
        dispatch(setName(""))
        dispatch(setEmail(""))
        dispatch(setTelephone(""))
        dispatch(setTheme(""))
        dispatch(setMessage(""))
        dispatch(setFile(""))
    };

    return (
        <div className="main">
            <h1 style={{ textAlign: "center" }}>Контакты</h1>
            <hr style={{ height: "3px", background: "black", width: "100%", border: 0 }} />
            <div className="professors">
            <div className="professors">
                <div className="professorBlock">
                    <img src="https://belstu.by/images/sotrudnikam/personal-page/shiman-1.jpg" alt="Декан факультета" />
                    <h3>Декан факультета</h3>
                    <hr />
                    <h2>Шиман Дмитрий Васильевич</h2>
                </div>
                <div className="professorBlock">
                    <img src="https://belstu.by/images/sotrudnikam/personal-page/salichiz11.jpg" alt="Зам. декана по воспитательной работе" />
                    <h3>Зам. декана по воспитательной работе</h3>
                    <hr />
                    <h2>Салычиц Ольга Игоревна</h2>
                </div>
                <div className="professorBlock">
                    <img src={nopic} alt="Специалист" />
                    <h3>Специалист</h3>
                    <hr />
                    <h2>Жавненко Анна Александровна</h2>
                </div>
                <div className="professorBlock">
                    <img src={nopic} alt="Секретарь" />
                    <h3>Секретарь</h3>
                    <hr />
                    <h2>Юшкевич Екатерина Георгиевна</h2>
                </div>
            </div>
            <div className="contact">
                <div className="contactText">          
                    Время работы:<br />
                    Пн-Пт: 08:30 — 16:15, 12:00 — 12:45<br />
                    Суббота: 08:30 — 13:30
                    <br />
                    Почта: <a href="mailto:it@belstu.by">it@belstu.by</a>
                    <br />
                    Телефон: <a href="tel:80173993389">(017)399-3389</a>
                </div>
            </div>
            </div>
            <div className="contactsForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Электронное обращение</h1>

                    <input 
                        type="text"
                        placeholder="Ваше ФИО (обязательно)"
                        {...register("name", { required: "Введите ваше ФИО" })}
                        value={feedback.name}
                        onChange={(e) => dispatch(setName(e.target.value))}
                    />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                    
                    <input 
                        type="email"
                        placeholder="Ваш e-mail (обязательно)"
                        {...register("email", {
                            required: "Введите ваш e-mail",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Введите корректный e-mail"
                            }
                        })}
                        value={feedback.email}
                        onChange={(e) => dispatch(setEmail(e.target.value))}
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}

                    <input 
                        type="text"
                        placeholder="Ваш номер телефона"
                        {...register("telephone", {
                            pattern: {
                                value: /^\+?\d{10,}$/,
                                message: "Введите корректный номер телефона"
                            }
                        })}
                        value={feedback.telephone}
                        onChange={(e) => dispatch(setTelephone(e.target.value))}
                    />
                    {errors.telephone && <span className="error">{errors.telephone.message}</span>}
                    
                    <input 
                        type="text"
                        placeholder="Тема"
                        {...register("theme")}
                        value={feedback.theme}
                        onChange={(e) => dispatch(setTheme(e.target.value))}
                    />

                    <textarea 
                        placeholder="Сообщение (обязательно)"
                        {...register("message", { required: "Введите ваше сообщение" })}
                        value={feedback.message}
                        onChange={(e) => dispatch(setMessage(e.target.value))}
                    />
                    {errors.message && <span className="error">{errors.message.message}</span>}

                    <input 
                        id="file"
                        type="file"
                        style={{ paddingLeft: "0", height: "25px" }}
                        {...register("file")}
                        onChange={(e) => dispatch(setFile(e.target.files[0]))}
                    />

                    <input 
                        type="submit"
                        id="submit"
                        value="Отправить"
                    />
                </form>
            </div>
        </div>
    );
};
