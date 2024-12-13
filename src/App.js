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
import Loading from './components/Loading/Loading';
import { useState } from 'react';
function App() {
  const [isloading,setloading]=useState(false)
  const startloading =()=>{
    setloading(true)
  }
  const stoploading=()=>{
    setloading(false)
  }

  return (
    <div className="relative w-screen md:h-screen  ">
        {isloading ? <Loading/> : ''}
        <Routes>
          <Route path='/' element={<Capital/>}>
            <Route path='' element={<Home/>} />
            <Route path='/vendors' element={<Vendors startloading={startloading} stoploading={stoploading}/>}/>
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
