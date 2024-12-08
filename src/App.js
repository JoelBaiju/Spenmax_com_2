import logo from './logo.svg';
import './App.css';
import Capital from './pages/Capital/Capital';
import { Route,Router,Routes } from 'react-router-dom';
import PrivacyPolicy from './components/Privacy&Terms/PrivacyPolicy';
import TermsConditions from './components/Privacy&Terms/TermsConditions';
import RefundPolicy from './components/Privacy&Terms/RefundPolicy';
import Home from './pages/Home/Home';
import Vendors from './pages/Vendors/Vendors';
import Pricing from './pages/Prcicing/Pricing';
function App() {
  return (
    <div className=" w-screen md:h-screen  ">
      
        <Routes>
          <Route path='/' element={<Capital/>}>
            <Route path='' element={<Home/>} />
            <Route path='/vendors' element={<Vendors/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
          </Route>

          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/terms&conditions' element={<TermsConditions/>}/>
          <Route path='/refundpolicy' element={<RefundPolicy/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
