import './App.css';
import GuestHome from './components/common/GuestHome/GuestHome';
import Header from './components/common/Header/Header';
import MyProfile from './components/common/MyProfile/MyProfile';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<GuestHome />}/>
      <Route path='/my-profile' element={<MyProfile />}/>
      </Routes>
    </div>
  );
}

export default App;
