import './App.css';
import { Skills } from './layout/sections/skills/Skills';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Works } from './layout/sections/works/Works';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Contact } from './layout/sections/contacs/Contact';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Footer } from './assets/images/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;
