import './App.css';
import Dictionary from "./Dictionary";
import Footer from './Footer';

export default function App() {
  return (
    <div className="container">
    <div className="App">
      <header className="App-header"> DICTIONARY
      </header>
      <main>
        <Dictionary defaultKeyword="yellow" />
      </main>
      <footer className="App-footer">
       <Footer />
      </footer>
    </div>
    </div>
  );
}

