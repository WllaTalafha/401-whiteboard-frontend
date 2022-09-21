import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';
import Log from './components/log/Log';

function App() {  
  const [logged, setlogged] = useState(false);
  
  return (
    <Router>
      <div>
        <Header logged={logged} setlogged={setlogged}/>
        <Routes>
          <Route exact path="/" element={<Log logged={logged} setlogged={setlogged}/>} />
          <Route exact path="/app" element={<Post logged={logged} setlogged={setlogged}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App;