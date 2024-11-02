import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Main } from "./main/Main";
import { Contacts } from "./main/Contacts"
import "./App.css"
const classes = document.body.classList;
        let timer = 0;
        window.addEventListener('resize', function () {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            else
                classes.add('stop-transitions');

            timer = setTimeout(() => {
                classes.remove('stop-transitions');
                timer = null;
            }, 100);
          })
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu"></link>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/core-such-react" element={<Main />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;