import './App.css';
import LandingPage from './Screens/LandingPage/LandingPage';
import Notes from './Screens/Notes/Notes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" Component={LandingPage} exact />
      <Route path="/mynotes" Component={Notes} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
export default App;
