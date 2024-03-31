import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeDasu from './pages/HomeDasu';
import SigninDasu from './pages/SigninDasu';
import ProfileDasu from './pages/ProfileDasu';
import SignUpDasu from './pages/SignUpDasu';
import HeaderDasu from './components/HeaderDasu';

export default function App() {
  return (
  <BrowserRouter>
  <HeaderDasu/>
    <Routes>
      <Route path="/" element={<HomeDasu/>}/>
      <Route path="/Sign-in-dasu" element={<SigninDasu/>}/>
      <Route path="/Profile-dasu" element={<ProfileDasu/>}/>
      <Route path="/Sign-up-dasu" element={<SignUpDasu/>}/>
    </Routes>
  </BrowserRouter>
  );
    
}
