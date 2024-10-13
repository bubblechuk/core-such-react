import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Main } from "./main/Main";
import { Contacts } from "./main/Contacts"

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
            <Route path="/" element={<Main />} />
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