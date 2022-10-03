import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';
import Log from './components/log/Log';
import AuthProvider from './contexs/AuthProvider';

function App() {

  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route exact path="/" element={<Log />} />
            <Route exact path="/app" element={<Post />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}
export default App;