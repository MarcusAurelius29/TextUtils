import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us"/>
    
    <div className="container">
      {/* <TextForm heading = "Enter your text here to analyze"/> */}
      <About />
    </div>

    </>
    
  );
}

export default App;
