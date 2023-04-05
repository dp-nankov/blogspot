import './App.css';
import GuestHome from './components/common/GuestHome/GuestHome';
import Header from './components/common/Header/Header';
import MyProfile from './components/common/MyProfile/MyProfile';
import {Routes, Route} from 'react-router-dom';
import Ads from './components/Ads/Ads/Ads';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<GuestHome />}/>
      <Route path='/my-profile' element={<MyProfile />}/>
      <Route path='/ads' element={<Ads />}/>
      </Routes>
    </div>
  );
}

export default App;
