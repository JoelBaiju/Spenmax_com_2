import logo from './logo.svg';
import './App.css';
import Capital from './pages/Capital/Capital';
import { Route,Router,Routes } from 'react-router-dom';
import PrivacyPolicy from './components/Privacy&Terms/PrivacyPolicy';
import TermsConditions from './components/Privacy&Terms/TermsConditions';
import RefundPolicy from './components/Privacy&Terms/RefundPolicy';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className=" w-screen md:h-screen  overflow-x-hidden">
      
        <Routes>
          <Route path='/' element={<Capital/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/terms&conditions' element={<TermsConditions/>}/>
          <Route path='/refundpolicy' element={<RefundPolicy/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
